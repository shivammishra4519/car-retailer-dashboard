<template>
  <section class="py-16 sm:py-20 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header Area (Matches Image 3) -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <!-- Top Pill Tag -->
        <span class="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-blue-50 text-brand-blue tracking-wide">
          Top Brand Car
        </span>

        <!-- Main Title -->
        <h2 class="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-3 tracking-tight">
          Rent a car from Top Brands
        </h2>

        <!-- Subtitle -->
        <p class="text-neutral-500 text-sm sm:text-base mt-3 leading-relaxed">
          Get on a road-trip now with the best deals for high-end cars manufactured by top automobile companies in the world.
        </p>
      </div>

    </div>

    <!-- Infinite Continuous Marquee Track Container (Left to Right / Continuous loop) -->
    <div class="relative w-full overflow-hidden py-4">
      
      <!-- Gradient Fade Overlays on Edges for Smooth Aesthetic -->
      <div class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
      <div class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

      <!-- Marquee Track with Loop -->
      <div class="animate-infinite-marquee flex items-center gap-6">
        
        <!-- Render duplicated list (2x) to create seamless infinite continuity -->
        <div
          v-for="(brand, idx) in loopBrands"
          :key="`${brand.id}-${idx}`"
          class="shrink-0"
        >
          <!-- Individual Brand Card (Matches Image 3 Design) -->
          <div
            class="w-[230px] sm:w-[260px] bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-4 border border-gray-300/90 shadow-sm hover:shadow-md hover:border-brand-blue hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <!-- Brand Logo Frame -->
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 border border-gray-100 p-2 shrink-0 group-hover:scale-110 group-hover:bg-blue-50/50 transition-transform duration-300"
            >
              <!-- Dynamic Image URL or SVG Logo rendering -->
              <img
                v-if="brand.logoUrl"
                :src="brand.logoUrl"
                :alt="brand.name"
                class="max-w-full max-h-full object-contain"
              />
              <div
                v-else-if="brand.logoSvg"
                v-html="brand.logoSvg"
                class="w-full h-full flex items-center justify-center"
              ></div>
              <div
                v-else
                class="w-8 h-8 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center"
              >
                {{ brand.name.slice(0, 2).toUpperCase() }}
              </div>
            </div>

            <!-- Brand Info -->
            <div class="flex-1 min-w-0">
              <h3 class="text-base font-bold text-neutral-900 truncate group-hover:text-brand-blue transition-colors">
                {{ brand.name }}
              </h3>
              <p class="text-xs text-neutral-500 font-medium mt-0.5">
                {{ brand.carCount }} {{ typeof brand.carCount === 'number' ? 'Cars' : '' }}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- Bottom Action Button (Matches Image 3 'View all Brands') -->
    <div class="mt-10 text-center">
      <button
        type="button"
        class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-dark active:scale-95 transition-all duration-200 shadow-md shadow-blue-500/25 btn-spring"
        @click="showAllBrandsModal = true"
      >
        View all Brands
      </button>
    </div>

    <!-- Modal for 'View all Brands' -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="showAllBrandsModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm"
        @click.self="showAllBrandsModal = false"
      >
        <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-gray-100">
          <div class="flex items-center justify-between pb-4 border-b border-gray-100">
            <div>
              <h3 class="text-xl font-bold text-neutral-900">All Available Brands</h3>
              <p class="text-xs text-neutral-500 mt-0.5">Explore full fleet across all luxury and premium makers</p>
            </div>
            <button
              type="button"
              class="p-2 rounded-full hover:bg-gray-100 text-neutral-500 hover:text-neutral-900 transition-colors"
              @click="showAllBrandsModal = false"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- All brands grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div
              v-for="brand in brandList"
              :key="`modal-${brand.id}`"
              class="p-4 rounded-2xl border border-gray-100 bg-gray-50/50 flex items-center gap-3.5 hover:bg-blue-50/40 hover:border-blue-200 transition-all cursor-pointer"
            >
              <div class="w-10 h-10 rounded-xl bg-white border border-gray-200/80 p-2 flex items-center justify-center shrink-0">
                <div v-if="brand.logoSvg" v-html="brand.logoSvg" class="w-full h-full flex items-center justify-center"></div>
                <span v-else class="text-xs font-bold">{{ brand.name.slice(0, 2) }}</span>
              </div>
              <div>
                <h4 class="font-bold text-sm text-neutral-900">{{ brand.name }}</h4>
                <span class="text-xs text-neutral-500">{{ brand.carCount }} {{ typeof brand.carCount === 'number' ? 'Cars' : '' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

export interface CarBrand {
  id: string | number
  name: string
  carCount: number | string
  logoUrl?: string
  logoSvg?: string
}

const showAllBrandsModal = ref(false)

// Dynamic brand data list - easily bindable to API response in the future!
const brandList = ref<CarBrand[]>([
  {
    id: 'mercedes',
    name: 'Mercedes Benz',
    carCount: '368 Cars',
    logoSvg: `
      <svg class="w-7 h-7 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v10M12 12l-8.66 5M12 12l8.66 5" stroke-linecap="round" />
      </svg>
    `
  },
  {
    id: 'bmw',
    name: 'BMW',
    carCount: '104 Cars',
    logoSvg: `
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#1E6FFB" stroke-width="2" />
        <path d="M12 2A10 10 0 0 1 22 12H12V2z" fill="#1E6FFB" />
        <path d="M12 12H2A10 10 0 0 1 12 22V12z" fill="#1E6FFB" />
        <circle cx="12" cy="12" r="10" stroke="#000" stroke-width="1" />
      </svg>
    `
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    carCount: '18 Cars',
    logoSvg: `
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="2" fill="#FFEB3B" stroke="#000" stroke-width="1.2" />
        <path d="M4 3h16v3H4z" fill="#4CAF50" />
        <path d="M4 6h16v3H4z" fill="#FFF" />
        <path d="M4 9h16v3H4z" fill="#F44336" />
        <path d="M12 11c-1 2-2 3-3 4l2 1-1 3 3-2 2 1-1-3 2-2c-2-1-3-1-4-2z" fill="#000" />
      </svg>
    `
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    carCount: '44 Cars',
    logoSvg: `
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 6v10l9 6 9-6V6l-9-4z" fill="#111" stroke="#EAB308" stroke-width="1.5" />
        <path d="M8 10l4-3 4 3-2 5h-4l-2-5z" fill="#EAB308" />
      </svg>
    `
  },
  {
    id: 'tesla',
    name: 'Tesla',
    carCount: '5 Cars',
    logoSvg: `
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 4c4 0 7 1 9 2l-1 2c-2-1-5-1.5-8-1.5S6 7 4 8L3 6c2-1 5-2 9-2z" fill="#E11D48" />
        <path d="M12 7.5c2 0 4 .5 5 1l-1 2c-1-.5-2.5-.8-4-.8s-3 .3-4 .8l-1-2c1-.5 3-1 5-1z" fill="#E11D48" />
        <path d="M11 10.5h2V21h-2V10.5z" fill="#E11D48" />
      </svg>
    `
  },
  {
    id: 'porsche',
    name: 'Porsche',
    carCount: '82 Cars',
    logoSvg: `
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 5v8c0 5 4 8 8 9 4-1 8-4 8-9V5l-8-3z" fill="#D97706" stroke="#000" stroke-width="1.2" />
        <path d="M12 5v14M4 11h16" stroke="#000" stroke-width="1" />
        <circle cx="12" cy="11" r="2.5" fill="#000" />
      </svg>
    `
  },
  {
    id: 'audi',
    name: 'Audi',
    carCount: '120 Cars',
    logoSvg: `
      <svg class="w-8 h-8 text-neutral-800" viewBox="0 0 32 16" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="6" cy="8" r="4.5" />
        <circle cx="12.5" cy="8" r="4.5" />
        <circle cx="19.5" cy="8" r="4.5" />
        <circle cx="26" cy="8" r="4.5" />
      </svg>
    `
  },
  {
    id: 'bentley',
    name: 'Bentley',
    carCount: '15 Cars',
    logoSvg: `
      <svg class="w-7 h-7 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <ellipse cx="12" cy="12" rx="4" ry="4" fill="#111" />
        <path d="M3 10c3 0 5 2 5 2s-2 2-5 2M21 10c-3 0-5 2-5 2s2 2 5 2" stroke-linecap="round" />
        <text x="12" y="14" font-size="6" font-weight="bold" fill="#fff" text-anchor="middle">B</text>
      </svg>
    `
  },
  {
    id: 'rolls_royce',
    name: 'Rolls Royce',
    carCount: '12 Cars',
    logoSvg: `
      <svg class="w-7 h-7 text-neutral-900" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="#000" stroke-width="1.5" fill="#fff" />
        <text x="10" y="14" font-size="8" font-weight="900" fill="#000">R</text>
        <text x="14" y="16" font-size="8" font-weight="900" fill="#000">R</text>
      </svg>
    `
  },
  {
    id: 'aston_martin',
    name: 'Aston Martin',
    carCount: '22 Cars',
    logoSvg: `
      <svg class="w-7 h-7 text-emerald-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M2 12c4-4 8-4 10-1 2-3 6-3 10 1-4 4-8 4-10 1-2 3-6 3-10-1z" fill="#065F46" />
        <line x1="12" y1="9" x2="12" y2="15" stroke="#fff" />
      </svg>
    `
  }
])

// Duplicating the list (2x) ensures infinite loop without empty space
const loopBrands = computed(() => [...brandList.value, ...brandList.value])
</script>
