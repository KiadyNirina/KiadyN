<script>
    import Icon from "@iconify/svelte";
</script>

<footer id="footer" class="bg-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        
        <div class="text-center md:text-left">
          <ul class="space-y-2">
            <li><a href="#about" class="text-sm md:text-base text-gray-400 hover:text-blue-600 transition-colors">À propos</a></li>
            <li><a href="#projects" class="text-sm md:text-base text-gray-400 hover:text-blue-600 transition-colors">Projets</a></li>
            <li><a href="#skills" class="text-sm md:text-base text-gray-400 hover:text-blue-600 transition-colors">Compétences</a></li>
            <li><a href="#experiences" class="text-sm md:text-base text-gray-400 hover:text-blue-600 transition-colors">Experiences</a></li>
            <li><a href="#contact" class="text-sm md:text-base text-gray-400 hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-bold mb-4">Réseaux sociaux</h3>
          <div class="flex space-x-4 justify-center md:justify-start">
            <a href="https://www.facebook.com/kiady.rambeloson" class="text-gray-400 hover:text-blue-600 transition-colors" target="_blank">
              <Icon icon="mage:facebook" class="text-4xl" />
            </a>
            <a href="https://github.com/KiadyNirina" class="text-gray-400 hover:text-blue-600 transition-colors" target="_blank">
              <Icon icon="mage:github" class="text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/kiady-ram-5216592a9/" class="text-gray-400 hover:text-blue-600 transition-colors" target="_blank">
              <Icon icon="mage:linkedin" class="text-4xl" />
            </a>
            <a href="https://wa.me/+261335777152" class="text-gray-400 hover:text-blue-600 transition-colors" target="_blank">
              <Icon icon="mage:whatsapp" class="text-4xl" />
            </a>
            <a href="mailto:kiady142ram@gmail.com" class="text-gray-400 hover:text-blue-600 transition-colors" target="_blank">
              <Icon icon="mage:email" class="text-4xl" />
            </a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} KiadyN. Tous droits réservés.</p>
      </div>
    </div>
</footer>