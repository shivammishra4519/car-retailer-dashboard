<template>
  <section class="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9]">
    
    <!-- Background Decorative SVG Shapes (Matching Image 2 dynamic backdrop) -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl"></div>
      <div class="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-yellow-100/30 rounded-full blur-3xl"></div>
      
      <!-- Subtle curved vector accents -->
      <svg
        class="absolute right-0 top-0 w-1/2 h-full opacity-30 text-blue-100"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 0C250 120 400 220 500 500L500 0L100 0Z"
          fill="currentColor"
        />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Grid: Text Info & Car Showcase -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        <!-- Left Content Column (5 Cols) -->
        <div class="lg:col-span-5 text-center lg:text-left space-y-6">
          
          <h1 class="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.12]">
            Find, book and <br class="hidden sm:inline" />
            rent a car
            <span class="relative inline-block text-brand-blue font-extrabold ml-1">
              Easily
              <!-- Decorative Swoosh Underline (Matches Image 2) -->
              <svg
                class="absolute -bottom-2 sm:-bottom-3 left-0 w-full text-brand-blue"
                height="12"
                viewBox="0 0 160 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C40 2 110 3 158 11"
                  stroke="currentColor"
                  stroke-width="3.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </h1>

          <p class="text-base sm:text-lg text-neutral-600 max-w-md mx-auto lg:mx-0 font-normal leading-relaxed">
            Get a car wherever and whenever you need it with your iOS and Android device.
          </p>

          <!-- Store Download Buttons (Google Play & Apple Store) -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            
            <!-- Google Play Badge -->
            <a
              href="#download"
              class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800 active:scale-95 transition-all duration-200 shadow-md group"
            >
              <svg class="w-6 h-6 shrink-0 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.368-.31-.61-.795-.61-1.397V3.211c0-.602.242-1.087.61-1.397zm11.235 11.238l2.585 2.585-12.87 7.432 10.285-10.017zM19.06 10.74l-2.613-2.614 2.613-2.614c.489.28.818.799.818 1.488 0 .69-.33 1.209-.818 1.488v2.252zm-4.216-1.527L4.559.782l12.87 7.432-2.585 1.0z"/>
              </svg>
              <div class="text-left">
                <div class="text-[9px] uppercase tracking-wider text-neutral-300 font-medium leading-none">GET IT ON</div>
                <div class="text-xs font-bold text-white tracking-wide mt-0.5 leading-none">Google Play</div>
              </div>
            </a>

            <!-- App Store Badge -->
            <a
              href="#download"
              class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800 active:scale-95 transition-all duration-200 shadow-md group"
            >
              <svg class="w-6 h-6 shrink-0 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.9.04-2.02.6-2.66 1.34-.56.65-1.06 1.71-.93 2.74 1.01.08 2.06-.46 2.67-1.21z"/>
              </svg>
              <div class="text-left">
                <div class="text-[9px] uppercase tracking-wider text-neutral-300 font-medium leading-none">Download on the</div>
                <div class="text-xs font-bold text-white tracking-wide mt-0.5 leading-none">App Store</div>
              </div>
            </a>

          </div>

          <!-- Quick Stats / Feature Points -->
          <div class="pt-3 flex items-center justify-center lg:justify-start gap-6 text-xs text-neutral-500">
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Instant Verification</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-brand-blue"></span>
              <span>Zero Security Deposit</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>24/7 Roadside Assist</span>
            </div>
          </div>

        </div>

        <!-- Right Visual Showcase Column (7 Cols) -->
        <div class="lg:col-span-7 relative flex items-center justify-center">
          
          <!-- Car Display Container with dynamic backdrop aura -->
          <div class="relative w-full max-w-2xl mx-auto group">
            
            <!-- Soft ambient shadow -->
            <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-neutral-900/10 blur-xl rounded-full"></div>
            
            <!-- Car Image from Assets -->
            <div class="relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                :src="selectedCarImage"
                alt="Blue Luxury Sports Car"
                class="w-full h-auto object-contain drop-shadow-2xl select-none"
              />
            </div>

            <!-- Optional Image Switcher Pill -->
            <div class="absolute bottom-2 right-4 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200/80 shadow-sm text-xs text-neutral-700">
              <span class="font-medium text-[11px] text-neutral-500">Car View:</span>
              <button
                type="button"
                class="px-2 py-0.5 rounded-full font-semibold transition-colors"
                :class="selectedCarKey === 'blue' ? 'bg-brand-blue text-white' : 'text-neutral-600 hover:bg-gray-100'"
                @click="switchCar('blue')"
              >
                Blue Sport
              </button>
              <button
                type="button"
                class="px-2 py-0.5 rounded-full font-semibold transition-colors"
                :class="selectedCarKey === 'red' ? 'bg-brand-blue text-white' : 'text-neutral-600 hover:bg-gray-100'"
                @click="switchCar('red')"
              >
                Red Luxury
              </button>
            </div>

          </div>

        </div>

      </div>

      <!-- Bottom Floating Search Bar Widget -->
      <div class="mt-10 lg:mt-14">
        <BookingSearch />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Import assets directly using modern Nuxt / Vite asset import
import heroCarImg from '~/assets/images/hero-car.jpg'
import bannerCarImg from '~/assets/images/car-banner.jpg'

const selectedCarKey = ref<'blue' | 'red'>('blue')
const selectedCarImage = ref(heroCarImg)

const switchCar = (key: 'blue' | 'red') => {
  selectedCarKey.value = key
  selectedCarImage.value = key === 'blue' ? heroCarImg : bannerCarImg
}
</script>
