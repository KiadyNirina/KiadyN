<script>
  //import { supabase } from '$lib/supabaseClient'
  import emailjs from '@emailjs/browser';
  import Icon from '@iconify/svelte';

  let form = {
    name: '',
    email: '',
    message: ''
  }
  let isSending = false
  let success = false
  let error = ''

  async function handleSubmit(event) {
    event.preventDefault()
    isSending = true
    error = ''
    success = false

    try {
      // Validation
      if (!form.name.trim()) throw new Error('Le nom est requis')
      if (!form.email.trim()) throw new Error('L\'email est requis')
      if (!form.message.trim()) throw new Error('Le message est requis')
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        throw new Error('Email invalide')
      }

      // 1. Email pour MOI (notification)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_WELCOME,
        {
          name: form.name,
          email: form.email,
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Email de confirmation pour L'UTILISATEUR
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
        {
          name: form.name,
          email: form.email,
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Enregistrement dans Supabase 
      /*const { error: dbError } = await supabase
        .from('contacts')
        .insert([{ ...form }])

      if (dbError) throw dbError*/

      success = true
      form = { name: '', email: '', message: '' }

    } catch (err) {
      error = err.message
      console.error('Erreur:', err)
    } finally {
      isSending = false
    }
  }
</script>
  
<div class="content">
  <h1>Contact me</h1>
  <p class="text-gray-300">Ready to bring your ideas to life? Let's talk! Send me a message and let's create together.</p>

  <!-- Notifications -->
  {#if success}
    <div class="notification success">
      ✓ Message sent successfully! A confirmation has been sent to your email.
    </div>
  {:else if error}
    <div class="notification error">
      ⚠ {error}
    </div>
  {/if}

  <!-- Formulaire -->
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input">
      <label for="name">Name</label>
      <input 
        type="text" 
        id="name"
        class="w-full" 
        bind:value={form.name}
        disabled={isSending}
        required
      >
    </div>
    
    <div class="input">
      <label for="email">Email</label>
      <input 
        type="email" 
        id="email" 
        class="w-full"
        bind:value={form.email}
        disabled={isSending}
        required
      >
    </div>
    
    <div class="input mess">
      <label for="message">Message</label>
      <textarea 
        id="message" 
        class="w-full"
        bind:value={form.message}
        disabled={isSending}
        required
      ></textarea>
    </div>
    
    <button type="submit" class="w-full flex items-center justify-center" disabled={isSending}>
      {isSending ? 'Sending...' : 'Send message'}
      <Icon icon="mdi:telegram" class="ml-1" width="25"/>
    </button>
  </form>
</div>

<style>

.content{
    margin-top: 50px;
}
.content h1{
    font-family: "rubik";
    text-align: center;
    font-size: 50px;
}
.content p{
    font-family: 'poppins';
    text-align: center;
    font-size: 13px;
    margin-bottom: 20px;
}
.content form {
    background-color: rgba(255, 255, 255, 0.049);
    padding: 20px;
    border-radius: 5px;
}
.content form .input {
    width: 100%;
    margin-bottom: 10px;
}
.content form .input label{
    font-family: 'poppins';
    color: white;
    font-size: 13px;
}
.content form .input input{
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: rgba(15, 55, 100, 0.589);
    font-size: 15px;
    font-family: 'poppins';
    color: white;
    padding-left: 5px;
}
.content form .mess textarea{
    height: 150px;
    border-radius: 5px;
    border: none;
    background-color: rgba(15, 55, 100, 0.589);
    font-size: 15px;
    font-family: 'poppins';
    color: white;
    padding-left: 5px;
}
.content form button{
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: rgb(0, 98, 255);
    color: white;
    font-family: 'poppins';
    font-size: 15px;
}
.content form button:hover{
    cursor: pointer;
    background-color: rgb(0, 132, 255);
}
.content .success {
    color: green;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: #f0fff0;
    border: 1px solid green;
    border-radius: 4px;
    font-family: "poppins";
}

.content .error {
    color: red;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: #fff0f0;
    border: 1px solid red;
    border-radius: 4px;
}

.notification {
    padding: 12px;
    margin-bottom: 20px;
    border-radius: 4px;
    font-weight: 500;
}

.content form button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}
</style>