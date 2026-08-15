<template>
  <section class="py-16 sm:py-24 bg-white border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-brand-blue">Fleet Overview</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-2 tracking-tight">
            Explore Top Rated Rental Cars
          </h2>
          <p class="text-neutral-500 text-sm sm:text-base mt-2 max-w-xl">
            Choose from a wide variety of premium sedans, compact city cars, SUVs, and luxury sports cars with transparent pricing.
          </p>
        </div>
        
        <!-- Filter Tabs -->
        <div class="flex items-center gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            class="px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap"
            :class="selectedCategory === cat ? 'bg-neutral-900 text-white shadow-sm' : 'bg-gray-100 text-neutral-600 hover:bg-gray-200'"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Car Fleet Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="car in filteredCars"
          :key="car.id"
          class="bg-[#F8F9FC] rounded-2xl p-5 border border-gray-300/90 shadow-sm hover:border-brand-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <div class="flex items-start justify-between">
              <div>
                <span class="text-[11px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">{{ car.type }}</span>
                <h3 class="text-lg font-bold text-neutral-900 mt-2">{{ car.name }}</h3>
                <p class="text-xs text-neutral-500">{{ car.tagline }}</p>
              </div>
              <div class="text-right">
                <div class="text-lg font-extrabold text-neutral-900">${{ car.price }}<span class="text-xs font-normal text-neutral-500">/day</span></div>
                <div class="text-[10px] text-emerald-600 font-semibold flex items-center justify-end gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
                </div>
              </div>
            </div>

            <!-- Car Preview -->
            <div
              class="my-6 h-40 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-white/80 to-transparent p-2 cursor-pointer"
              @click="openBookingModal(car)"
            >
              <img
                :src="car.image"
                :alt="car.name"
                class="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
              />
            </div>

            <!-- Specs Chips -->
            <div class="grid grid-cols-3 gap-2 py-3 border-t border-b border-gray-200/60 text-center text-xs text-neutral-600">
              <div class="bg-white py-1.5 rounded-lg font-medium">
                <span class="block text-[10px] text-neutral-400">Transmission</span>
                {{ car.specs.transmission }}
              </div>
              <div class="bg-white py-1.5 rounded-lg font-medium">
                <span class="block text-[10px] text-neutral-400">Capacity</span>
                {{ car.specs.seats }} Seats
              </div>
              <div class="bg-white py-1.5 rounded-lg font-medium">
                <span class="block text-[10px] text-neutral-400">Fuel</span>
                {{ car.specs.fuel }}
              </div>
            </div>
          </div>

          <!-- Book CTA Button (Updated to "Book Car" & Opens Install App Modal) -->
          <div class="mt-5 flex items-center gap-3">
            <button
              type="button"
              class="flex-1 py-2.5 rounded-xl bg-neutral-900 text-white font-semibold text-xs hover:bg-brand-blue active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1.5 btn-spring"
              @click="openBookingModal(car)"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Book Car
            </button>
            <button
              type="button"
              class="p-2.5 rounded-xl border border-gray-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-gray-300 transition-colors"
              title="View Details"
              @click="openBookingModal(car)"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- App Install & Booking Modal -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-md"
        @click.self="isModalOpen = false"
      >
        <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 relative overflow-hidden">
          
          <!-- Top Close Button -->
          <button
            type="button"
            class="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-neutral-400 hover:text-neutral-900 transition-colors"
            @click="isModalOpen = false"
            aria-label="Close modal"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Header Icon & Badge -->
          <div class="text-center">
            <div class="w-14 h-14 rounded-2xl bg-yellow-400/20 text-neutral-900 flex items-center justify-center mx-auto mb-3 shadow-inner">
              <svg class="w-7 h-7 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="inline-block px-3 py-1 bg-blue-50 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              Mobile App Exclusive
            </span>
            <h3 class="text-2xl font-extrabold text-neutral-900 tracking-tight">
              Install App to Book Your Car
            </h3>
            <p class="text-xs sm:text-sm text-neutral-500 mt-1 max-w-sm mx-auto">
              To complete your instant booking and digital key unlock, please install the Rentigo mobile app.
            </p>
          </div>

          <!-- Selected Vehicle Mini Preview Card -->
          <div v-if="selectedCar" class="my-5 p-3.5 bg-gray-50/90 rounded-2xl border border-gray-200/80 flex items-center gap-3.5">
            <div class="w-20 h-14 bg-white rounded-xl p-1 flex items-center justify-center shrink-0 border border-gray-100">
              <img :src="selectedCar.image" :alt="selectedCar.name" class="max-h-full w-auto object-contain" />
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-sm font-bold text-neutral-900 truncate">{{ selectedCar.name }}</h4>
              <div class="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
                <span>{{ selectedCar.type }}</span>
                <span>•</span>
                <span class="font-bold text-neutral-900">${{ selectedCar.price }}/day</span>
              </div>
            </div>
          </div>

          <!-- Benefits Highlights -->
          <div class="space-y-2 mb-6 text-xs text-neutral-600 bg-blue-50/50 p-3.5 rounded-xl border border-blue-100/60">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Instant contactless Bluetooth key unlock</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Zero paper verification & 2-minute pickup</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Live GPS tracking and door-to-door delivery</span>
            </div>
          </div>

          <!-- App Store Download Badges -->
          <div class="grid grid-cols-2 gap-3">
            <!-- Google Play -->
            <a
              href="#google-play"
              class="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800 transition-all text-left group shadow-sm"
              @click="handleDownloadClick"
            >
              <svg class="w-5 h-5 shrink-0 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.368-.31-.61-.795-.61-1.397V3.211c0-.602.242-1.087.61-1.397zm11.235 11.238l2.585 2.585-12.87 7.432 10.285-10.017zM19.06 10.74l-2.613-2.614 2.613-2.614c.489.28.818.799.818 1.488 0 .69-.33 1.209-.818 1.488v2.252zm-4.216-1.527L4.559.782l12.87 7.432-2.585 1.0z"/>
              </svg>
              <div>
                <div class="text-[8px] uppercase tracking-wider text-neutral-400 font-medium leading-none">GET IT ON</div>
                <div class="text-[11px] font-bold text-white tracking-wide mt-0.5 leading-none">Google Play</div>
              </div>
            </a>

            <!-- App Store -->
            <a
              href="#app-store"
              class="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800 transition-all text-left group shadow-sm"
              @click="handleDownloadClick"
            >
              <svg class="w-5 h-5 shrink-0 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.9.04-2.02.6-2.66 1.34-.56.65-1.06 1.71-.93 2.74 1.01.08 2.06-.46 2.67-1.21z"/>
              </svg>
              <div>
                <div class="text-[8px] uppercase tracking-wider text-neutral-400 font-medium leading-none">Download on</div>
                <div class="text-[11px] font-bold text-white tracking-wide mt-0.5 leading-none">App Store</div>
              </div>
            </a>
          </div>

          <!-- SMS Link Input -->
          <div class="mt-4 pt-4 border-t border-gray-100">
            <label class="block text-xs font-semibold text-neutral-700 mb-1.5">Or get download link via SMS:</label>
            <form @submit.prevent="sendLink" class="flex gap-2">
              <input
                v-model="mobileNumber"
                type="tel"
                placeholder="+91 98765 43210"
                class="flex-1 px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue"
              />
              <button
                type="submit"
                class="px-4 py-2 bg-brand-blue text-white rounded-xl text-xs font-bold hover:bg-brand-blue-dark transition-all shrink-0"
              >
                Send Link
              </button>
            </form>
            <p v-if="linkSentMessage" class="text-xs text-emerald-600 font-semibold mt-2 flex items-center gap-1">
              ✓ App download link sent to {{ mobileNumber }}!
            </p>
          </div>

        </div>
      </div>
    </Transition>

  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import heroCarImg from '~/assets/images/hero-car.jpg'
import bannerCarImg from '~/assets/images/car-banner.jpg'

interface CarItem {
  id: number
  name: string
  tagline: string
  type: string
  price: number
  image: string
  specs: {
    transmission: string
    seats: number
    fuel: string
  }
}

const categories = ['All Fleet', 'Sports & Coupe', 'Luxury Sedan', 'Electric']
const selectedCategory = ref('All Fleet')

const isModalOpen = ref(false)
const selectedCar = ref<CarItem | null>(null)
const mobileNumber = ref('')
const linkSentMessage = ref(false)

const openBookingModal = (car: CarItem) => {
  selectedCar.value = car
  linkSentMessage.value = false
  isModalOpen.value = true
}

const handleDownloadClick = () => {
  // Can trigger deep link or analytics
}

const sendLink = () => {
  if (mobileNumber.value.trim()) {
    linkSentMessage.value = true
    setTimeout(() => {
      linkSentMessage.value = false
    }, 4000)
  }
}

const cars: CarItem[] = [
  {
    id: 1,
    name: 'Porsche 718 Cayman GTS',
    tagline: 'Precision handling & speed',
    type: 'Sports & Coupe',
    price: 189,
    image: heroCarImg,
    specs: { transmission: 'Automatic', seats: 2, fuel: 'Petrol' }
  },
  {
    id: 2,
    name: 'Mercedes-AMG GT 4-Door',
    tagline: 'Supreme luxury performance',
    type: 'Luxury Sedan',
    price: 245,
    image: bannerCarImg,
    specs: { transmission: 'Dual-Clutch', seats: 4, fuel: 'Twin-Turbo' }
  },
  {
    id: 3,
    name: 'Porsche Taycan 4S Turbo',
    tagline: 'Pure electric adrenaline',
    type: 'Electric',
    price: 210,
    image: heroCarImg,
    specs: { transmission: '1-Speed', seats: 4, fuel: '100% EV' }
  }
]

const filteredCars = computed(() => {
  if (selectedCategory.value === 'All Fleet') return cars
  return cars.filter(c => c.type === selectedCategory.value)
})
</script>
