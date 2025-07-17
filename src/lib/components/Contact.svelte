<section id="contact" class="py-20 mt-50">
    <div class="max-w-2xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">
        <span class="border-b-4 border-blue-500 pb-2 dark:text-gray-100">Contactez-moi</span>
      </h2>
      
      <form class="space-y-6 dark:text-gray-100">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block mb-2 font-medium">Nom</label>
            <input 
              type="text" 
              id="name" 
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label for="email" class="block mb-2 font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900"
              placeholder="votre@email.com"
            />
          </div>
        </div>
        
        <div>
          <label for="subject" class="block mb-2 font-medium">Sujet</label>
          <input 
            type="text" 
            id="subject" 
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900"
            placeholder="Objet du message"
          />
        </div>
        
        <div>
          <label for="message" class="block mb-2 font-medium">Message</label>
          <textarea 
            id="message" 
            rows="5"
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900"
            placeholder="Votre message..."
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Envoyer le message
        </button>
      </form>
    </div>
  </section>