import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASS } from '$env/static/private';

export async function POST({ request }) {
  const data = await request.json();
  const { name, email, subject = 'Sans objet', message } = data;

  // ✅ Vérification des champs obligatoires
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Tous les champs obligatoires doivent être remplis.' }),
      { status: 400 }
    );
  }

  // ✅ Vérification du format de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: 'Veuillez entrer une adresse email valide.' }),
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    // ✅ 1️⃣ Email envoyé à TOI (propriétaire du portfolio)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      subject: `Nouveau message de ${name} - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>📩 Nouveau message depuis votre portfolio</h2>
          <p><strong>De :</strong> ${name} (${email})</p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <p><strong>Message :</strong></p>
          <div style="background:#f5f5f5;padding:15px;border-radius:5px;margin-top:10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr>
          <p style="color:#666;font-size:12px;">
            Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
          </p>
        </div>
      `
    });

    // ✅ 2️⃣ Email de confirmation envoyé à l’expéditeur
    await transporter.sendMail({
      from: `TeamKn <${EMAIL_USER}>`,
      to: email,
      subject: 'Confirmation de réception de votre message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
          <p>Bonjour <strong>${name}</strong>,</p>

          <p>
            Ceci est un e-mail de confirmation automatique pour vous informer que 
            j’ai bien reçu votre message envoyé via le formulaire de contact de mon 
            <strong>portfolio</strong>.
          </p>

          <p>
            Votre message concernait : <em>"${subject || 'Sans sujet'}"</em>.<br>
            Je prendrai le temps de le lire attentivement et de vous répondre 
            dans les plus brefs délais.
          </p>

          <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #0d6efd; border-radius: 5px; margin: 20px 0;">
            <strong>📝 Contenu de votre message :</strong><br>
            ${message.replace(/\n/g, '<br>')}
          </div>

          <p>
            Merci encore pour votre intérêt et votre confiance.<br>
            À très bientôt !
          </p>

           <p style="margin-top: 40px;">
            Cordialement,
          </p>

          <p style="margin-top: 10px;">
            <strong>TeamKn</strong><br>
            <span>Développeur Web Fullstack</span><br>
            E-mail : <a href="mailto:${EMAIL_USER}" style="color: #0d6efd; text-decoration: none;">${EMAIL_USER}</a><br>
            Tel : +261 34 10 394 90<br>
            Site web : <a href="https://kiadynirina.netlify.app" style="color: #0d6efd; text-decoration: none;">kiadynirina.netlify.app</a>
          </p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 13px; color: #777;">
            Cet e-mail vous a été envoyé automatiquement suite à la soumission du formulaire de contact sur le portfolio de Kiady. 
            Merci de ne pas y répondre directement.
          </p>
        </div>
      `
    });

    // ✅ Réponse renvoyée au frontend
    return new Response(
      JSON.stringify({
        success:
          'Votre message a été envoyé avec succès. Un email de confirmation vous a été envoyé. Merci de m’avoir contacté !'
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Erreur envoi mail:', error);
    return new Response(
      JSON.stringify({
        error: "Erreur lors de l'envoi du message. Veuillez réessayer plus tard."
      }),
      { status: 500 }
    );
  }
}
