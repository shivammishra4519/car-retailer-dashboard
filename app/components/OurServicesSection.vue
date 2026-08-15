<template>
  <section id="services" class="py-16 sm:py-20 bg-white border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header with Yellow Underline (Matches Screenshot Design) -->
      <div class="mb-10 sm:mb-12">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
          Our Services
        </h2>
        <div class="w-20 h-1.5 bg-[#FFC72C] rounded-full mt-2.5"></div>
        <p class="text-neutral-500 text-xs sm:text-sm mt-3 max-w-2xl">
          From multi-day vacation rentals and grand wedding convoys to hosting your own car for passive income — Rentigo powers every mobility need.
        </p>
      </div>

      <!-- Services 6-Card Grid (2 Rows of 3 Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div
          v-for="service in servicesList"
          :key="service.id"
          class="bg-[#F8F9FC] rounded-3xl p-6 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-yellow-400/80 hover:-translate-y-1.5 transition-all duration-300 flex items-center justify-between gap-4 group cursor-pointer relative overflow-hidden"
          @click="openServiceModal(service)"
        >
          <!-- Subtle Accent glow on hover -->
          <div class="absolute -right-8 -bottom-8 w-28 h-28 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/25 transition-all"></div>

          <!-- Left Side: Content & Tagline -->
          <div class="flex-1 pr-2 z-10">
            <div class="flex items-center gap-2 mb-1.5">
              <span class="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-gray-200 text-neutral-700">
                {{ service.badge }}
              </span>
            </div>
            <h3 class="text-lg sm:text-xl font-extrabold text-neutral-900 group-hover:text-neutral-950 transition-colors leading-snug">
              {{ service.title }}
            </h3>
            <p class="text-xs text-neutral-500 mt-1 leading-relaxed line-clamp-2">
              {{ service.tagline }}
            </p>
            
            <div class="mt-4 flex items-center gap-1.5 text-xs font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
              <span>{{ service.actionLabel }}</span>
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <!-- Right Side: Visual Illustration / Vehicle Icon -->
          <div class="w-28 sm:w-32 h-24 sm:h-28 flex items-center justify-center shrink-0 z-10">
            <!-- Custom SVG / 3D Asset Render for each service -->
            <div class="w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
              
              <!-- 1. Multi-Day Rental Visual -->
              <div v-if="service.type === 'multiday'" class="relative flex items-center justify-center">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-neutral-950 shadow-inner">
                  <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <span class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-neutral-900 text-white text-[10px] font-black flex items-center justify-center shadow">7d+</span>
              </div>

              <!-- 2. Wedding & Bulk Fleet Visual -->
              <div v-else-if="service.type === 'bulk'" class="relative flex items-center justify-center">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-rose-400 to-amber-300 flex items-center justify-center text-neutral-950 shadow-inner">
                  <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <span class="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-neutral-950 text-yellow-400 text-[9px] font-black shadow">VIP</span>
              </div>

              <!-- 3. Hourly Booking Visual -->
              <div v-else-if="service.type === 'hourly'" class="relative flex items-center justify-center">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-inner">
                  <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-yellow-400 text-neutral-950 text-[9px] font-black shadow">Flexi</span>
              </div>

              <!-- 4. Host & Earn (Rent Your Car) Visual -->
              <div v-else-if="service.type === 'host'" class="relative flex items-center justify-center">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-inner">
                  <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                </div>
                <span class="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-[9px] font-black shadow">₹ Income</span>
              </div>

              <!-- 5. Instant Self-Drive Visual -->
              <div v-else-if="service.type === 'selfdrive'" class="relative flex items-center justify-center">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-inner">
                  <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <span class="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-yellow-400 text-neutral-950 text-[9px] font-black shadow">Keyless</span>
              </div>

              <!-- 6. Airport & Chauffeur Visual -->
              <div v-else class="relative flex items-center justify-center">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-neutral-800 to-neutral-950 flex items-center justify-center text-yellow-400 shadow-inner">
                  <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <span class="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-yellow-400 text-neutral-950 text-[9px] font-black shadow">24/7</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>

    <!-- Service Detail & Quick Action Modal -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="selectedService"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-sm"
        @click.self="selectedService = null"
      >
        <div class="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] sm:max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 overflow-hidden relative">
          
          <!-- Sticky Header -->
          <div class="shrink-0 px-6 py-4 border-b border-gray-100 bg-white/95 backdrop-blur-md flex items-center justify-between z-20">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-yellow-400 text-neutral-950">
                {{ selectedService.badge }}
              </span>
              <span class="text-xs font-bold text-neutral-400">Rentigo Services</span>
            </div>
            
            <button
              type="button"
              class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-neutral-600 hover:text-neutral-950 flex items-center justify-center transition-colors"
              @click="selectedService = null"
              aria-label="Close service modal"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Scrollable Middle Body -->
          <div class="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar overscroll-contain">
            <div>
              <h3 class="text-2xl font-extrabold text-neutral-900">{{ selectedService.title }}</h3>
              <p class="text-xs sm:text-sm text-neutral-500 mt-1.5 leading-relaxed">{{ selectedService.description }}</p>
            </div>

            <!-- Features List -->
            <div class="bg-[#F8F9FC] p-4 rounded-2xl border border-gray-200/90 space-y-2.5">
              <div class="text-xs font-extrabold uppercase tracking-wider text-neutral-700">What's Included:</div>
              <div
                v-for="(feature, idx) in selectedService.features"
                :key="idx"
                class="flex items-start gap-2 text-xs text-neutral-600 font-medium"
              >
                <span class="text-emerald-600 font-bold">✓</span>
                <span>{{ feature }}</span>
              </div>
            </div>

            <!-- Host & Earn Calculator / Estimate box if host service -->
            <div v-if="selectedService.type === 'host'" class="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900">
              <div class="font-bold flex items-center justify-between">
                <span>Estimated Monthly Earnings</span>
                <span class="text-sm text-emerald-700 font-black">₹35,000 – ₹75,000/mo</span>
              </div>
              <p class="text-[11px] text-emerald-700 mt-1">Based on 15–20 booked days per month. Complete comprehensive insurance covered by Rentigo.</p>
            </div>

            <!-- Bulk / Wedding Custom Inquiry Notice -->
            <div v-else-if="selectedService.type === 'bulk'" class="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900">
              <div class="font-bold">✨ Grand Event Concierge</div>
              <p class="text-[11px] text-amber-700 mt-1">Book 5 to 50+ luxury cars with dedicated marshals, synchronized arrival times, and branded ribbons.</p>
            </div>

            <!-- Quick Inquiry Form Preview -->
            <div class="space-y-3 pt-2">
              <div class="text-xs font-bold text-neutral-800">Quick Availability Check</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your City / Hub"
                  value="Shahjahanpur / Bareilly"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                />
                <input
                  type="text"
                  placeholder="Preferred Dates / Days"
                  value="This Weekend"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                />
              </div>
            </div>

          </div>

          <!-- Sticky Footer -->
          <div class="shrink-0 px-6 py-4 bg-gray-50/95 backdrop-blur-md border-t border-gray-200 flex items-center justify-between z-20">
            <button
              type="button"
              class="px-4 py-2 text-xs font-bold text-neutral-600 hover:text-neutral-900"
              @click="selectedService = null"
            >
              Close
            </button>
            <button
              type="button"
              class="px-6 py-2.5 bg-[#FFC72C] hover:bg-yellow-400 text-neutral-950 font-bold text-xs rounded-xl shadow-sm transition-all btn-spring"
              @click="selectedService = null"
            >
              Proceed to Reserve →
            </button>
          </div>

        </div>
      </div>
    </Transition>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ServiceItem {
  id: number
  type: 'multiday' | 'bulk' | 'hourly' | 'host' | 'selfdrive' | 'chauffeur'
  title: string
  tagline: string
  badge: string
  actionLabel: string
  description: string
  features: string[]
}

const selectedService = ref<ServiceItem | null>(null)

const openServiceModal = (srv: ServiceItem) => {
  selectedService.value = srv
}

const servicesList = ref<ServiceItem[]>([
  {
    id: 1,
    type: 'multiday',
    title: 'Multi-Day Rental',
    tagline: 'Rent for days or weeks with unlimited kilometers',
    badge: 'Save up to 30%',
    actionLabel: 'Explore Packages',
    description: 'Long-term and multi-day rental packages designed for weekend getaways, family hill-station tours, and extended business travels across North India.',
    features: [
      'Zero security deposit with instant digital KYC',
      'Unlimited kilometers option on all bookings above 3 days',
      '24/7 highway roadside assistance and complimentary puncture assist',
      'Free doorstep car delivery and return pickup'
    ]
  },
  {
    id: 2,
    type: 'bulk',
    title: 'Wedding & Bulk Fleet',
    tagline: 'Luxury convoys for grand weddings & VIP events',
    badge: 'Custom Convoys',
    actionLabel: 'Reserve Convoy',
    description: 'Specialized bulk booking solutions for marriage ceremonies, corporate summits, and VIP delegations with synchronized fleet delivery.',
    features: [
      'Choose combinations of 5 to 50+ luxury sedans, sports coupes & SUVs',
      'Dedicated on-ground fleet coordinator & convoy marshals',
      'Complimentary vehicle detailing and wedding ribbon decorations',
      'Flexible hourly and multi-day convoy standby packages'
    ]
  },
  {
    id: 3,
    type: 'hourly',
    title: 'Hourly Advance Booking',
    tagline: 'Reserve hours in advance, pay strictly per hour used',
    badge: 'Flexi Hours',
    actionLabel: 'Book Hours',
    description: 'Need a car for a short city meeting or quick shopping errand? Book premium cars by the hour in advance without full-day commitments.',
    features: [
      'Flexible slot booking starting from just 2 hours',
      'Fuel-inclusive and non-fuel pricing tiers',
      'Extend trip with 1-click in the Rentigo mobile app',
      'Keyless digital unlock available 24/7'
    ]
  },
  {
    id: 4,
    type: 'host',
    title: 'Host & Earn (Rent Your Car)',
    tagline: 'List your idle car and earn steady monthly income',
    badge: 'Earn up to ₹65k/mo',
    actionLabel: 'List Your Car',
    description: 'Turn your personal car into a high-earning asset. List your vehicle on Rentigo with complete bumper-to-bumper insurance and verified renters.',
    features: [
      'Guaranteed monthly payout transferred directly to your bank account',
      '100% comprehensive insurance coverage during all guest rentals',
      'Real-time GPS tracking, speed governor, and remote immobilizer installed free',
      'Complete background verification of all drivers before handover'
    ]
  },
  {
    id: 5,
    type: 'selfdrive',
    title: 'Instant Self-Drive',
    tagline: 'Drive your dream car with zero paperwork & digital key',
    badge: 'Top Choice',
    actionLabel: 'Book Self-Drive',
    description: 'Pure driving freedom. Choose from our certified luxury sports fleet, high-end sedans, or electric supercars with instant app handover.',
    features: [
      '100% sanitized, dealer-maintained luxury fleet',
      'Digital key unlock right from your phone — no waiting for physical keys',
      'Transparent upfront pricing with zero surge fees',
      'Doorstep drop at your residence, hotel, or airport terminal'
    ]
  },
  {
    id: 6,
    type: 'chauffeur',
    title: 'Airport & Chauffeur Rides',
    tagline: 'Executive travel with certified, uniformed captains',
    badge: '24/7 Punctual',
    actionLabel: 'Book Chauffeur',
    description: 'Relax in total comfort. Our certified professional drivers ensure safe, high-speed, and courteous journeys between cities and airports.',
    features: [
      'Uniformed, background-verified professional chauffeurs',
      'Live flight tracking with zero wait charges for delayed arrivals',
      'Complimentary chilled bottled water and high-speed in-car Wi-Fi',
      'Direct highway toll Fastag auto-clearance included'
    ]
  }
])
</script>
