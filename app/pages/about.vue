<template>
  <div class="bg-white min-h-screen">
    
    <!-- ========================================================================= -->
    <!-- 1. TOP BANNER FRAME (Hero Section with Branded Frame & Key Highlights)    -->
    <!-- ========================================================================= -->
    <section class="relative bg-gradient-to-b from-[#F8F9FC] via-[#EEF2F6] to-white pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-gray-200 overflow-hidden">
      
      <!-- Background subtle decorative shapes -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div class="absolute -top-32 -right-32 w-[550px] h-[550px] bg-yellow-300/25 rounded-full blur-3xl"></div>
        <div class="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl"></div>
        <!-- Subtle Grid Pattern -->
        <div class="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Breadcrumb Navigation -->
        <nav class="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-6" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-neutral-900 transition-colors flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </NuxtLink>
          <span class="text-neutral-400">/</span>
          <span class="text-neutral-900 font-bold">About Us</span>
        </nav>

        <!-- Main Banner Frame Card -->
        <div class="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/90 shadow-sm relative overflow-hidden">
          
          <!-- Top Yellow Accent Stripe -->
          <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-[#1E6FFB]"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <!-- Left Info Column -->
            <div class="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-yellow-400/20 text-neutral-950 border border-yellow-400/50 uppercase tracking-wider">
                <span class="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                About Rentigo Mobility
              </div>

              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight leading-[1.15]">
                Redefining How India <br class="hidden sm:inline" />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-800 to-[#1E6FFB]">
                  Rents, Drives & Shares
                </span>
                <span class="text-amber-500">.</span>
              </h1>

              <p class="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Rentigo is India's next-generation smart car rental and vehicle sharing platform. We provide 100% paperless digital verification, zero security deposit, contactless keyless unlocks, and pristine dealer-maintained vehicles for family road trips, wedding convoys, hourly errands, and host earnings.
              </p>

              <!-- Quick Highlights Badges -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div class="bg-[#F8F9FC] p-3 rounded-2xl border border-gray-200 text-center">
                  <div class="text-xl sm:text-2xl font-black text-neutral-950">50K+</div>
                  <div class="text-[11px] font-semibold text-neutral-500 mt-0.5">Trips Completed</div>
                </div>
                <div class="bg-[#F8F9FC] p-3 rounded-2xl border border-gray-200 text-center">
                  <div class="text-xl sm:text-2xl font-black text-neutral-950">1,200+</div>
                  <div class="text-[11px] font-semibold text-neutral-500 mt-0.5">Verified Fleet</div>
                </div>
                <div class="bg-[#F8F9FC] p-3 rounded-2xl border border-gray-200 text-center">
                  <div class="text-xl sm:text-2xl font-black text-neutral-950">15+</div>
                  <div class="text-[11px] font-semibold text-neutral-500 mt-0.5">Active Hubs</div>
                </div>
                <div class="bg-[#F8F9FC] p-3 rounded-2xl border border-gray-200 text-center">
                  <div class="text-xl sm:text-2xl font-black text-amber-500">4.9 ★</div>
                  <div class="text-[11px] font-semibold text-neutral-500 mt-0.5">Renter Rating</div>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#services-section"
                  class="px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center gap-2 btn-spring"
                >
                  <span>Explore Our Services</span>
                  <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <NuxtLink
                  to="/contact"
                  class="px-6 py-3 rounded-full bg-white hover:bg-gray-50 text-neutral-800 font-bold text-xs sm:text-sm border border-gray-300 transition-all shadow-sm active:scale-95 flex items-center gap-2 btn-spring"
                >
                  <span>Contact Our Team</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>
              </div>

            </div>

            <!-- Right Visual Banner Showcase -->
            <div class="lg:col-span-5 relative flex items-center justify-center">
              
              <!-- Vehicle Visual Container with Frame Glow -->
              <div class="relative w-full max-w-md bg-gradient-to-tr from-amber-500/10 via-yellow-400/20 to-blue-500/10 rounded-3xl p-4 sm:p-6 border border-yellow-400/30 shadow-inner group">
                
                <!-- Floating Badge -->
                <div class="absolute -top-3 -right-3 px-3 py-1 bg-yellow-400 text-neutral-950 text-xs font-black rounded-full shadow-md z-20 flex items-center gap-1">
                  <span>⚡ 100% Digital</span>
                </div>

                <!-- Asset Car Image -->
                <div class="relative overflow-hidden rounded-2xl bg-white/70 p-3 shadow-md border border-gray-100">
                  <img
                    :src="activeBannerImg"
                    alt="Rentigo Premium Fleet Car"
                    class="w-full h-48 sm:h-56 object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                  />
                </div>

                <!-- Image Switcher Pill -->
                <div class="mt-4 flex items-center justify-between bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-gray-200 text-xs">
                  <span class="text-neutral-500 font-medium">Fleet View:</span>
                  <div class="flex items-center gap-1.5">
                    <button
                      type="button"
                      class="px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all"
                      :class="activeBannerKey === 'hero' ? 'bg-neutral-950 text-yellow-400 shadow-sm' : 'bg-gray-100 text-neutral-600 hover:bg-gray-200'"
                      @click="switchBanner('hero')"
                    >
                      Sports Coupe
                    </button>
                    <button
                      type="button"
                      class="px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all"
                      :class="activeBannerKey === 'banner' ? 'bg-neutral-950 text-yellow-400 shadow-sm' : 'bg-gray-100 text-neutral-600 hover:bg-gray-200'"
                      @click="switchBanner('banner')"
                    >
                      Luxury Sedan
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- 2. INFORMATION ABOUT OUR SITE & CORE PILLARS (Who We Are & Why Rentigo)   -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Our Story & Mission
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-neutral-950 mt-3 tracking-tight">
            Built to Eliminate Friction from Modern Car Rentals
          </h2>
          <p class="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
            Traditional car rental services are filled with hidden penalties, bulky security deposits, complex paperwork, and uncertain vehicle conditions. Rentigo was created to give you complete freedom, total price clarity, and high-performance vehicles at your fingertips.
          </p>
        </div>

        <!-- Mission & Vision Dual Card Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <!-- Mission Card -->
          <div class="bg-gradient-to-br from-[#F8F9FC] to-[#EEF2F6] p-8 rounded-3xl border border-gray-200/90 shadow-sm relative overflow-hidden group hover:border-yellow-400/80 transition-all duration-300">
            <div class="w-12 h-12 rounded-2xl bg-yellow-400 text-neutral-950 flex items-center justify-center font-bold mb-5 shadow-sm group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-extrabold text-neutral-950 mb-2">Our Mission</h3>
            <p class="text-neutral-600 text-sm leading-relaxed">
              To democratize access to world-class mobility across India by providing safe, sanitized, and instant app-enabled car rentals with <strong>Zero Security Deposit</strong> and <strong>100% Comprehensive Coverage</strong>.
            </p>
          </div>

          <!-- Vision Card -->
          <div class="bg-gradient-to-br from-[#F8F9FC] to-[#EEF2F6] p-8 rounded-3xl border border-gray-200/90 shadow-sm relative overflow-hidden group hover:border-blue-500/80 transition-all duration-300">
            <div class="w-12 h-12 rounded-2xl bg-[#1E6FFB] text-white flex items-center justify-center font-bold mb-5 shadow-sm group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-extrabold text-neutral-950 mb-2">Our Vision</h3>
            <p class="text-neutral-600 text-sm leading-relaxed">
              To build an integrated, intelligent automotive sharing network that empowers both travelers seeking unforgettable journeys and car owners desiring steady, secure passive income.
            </p>
          </div>

        </div>

        <!-- 4 Core Pillars Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all">
            <div class="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center font-bold mb-4">
              📱
            </div>
            <h4 class="text-base font-extrabold text-neutral-900 mb-1">Instant Digital KYC</h4>
            <p class="text-xs text-neutral-500 leading-relaxed">
              Upload Aadhaar & Driving License in seconds. Zero physical paperwork and zero wait queues.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-4">
              🛡️
            </div>
            <h4 class="text-base font-extrabold text-neutral-900 mb-1">Zero Security Deposit</h4>
            <p class="text-xs text-neutral-500 leading-relaxed">
              Your capital remains yours. Drive freely without locking large amounts on credit cards.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all">
            <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
              🚗
            </div>
            <h4 class="text-base font-extrabold text-neutral-900 mb-1">Doorstep Car Delivery</h4>
            <p class="text-xs text-neutral-500 leading-relaxed">
              Get your sanitized vehicle delivered right to your home, office, hotel, or airport terminal on time.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all">
            <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold mb-4">
              ⚡
            </div>
            <h4 class="text-base font-extrabold text-neutral-900 mb-1">24/7 Roadside Assist</h4>
            <p class="text-xs text-neutral-500 leading-relaxed">
              Emergency breakdown, flat-tire assistance, and highway towing support available across India anytime.
            </p>
          </div>

        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- 3. SERVICES SECTION (Image 2 Style - "What It Is" & "How It Benefits")    -->
    <!-- ========================================================================= -->
    <section id="services-section" class="py-16 sm:py-24 bg-[#F8F9FC] border-t border-b border-gray-200 relative overflow-hidden">
      
      <!-- Section Header with Yellow Accent (Matches Image 2 Style) -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div class="max-w-3xl">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-[#FFC72C] text-neutral-950 uppercase tracking-wider mb-2">
            ★ ALL RENTIGO SERVICES
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight">
            Our Services & Detailed Benefits
          </h2>
          <div class="w-24 h-1.5 bg-[#FFC72C] rounded-full mt-3"></div>
          <p class="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
            Explore our complete fleet solutions — learn <strong>what each service offers</strong> and <strong>how it benefits your journey</strong> with maximum convenience, flexibility, and value.
          </p>
        </div>
      </div>

      <!-- Services 6-Card Grid (Image 2 Inspired Yellow & Clean Card Layout) -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Service Card Loop -->
          <div
            v-for="service in detailedServices"
            :key="service.id"
            class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            <!-- Yellow Top Highlight on Hover -->
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div>
              <!-- Top Row: Badge, Title & Visual Thumbnail -->
              <div class="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-yellow-400 text-neutral-950">
                      {{ service.badge }}
                    </span>
                    <span class="text-xs font-bold text-neutral-400">{{ service.category }}</span>
                  </div>
                  <h3 class="text-2xl font-extrabold text-neutral-950 group-hover:text-amber-600 transition-colors">
                    {{ service.title }}
                  </h3>
                  <p class="text-xs font-semibold text-neutral-500 mt-0.5">
                    {{ service.tagline }}
                  </p>
                </div>

                <!-- Car Thumbnail Visual from Assets -->
                <div class="w-32 h-20 bg-gray-50 rounded-2xl p-1.5 border border-gray-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    :src="service.image"
                    :alt="service.title"
                    class="max-h-full w-auto object-contain drop-shadow-sm"
                  />
                </div>
              </div>

              <!-- Content Breakdown: "What It Is" & "How It Benefits" -->
              <div class="py-5 space-y-4">
                
                <!-- 1. What It Is Box -->
                <div class="bg-[#F8F9FC] p-4 rounded-2xl border border-gray-200/80">
                  <div class="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-neutral-900 mb-1">
                    <span class="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>What is this service?</span>
                  </div>
                  <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {{ service.whatIsIt }}
                  </p>
                </div>

                <!-- 2. How It Benefits You Box -->
                <div class="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80">
                  <div class="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-1">
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>How It Benefits You:</span>
                  </div>
                  <p class="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                    {{ service.howItBenefits }}
                  </p>
                </div>

                <!-- Key Feature Bullets -->
                <div class="space-y-2 pt-1">
                  <div class="text-xs font-bold text-neutral-800 uppercase tracking-wider">Key Highlights & Inclusions:</div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div
                      v-for="(feature, fIdx) in service.features"
                      :key="fIdx"
                      class="flex items-start gap-1.5 text-xs text-neutral-600"
                    >
                      <svg class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>{{ feature }}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Footer Action Trigger Button -->
            <div class="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
              <div class="text-xs text-neutral-500 font-medium">
                {{ service.pricingNote }}
              </div>
              <button
                type="button"
                class="px-5 py-2.5 bg-[#FFC72C] hover:bg-yellow-400 text-neutral-950 font-extrabold text-xs rounded-xl shadow-sm transition-all btn-spring flex items-center gap-1.5"
                @click="openServiceModal(service)"
              >
                <span>{{ service.actionLabel }}</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>


    <!-- ========================================================================= -->
    <!-- 4. ANIMATED IMAGE SLIDER / DESTINATIONS (Image 1 Style - Tall Cards)       -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-white overflow-hidden relative">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span class="text-xs font-extrabold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              📸 Road Trips & Journeys
            </span>
            <h2 class="text-3xl sm:text-4xl font-black text-neutral-950 mt-3 tracking-tight">
              Unforgettable Memories with Rentigo
            </h2>
            <p class="text-neutral-500 text-sm sm:text-base mt-2 max-w-xl">
              From majestic mountain drives and desert highways to grand wedding convoys and coastal sunsets — see where our happy renters take Rentigo cars.
            </p>
          </div>

          <!-- Slider Controls -->
          <div class="flex items-center gap-3">
            <button
              type="button"
              class="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-neutral-800 transition-colors active:scale-95 shadow-sm"
              aria-label="Previous Slide"
              @click="scrollSlider('left')"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              class="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-neutral-800 transition-colors active:scale-95 shadow-sm"
              aria-label="Next Slide"
              @click="scrollSlider('right')"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Continuous Smooth Animated Slider Strip (Aligned with Section Margins) -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="relative w-full overflow-hidden rounded-3xl">
          
          <!-- Scrollable Track Container -->
          <div
            ref="sliderTrackRef"
            class="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar py-2 scroll-smooth"
          >
            <!-- Destination Cards -->
            <div
              v-for="card in destinationGallery"
              :key="card.id"
              class="w-64 sm:w-80 shrink-0 rounded-[2rem] p-5 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white border border-neutral-800 shadow-sm hover:border-yellow-400/80 hover:-translate-y-1 transition-all duration-300 group relative flex flex-col justify-between overflow-hidden"
              :style="{ height: card.height }"
            >
              <!-- Card Image Background with Overlay -->
              <div class="absolute inset-0 z-0">
                <img
                  :src="card.image"
                  :alt="card.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              </div>

              <!-- Top Tag Pill -->
              <div class="relative z-10 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-yellow-400 text-neutral-950">
                  {{ card.tag }}
                </span>
                <span class="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-xs">
                  {{ card.icon }}
                </span>
              </div>

              <!-- Bottom Content Info -->
              <div class="relative z-10 space-y-1.5">
                <div class="text-[11px] font-semibold text-yellow-300 uppercase tracking-widest">
                  {{ card.location }}
                </div>
                <h3 class="text-lg sm:text-xl font-black text-white leading-tight">
                  {{ card.title }}
                </h3>
                <p class="text-xs text-neutral-300 line-clamp-2">
                  {{ card.desc }}
                </p>
                <div class="pt-2 flex items-center gap-1 text-[11px] font-bold text-yellow-400 group-hover:translate-x-1 transition-transform">
                  <span>Rent for this route</span>
                  <span>→</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Slider Tip / Info Indicator -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex items-center justify-between text-xs text-neutral-400">
        <span>👈 Swipe or click arrows to explore routes</span>
        <span class="font-medium text-neutral-500">Rentigo Verified Journeys</span>
      </div>

    </section>


    <!-- ========================================================================= -->
    <!-- 5. CALL TO ACTION / APP DOWNLOAD BANNER                                   -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-20 bg-[#F8F9FC] border-t border-gray-200 relative overflow-hidden">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- High Contrast Branded Dark Card with Yellow & Blue Glow -->
        <div class="relative bg-gradient-to-r from-neutral-950 via-[#0F172A] to-neutral-950 rounded-3xl p-8 sm:p-12 text-white border border-neutral-800 shadow-lg overflow-hidden">
          
          <!-- Soft Ambient Internal Glow -->
          <div class="absolute -top-24 -left-24 w-80 h-80 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div class="max-w-2xl text-center lg:text-left space-y-3">
              <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-[#FFC72C] text-neutral-950 uppercase tracking-wider">
                ⚡ Get Started Today
              </span>
              <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Ready to Experience the Rentigo Advantage?
              </h2>
              <p class="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Download the Rentigo app or reserve your self-drive luxury car in just 2 minutes with zero paperwork and zero security deposit.
              </p>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
              <NuxtLink
                to="/contact"
                class="px-7 py-3.5 rounded-full bg-[#FFC72C] hover:bg-yellow-300 text-neutral-950 font-black text-sm transition-all shadow-md active:scale-95 btn-spring"
              >
                Contact Fleet Desk
              </NuxtLink>
              <NuxtLink
                to="/"
                class="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all active:scale-95"
              >
                Browse Fleet
              </NuxtLink>
            </div>

          </div>

        </div>
      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- 6. SERVICE DETAIL & QUICK INQUIRY MODAL                                  -->
    <!-- ========================================================================= -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="selectedModalService"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-sm"
        @click.self="selectedModalService = null"
      >
        <div class="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] sm:max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 overflow-hidden relative">
          
          <!-- Sticky Header -->
          <div class="shrink-0 px-6 py-4 border-b border-gray-100 bg-white/95 backdrop-blur-md flex items-center justify-between z-20">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-yellow-400 text-neutral-950">
                {{ selectedModalService.badge }}
              </span>
              <span class="text-xs font-bold text-neutral-400">Rentigo Mobility Services</span>
            </div>
            
            <button
              type="button"
              class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-neutral-600 hover:text-neutral-950 flex items-center justify-center transition-colors"
              @click="selectedModalService = null"
              aria-label="Close modal"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Scrollable Body -->
          <div class="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar overscroll-contain">
            
            <div class="flex items-center gap-4">
              <div class="w-20 h-14 bg-gray-50 rounded-xl p-1 border border-gray-200 flex items-center justify-center shrink-0">
                <img :src="selectedModalService.image" :alt="selectedModalService.title" class="max-h-full w-auto object-contain" />
              </div>
              <div>
                <h3 class="text-xl font-black text-neutral-950 leading-tight">{{ selectedModalService.title }}</h3>
                <p class="text-xs text-neutral-500 mt-0.5">{{ selectedModalService.tagline }}</p>
              </div>
            </div>

            <!-- What it is summary -->
            <div class="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-xs text-neutral-700 leading-relaxed">
              <strong class="text-neutral-900 block mb-1">Service Overview:</strong>
              {{ selectedModalService.whatIsIt }}
            </div>

            <!-- How it benefits summary -->
            <div class="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-950 leading-relaxed">
              <strong class="text-amber-900 block mb-1">Key Customer Advantages:</strong>
              {{ selectedModalService.howItBenefits }}
            </div>

            <!-- Fast Inquiry Form -->
            <div class="space-y-3 pt-2">
              <div class="text-xs font-bold text-neutral-800">Quick Availability & Pricing Inquiry:</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  v-model="inquiryForm.name"
                  type="text"
                  placeholder="Your Name"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                />
                <input
                  v-model="inquiryForm.phone"
                  type="tel"
                  placeholder="Phone (+91)"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                />
              </div>
              <input
                v-model="inquiryForm.city"
                type="text"
                placeholder="City / Destination"
                class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
              />

              <div v-if="inquirySubmitted" class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-bold flex items-center gap-2">
                <span>✓</span>
                <span>Thank you! Our concierge will call you within 10 minutes.</span>
              </div>
            </div>

          </div>

          <!-- Sticky Footer -->
          <div class="shrink-0 px-6 py-4 bg-gray-50/95 backdrop-blur-md border-t border-gray-200 flex items-center justify-between z-20">
            <button
              type="button"
              class="px-4 py-2 text-xs font-bold text-neutral-600 hover:text-neutral-900"
              @click="selectedModalService = null"
            >
              Close
            </button>
            <button
              type="button"
              class="px-6 py-2.5 bg-[#FFC72C] hover:bg-yellow-400 text-neutral-950 font-bold text-xs rounded-xl shadow-sm transition-all btn-spring"
              @click="submitInquiry"
            >
              {{ inquirySubmitted ? 'Submitted!' : 'Submit Inquiry →' }}
            </button>
          </div>

        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import heroCarImg from '~/assets/images/hero-car.jpg'
import bannerCarImg from '~/assets/images/car-banner.jpg'

// SEO Meta configuration
useHead({
  title: 'About Us - Rentigo Mobility | India’s Smart Car Rental & Fleet Services',
  meta: [
    {
      name: 'description',
      content: 'Learn about Rentigo car rental platform. Explore multi-day rentals, wedding convoys, hourly bookings, self-drive cars, host & earn opportunities, and 24/7 roadside assist with zero security deposit.'
    }
  ]
})

// Top Banner Switcher
const activeBannerKey = ref<'hero' | 'banner'>('hero')
const activeBannerImg = ref(heroCarImg)

const switchBanner = (key: 'hero' | 'banner') => {
  activeBannerKey.value = key
  activeBannerImg.value = key === 'hero' ? heroCarImg : bannerCarImg
}

// 6 Detailed Services Data (100% English - "What It Is" & "How It Benefits")
interface DetailedService {
  id: number
  title: string
  tagline: string
  category: string
  badge: string
  actionLabel: string
  pricingNote: string
  image: string
  whatIsIt: string
  howItBenefits: string
  features: string[]
}

const detailedServices = ref<DetailedService[]>([
  {
    id: 1,
    title: 'Multi-Day Rental',
    tagline: 'Extended vacation & multi-day outstation travel packages',
    category: 'Outstation & Tours',
    badge: 'Save up to 30%',
    actionLabel: 'Explore Packages',
    pricingNote: 'Starting from ₹1,800/day',
    image: bannerCarImg,
    whatIsIt: 'Specialized multi-day and weekly car rental packages designed for family vacations, outstation road trips, and hill station getaways with unlimited kilometer options.',
    howItBenefits: 'Save up to 30% compared to standard daily rates, enjoy complimentary doorstep vehicle delivery & return pickup, and travel worry-free with 24/7 national highway roadside assistance.',
    features: [
      'Zero security deposit with instant digital KYC',
      'Unlimited kilometers on bookings over 3 days',
      'Free doorstep vehicle delivery & pickup',
      '24/7 national highway breakdown assistance'
    ]
  },
  {
    id: 2,
    title: 'Wedding & Bulk Fleet',
    tagline: 'Synchronized luxury convoys for grand weddings & VIP events',
    category: 'VIP & Events',
    badge: 'Custom Convoys',
    actionLabel: 'Reserve Convoy',
    pricingNote: 'Custom convoy packages',
    image: heroCarImg,
    whatIsIt: 'Tailored convoy bookings of 5 to 50+ luxury sedans, sports coupes, and premium SUVs for wedding ceremonies, corporate summits, and VIP delegations.',
    howItBenefits: 'Guaranteed on-time synchronized fleet arrival, dedicated on-ground fleet marshals, complimentary car detailing with wedding ribbon styling, and flexible standby packages.',
    features: [
      'Combinations of Mercedes, BMW, Audi & Thar',
      'Dedicated on-ground fleet marshal & coordinator',
      'Complimentary detailing & wedding ribbon styling',
      'Flexible hourly and multi-day standby options'
    ]
  },
  {
    id: 3,
    title: 'Hourly Advance Booking',
    tagline: 'Flexible slot reservations paid strictly per hour used',
    category: 'City Errands',
    badge: 'Flexi Hours',
    actionLabel: 'Book Hours',
    pricingNote: 'Slots starting from 2 hrs',
    image: heroCarImg,
    whatIsIt: 'Short-duration car rentals starting from just 2 hours for city business meetings, quick shopping errands, doctor visits, or local transit.',
    howItBenefits: 'Eliminate the need to pay full-day rates when you only need a car for a few hours. Choose between fuel-inclusive or non-fuel plans, and extend trips directly from the app.',
    features: [
      'Flexible booking slots starting from 2 hours',
      'Fuel-inclusive and non-fuel pricing tiers',
      '1-click trip extension via Rentigo mobile app',
      '24/7 digital keyless pickup and return'
    ]
  },
  {
    id: 4,
    title: 'Host & Earn (Rent Your Car)',
    tagline: 'List your idle personal car and earn steady monthly income',
    category: 'Passive Income',
    badge: 'Earn ₹35k–₹75k/mo',
    actionLabel: 'List Your Car',
    pricingNote: 'Guaranteed monthly bank payout',
    image: bannerCarImg,
    whatIsIt: 'A secure peer-to-peer hosting program that allows car owners to list their idle personal vehicles on Rentigo to generate regular passive income.',
    howItBenefits: 'Earn ₹35,000 to ₹75,000 per month deposited directly into your bank account, with 100% bumper-to-bumper comprehensive insurance and free telematics tracking.',
    features: [
      'Guaranteed monthly payout transferred to bank',
      '100% comprehensive insurance cover during trips',
      'Free GPS tracking, speed governor & remote kill-switch',
      'Strict background verification for every driver'
    ]
  },
  {
    id: 5,
    title: 'Instant Self-Drive',
    tagline: 'Pure driving freedom with zero paperwork & digital key',
    category: 'Self-Drive Fleet',
    badge: 'Top Choice',
    actionLabel: 'Book Self-Drive',
    pricingNote: 'Instant Bluetooth Unlock',
    image: heroCarImg,
    whatIsIt: 'On-demand contactless car rental that lets you unlock verified luxury and premium cars straight from your smartphone without meeting any agents.',
    howItBenefits: 'Enjoy total privacy and unmatched driving excitement, 2-minute digital Aadhaar & DL verification, zero deposit, and transparent upfront pricing.',
    features: [
      '100% sanitized, dealer-maintained premium fleet',
      'Mobile Bluetooth digital key — no physical key handover',
      'Zero surge pricing and transparent upfront rates',
      'Doorstep drop at your residence, hotel, or airport'
    ]
  },
  {
    id: 6,
    title: 'Airport & Chauffeur Rides',
    tagline: 'Executive luxury transit with certified uniformed captains',
    category: 'Chauffeur Transit',
    badge: '24/7 Punctual',
    actionLabel: 'Book Chauffeur',
    pricingNote: 'Flight tracking included',
    image: bannerCarImg,
    whatIsIt: 'Executive chauffeur-driven transportation for airport transfers, outstation business journeys, and VIP city travel with seasoned professional drivers.',
    howItBenefits: 'Courteous, background-verified chauffeurs, automated live flight tracking with zero wait charges for delayed flights, and complimentary refreshments.',
    features: [
      'Uniformed, background-verified professional chauffeurs',
      'Live flight tracking with zero delay waiting charges',
      'Complimentary bottled water and high-speed in-car Wi-Fi',
      'Direct automated FASTag toll clearance included'
    ]
  }
])

// Destination Slider Data (Matching Image 1 Aesthetic)
const destinationGallery = ref([
  {
    id: 1,
    title: 'Himalayan Mountain Pass',
    location: 'Manali to Leh Highway',
    tag: 'Mountain Tour',
    icon: '🏔️',
    height: '420px',
    desc: 'Conquer snow-capped ridges and steep mountain serpentines with our 4x4 Luxury SUVs.',
    image: bannerCarImg
  },
  {
    id: 2,
    title: 'Golden Desert Safari',
    location: 'Jaisalmer & Thar Dunes',
    tag: 'Sunset Highway',
    icon: '🏜️',
    height: '370px',
    desc: 'Golden hour cruises and desert camp expeditions with full comfort and panoramic views.',
    image: heroCarImg
  },
  {
    id: 3,
    title: 'Coastal Palm Boulevard',
    location: 'Goa & Konkan Coastal Route',
    tag: 'Coastal Drive',
    icon: '🌊',
    height: '440px',
    desc: 'Feel the ocean breeze in a sleek convertible sports coupe with friends and family.',
    image: bannerCarImg
  },
  {
    id: 4,
    title: 'Royal Heritage Convoys',
    location: 'Jaipur & Udaipur Palaces',
    tag: 'VIP Wedding Route',
    icon: '👑',
    height: '380px',
    desc: 'Grand entry in synchronised luxury sedans for royal palace celebrations and weddings.',
    image: heroCarImg
  },
  {
    id: 5,
    title: 'Metropolitan Night Cruise',
    location: 'Delhi NCR & Cyber Expressway',
    tag: 'City Lights',
    icon: '🌃',
    height: '430px',
    desc: 'Smooth late-night expressway cruising with high-fidelity sound and ambient lighting.',
    image: bannerCarImg
  },
  {
    id: 6,
    title: 'Lakeside Serenity Getaway',
    location: 'Nainital & Bhimtal Circuit',
    tag: 'Nature Escape',
    icon: '🌲',
    height: '390px',
    desc: 'Peaceful weekend lake tours with effortless automatic transmission and hill assist.',
    image: heroCarImg
  }
])

// Slider Scroll Handler
const sliderTrackRef = ref<HTMLElement | null>(null)

const scrollSlider = (direction: 'left' | 'right') => {
  if (!sliderTrackRef.value) return
  const scrollAmount = 320
  if (direction === 'left') {
    sliderTrackRef.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  } else {
    sliderTrackRef.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}

// Modal State & Inquiry Form
const selectedModalService = ref<DetailedService | null>(null)
const inquirySubmitted = ref(false)
const inquiryForm = ref({
  name: '',
  phone: '',
  city: ''
})

const openServiceModal = (srv: DetailedService) => {
  selectedModalService.value = srv
  inquirySubmitted.value = false
  inquiryForm.value = { name: '', phone: '', city: '' }
}

const submitInquiry = () => {
  inquirySubmitted.value = true
  setTimeout(() => {
    selectedModalService.value = null
    inquirySubmitted.value = false
  }, 2500)
}
</script>
