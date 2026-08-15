<template>
  <div class="w-full max-w-5xl mx-auto">
    <div
      class="bg-white rounded-2xl md:rounded-full p-3 md:p-3.5 search-box-shadow border border-gray-100/90 transition-all duration-300 hover:shadow-2xl"
    >
      <form @submit.prevent="handleSearch" class="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0">
        
        <!-- Field 1: Location -->
        <div class="flex-1 flex items-center gap-3.5 px-4 py-3 md:py-2 rounded-xl md:rounded-full hover:bg-gray-50/80 transition-colors group cursor-pointer">
          <div class="w-10 h-10 rounded-full bg-blue-50/80 text-brand-blue flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div class="flex-1 text-left">
            <label class="block text-xs font-bold text-neutral-800 tracking-wide uppercase">Location</label>
            <input
              v-model="location"
              type="text"
              placeholder="Search your location"
              class="w-full text-sm text-neutral-600 placeholder-neutral-400 bg-transparent border-none p-0 focus:outline-none focus:ring-0 truncate font-medium"
            />
          </div>
        </div>

        <!-- Vertical Divider (Desktop) -->
        <div class="hidden md:block w-[1px] h-9 bg-gray-200/80 mx-1"></div>

        <!-- Field 2: Pickup Date -->
        <div class="flex-1 flex items-center gap-3.5 px-4 py-3 md:py-2 rounded-xl md:rounded-full hover:bg-gray-50/80 transition-colors group cursor-pointer">
          <div class="w-10 h-10 rounded-full bg-blue-50/80 text-brand-blue flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="flex-1 text-left">
            <label class="block text-xs font-bold text-neutral-800 tracking-wide uppercase">Pickup date</label>
            <input
              v-model="pickupDate"
              type="text"
              placeholder="Tue 15 Feb, 09:00"
              class="w-full text-sm text-neutral-600 placeholder-neutral-400 bg-transparent border-none p-0 focus:outline-none focus:ring-0 truncate font-medium"
            />
          </div>
        </div>

        <!-- Vertical Divider (Desktop) -->
        <div class="hidden md:block w-[1px] h-9 bg-gray-200/80 mx-1"></div>

        <!-- Field 3: Return Date -->
        <div class="flex-1 flex items-center gap-3.5 px-4 py-3 md:py-2 rounded-xl md:rounded-full hover:bg-gray-50/80 transition-colors group cursor-pointer">
          <div class="w-10 h-10 rounded-full bg-blue-50/80 text-brand-blue flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="flex-1 text-left">
            <label class="block text-xs font-bold text-neutral-800 tracking-wide uppercase">Return date</label>
            <input
              v-model="returnDate"
              type="text"
              placeholder="Thu 16 Feb, 11:00"
              class="w-full text-sm text-neutral-600 placeholder-neutral-400 bg-transparent border-none p-0 focus:outline-none focus:ring-0 truncate font-medium"
            />
          </div>
        </div>

        <!-- Action: Search Button -->
        <div class="p-1 md:pl-2">
          <button
            type="submit"
            class="w-full md:w-auto inline-flex items-center justify-center px-9 py-3.5 rounded-xl md:rounded-full bg-brand-blue text-white font-semibold text-sm tracking-wide hover:bg-brand-blue-dark active:scale-95 transition-all duration-200 shadow-md shadow-blue-500/25 btn-spring"
          >
            Search
          </button>
        </div>

      </form>
    </div>

    <!-- Live feedback message if searched -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="searchSubmitted"
        class="mt-3 p-3 bg-blue-50 border border-blue-100 text-blue-800 text-xs sm:text-sm font-medium rounded-xl text-center flex items-center justify-center gap-2"
      >
        <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span>Searching available vehicles for: <strong>{{ location || 'Nearby location' }}</strong> from <strong>{{ pickupDate || 'Today' }}</strong> to <strong>{{ returnDate || 'Tomorrow' }}</strong></span>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const location = ref('')
const pickupDate = ref('Tue 15 Feb, 09:00')
const returnDate = ref('Thu 16 Feb, 11:00')
const searchSubmitted = ref(false)

const handleSearch = () => {
  searchSubmitted.value = true
  setTimeout(() => {
    searchSubmitted.value = false
  }, 4000)
}
</script>
