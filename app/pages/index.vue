<template>
  <div>
    <!-- Hero Section with Headline, Car Banner, Badges & Booking Search (Image 2 Design) -->
    <HeroSection />

    <!-- Top Car Brands Continuous Infinite Marquee Section (Image 3 Design) -->
    <TopBrandsSection />

    <!-- Fleet / Vehicle Overview Section -->
    <VehicleCategories />

    <!-- Feature Highlights Section (Why Rentigo) -->
    <section id="about" class="py-16 sm:py-20 bg-neutral-900 text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="text-xs font-bold uppercase tracking-widest text-brand-yellow">Why Choose Rentigo</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
            Designed for Fast, Smooth and Worry-Free Journeys
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Card 1 -->
          <div class="bg-neutral-800/80 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400/50 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-yellow-400 text-neutral-950 flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Instant 2-Minute Booking</h3>
            <p class="text-neutral-400 text-sm leading-relaxed">
              Paperless digital verification. Unlock your verified car instantly from the app without any waiting queues.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-neutral-800/80 p-8 rounded-2xl border border-neutral-700 hover:border-blue-400/50 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Zero Hidden Fees & Insurance</h3>
            <p class="text-neutral-400 text-sm leading-relaxed">
              All rides are 100% comprehensive insured with zero security deposit and clear upfront pricing.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="bg-neutral-800/80 p-8 rounded-2xl border border-neutral-700 hover:border-emerald-400/50 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Doorstep Delivery & Pickup</h3>
            <p class="text-neutral-400 text-sm leading-relaxed">
              Get your sanitized car delivered directly to your doorstep, airport terminal, or office on time.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- App CTA Banner -->
    <section id="download" class="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 class="text-3xl font-extrabold tracking-tight">Ready to hit the road?</h2>
          <p class="text-blue-100 text-sm sm:text-base mt-2">
            Download the Rentigo mobile app today and enjoy exclusive 20% off on your first ride.
          </p>
        </div>
        <div class="flex items-center gap-4 shrink-0">
          <button
            type="button"
            class="px-7 py-3 rounded-full bg-white text-neutral-900 font-bold text-sm hover:bg-neutral-100 active:scale-95 transition-all shadow-lg"
          >
            Get App Now
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// Nuxt 3 & 4 automatically provides file-based routing for index.vue -> '/'
</script>
