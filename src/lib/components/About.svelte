<script>
  import Icon from "@iconify/svelte";
</script>

<section id="about" class="py-20 mt-20 mb-20">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">
        <span class="border-b-4 border-blue-500 pb-2 dark:text-gray-100">À propos</span>
      </h2>
      
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <div class="md:w-1/3">
          <div class="bg-gradient-to-br from-blue-500 to-green-600 p-1 rounded-full">
            <img src="/pdp.jpg" alt="Profil" class="rounded-full w-64 h-64 object-cover border-4 border-white dark:border-gray-800" />
          </div>
        </div>
        
        <div class="md:w-2/3 space-y-6 text-base/7">
          <h3 class="text-2xl font-bold dark:text-gray-100 flex items-center">
            <Icon icon="mdi-laptop" class="text-2xl mr-2 animate-bounce" />
            Développeur Full-Stack Passionné
          </h3>
          <div class="text-gray-900 dark:text-gray-300">
            Je suis RAMBELOSON Kiady Nirina, un jeune développeur web de Madagascar 🇲🇬, passionné par la création de solutions digitales innovantes 💡. Je travaille avec 
            <div class="flex items-center">
              <span class="bg-gray-200 dark:bg-gray-900 px-2 py-1 flex items-center w-auto rounded-full mr-1 ml-1 text-xs sm:text-sm">
                <Icon icon="mdi:code" class="mr-1"/> PHP
              </span> , 
              <span class="bg-gray-200 dark:bg-gray-900 px-2 py-1 flex items-center w-auto rounded-full mr-1 ml-1 text-xs sm:text-sm">
                <Icon icon="mdi:code" class="mr-1"/> JavaScript
              </span> , 
              <span class="bg-gray-200 dark:bg-gray-900 px-2 py-1 flex items-center w-auto rounded-full mr-1 ml-1 text-xs sm:text-sm">
                <Icon icon="mdi:code" class="mr-1"/> Python
              </span> 
            </div> et des frameworks comme 
            <div class="flex items-center">
              <span class="bg-gray-200 dark:bg-gray-900 px-2 py-1 flex items-center w-auto rounded-full mr-1 ml-1 text-xs sm:text-sm">
                <Icon icon="mdi:code" class="mr-1"/> Laravel
              </span> , 
              <span class="bg-gray-200 dark:bg-gray-900 px-2 py-1 flex items-center w-auto rounded-full mr-1 ml-1 text-xs sm:text-sm">
                <Icon icon="mdi:code" class="mr-1"/> Django
              </span> , 
              <span class="bg-gray-200 dark:bg-gray-900 px-2 py-1 flex items-center w-auto rounded-full mr-1 ml-1 text-xs sm:text-sm">
                <Icon icon="mdi:code" class="mr-1"/> Vue.js
              </span> et 
              <span class="bg-gray-200 dark:bg-gray-900 px-2 py-1 flex items-center w-auto rounded-full mr-1 ml-1 text-xs sm:text-sm">
                <Icon icon="mdi:code" class="mr-1"/> Svelte
              </span>.
            </div>
          </div>
          <p class="text-gray-900 dark:text-gray-300">
            J'ai réalisé divers projets 🎯, en mettant l'accent sur l'expérience utilisateur et la performance 💻✨.
          </p>
          <p class="text-gray-900 dark:text-gray-300">
            Envie de collaborer sur un projet ou de discuter d'une idée ? <a href="#contact" class="text-blue-500 hover:underline font-semibold">Contactez-moi !</a>
          </p>
          
          <div class="grid md:grid-cols-2 gap-4 mt-12 text-blue-500">
            <div class="flex items-center space-x-2">
              <Icon icon="mdi-email" class="text-xl animate-bounce" />
              <a href="mailto:kiady142ram@gmail.com" class="hover:underline" target="_blank">kiady142ram@gmail.com</a>
            </div>
            <div class="flex items-center space-x-2">
              <Icon icon="mdi-map-marker" class="text-xl animate-bounce" />
              <span>Antananarivo, Madagascar</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon icon="mdi-github" class="text-xl animate-bounce" />
              <a href="https://github.com/kiadynirina" class="hover:underline" target="_blank">@kiadynirina</a>
            </div>
            <div class="flex items-center space-x-2">
              <Icon icon="mdi-linkedin" class="text-xl animate-bounce" />
              <a href="https://www.linkedin.com/in/kiady-ram-5216592a9/" class="hover:underline" target="_blank">@kiady_ram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>