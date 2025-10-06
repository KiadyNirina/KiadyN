import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASS } from '$env/static/private';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${EMAIL_USER}>`,
        to: EMAIL_USER,
        subject: `Nouveau message de ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
                <h2>Nouveau message depuis votre portfolio</h2>
                <p><strong>De:</strong> ${name}</p>
                <p><strong>Message:</strong></p>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                    ${message.replace(/\n/g, '<br>')}
                </div>
                <hr>
                <p style="color: #666; font-size: 12px;">
                    Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
                </p>
            </div>
        `,
        text: `De: ${email}\n\n${message}`,
      });

      return { success: true };
    } catch (err) {
      console.error('Erreur envoi mail:', err);
      return { success: false, error: 'Erreur lors de l’envoi du message.' };
    }
  }
};
