<template>
  <footer class="bg-neutral-950 text-white border-t border-neutral-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        
        <!-- Brand Info -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center gap-2">
            <img src="~/assets/images/logo.png" alt="Rentigo" class="h-9 w-auto object-contain" />
          </div>
          <p class="text-neutral-400 text-sm max-w-sm leading-relaxed">
            Premium car rental and mobility platform designed for seamless adventures, city travel, and business trips.
          </p>
          <div class="flex items-center gap-4 pt-2 text-neutral-400">
            <a href="#" class="hover:text-yellow-400 transition-colors" aria-label="Twitter">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" class="hover:text-yellow-400 transition-colors" aria-label="Instagram">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Company</h4>
          <ul class="space-y-2.5 text-sm text-neutral-400">
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/how-to-use" class="hover:text-white transition-colors">How to Use</NuxtLink></li>
            <li><NuxtLink to="/#about" class="hover:text-white transition-colors">Careers</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-white transition-colors">Blog & News</NuxtLink></li>
          </ul>
        </div>

        <!-- Solutions -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Services</h4>
          <ul class="space-y-2.5 text-sm text-neutral-400">
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Hourly Rental</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Daily Rental</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Monthly Subscription</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Corporate Fleets</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Support</h4>
          <ul class="space-y-2.5 text-sm text-neutral-400">
            <li><NuxtLink to="/#about" class="hover:text-white transition-colors">Safety Guidelines</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition-colors">Help Center & Contact</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition-colors">Contact Us</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Terms of Service</NuxtLink></li>
          </ul>
        </div>

      </div>

      <div class="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <p>&copy; {{ new Date().getFullYear() }} Rentigo Mobility Inc. All rights reserved.</p>
        <p>Built with Vue 3 & Nuxt 4</p>
      </div>
    </div>
  </footer>
</template>
