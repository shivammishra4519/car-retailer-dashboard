<template>
  <div class="bg-white min-h-screen">
    
    <!-- ========================================================================= -->
    <!-- 1. TOP BANNER FRAME (Hero Section)                                        -->
    <!-- ========================================================================= -->
    <section class="relative bg-gradient-to-b from-[#F8F9FC] via-[#EEF2F6] to-white pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-gray-200 overflow-hidden">
      
      <!-- Background Decorative Blur Shapes -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div class="absolute -top-32 -right-32 w-[550px] h-[550px] bg-yellow-300/20 rounded-full blur-3xl"></div>
        <div class="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl"></div>
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
          <span class="text-neutral-900 font-bold">How To Use</span>
        </nav>

        <!-- Main Hero Card Frame -->
        <div class="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/90 shadow-sm relative overflow-hidden">
          
          <!-- Top Yellow Accent Stripe -->
          <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-[#1E6FFB]"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <!-- Left Info Column -->
            <div class="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-yellow-400/20 text-neutral-950 border border-yellow-400/50 uppercase tracking-wider">
                <span class="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                Quick Onboarding & Walkthrough Guide
              </div>

              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight leading-[1.15]">
                How to Rent, Drive & <br class="hidden sm:inline" />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-800 to-[#1E6FFB]">
                  Manage Bookings
                </span>
                <span class="text-amber-500">.</span>
              </h1>

              <p class="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Learn how easy it is to download the Rentigo app, pass 2-minute digital KYC, browse the live available fleet, manage bookings on your interactive dashboard, and unlock verified vehicles using digital Bluetooth keys with zero security deposit.
              </p>

              <!-- 4 Feature Highlights Chips -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div class="bg-[#F8F9FC] p-3 rounded-2xl border border-gray-200 text-center">
                  <div class="text-xl sm:text-2xl font-black text-neutral-950">2 Min</div>
                  <div class="text-[11px] font-semibold text-neutral-500 mt-0.5">Digital KYC</div>
                </div>
                <div class="bg-[#F8F9FC] p-3 rounded-2xl border border-gray-200 text-center">
                  <div class="text-xl sm:text-2xl font-black text-neutral-950">₹0</div>
                  <div class="text-[11px] font-semibold text-neutral-500 mt-0.5">Security Deposit</div>
                </div>
                <div class="bg-[#F8F9FC] p-3 rounded-2xl border border-gray-200 text-center">
                  <div class="text-xl sm:text-2xl font-black text-[#1E6FFB]">100%</div>
                  <div class="text-[11px] font-semibold text-neutral-500 mt-0.5">Keyless Access</div>
                </div>
                <div class="bg-[#F8F9FC] p-3 rounded-2xl border border-gray-200 text-center">
                  <div class="text-xl sm:text-2xl font-black text-amber-500">24/7</div>
                  <div class="text-[11px] font-semibold text-neutral-500 mt-0.5">Roadside Support</div>
                </div>
              </div>

              <!-- Action Links -->
              <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#video-guide"
                  class="px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 flex items-center gap-2 btn-spring"
                >
                  <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  <span>Watch Video Guide</span>
                </a>
                <a
                  href="#step-by-step"
                  class="px-6 py-3 rounded-full bg-white hover:bg-gray-50 text-neutral-800 font-bold text-xs sm:text-sm border border-gray-300 transition-all shadow-sm active:scale-95 flex items-center gap-2 btn-spring"
                >
                  <span>View Step-by-Step</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>

            </div>

            <!-- Right Visual Frame Showcase -->
            <div class="lg:col-span-5 relative flex items-center justify-center">
              
              <div class="relative w-full max-w-md bg-gradient-to-tr from-amber-500/10 via-yellow-400/20 to-blue-500/10 rounded-3xl p-4 sm:p-6 border border-yellow-400/30 shadow-inner group">
                
                <!-- Floating Badge -->
                <div class="absolute -top-3 -right-3 px-3 py-1 bg-yellow-400 text-neutral-950 text-xs font-black rounded-full shadow-md z-20 flex items-center gap-1">
                  <span>⚡ Instant Booking</span>
                </div>

                <!-- Asset Car Image -->
                <div class="relative overflow-hidden rounded-2xl bg-white/80 p-3 shadow-sm border border-gray-100">
                  <img
                    :src="heroCarImg"
                    alt="Rentigo Instant Booking Showcase"
                    class="w-full h-48 sm:h-56 object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  />
                </div>

                <!-- Live Booking Status Pill Mockup -->
                <div class="mt-4 p-3 bg-white/95 rounded-2xl border border-gray-200 flex items-center justify-between text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span class="font-bold text-neutral-800">Booking Verified</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-md bg-yellow-400/20 text-neutral-900 text-[10px] font-black uppercase">
                    Ready to Unlock
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- 2. VIDEO SHOWCASE SECTION (Ready for embedding video URL later)           -->
    <!-- ========================================================================= -->
    <section id="video-guide" class="py-16 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-10">
          <span class="text-xs font-extrabold uppercase tracking-widest text-brand-blue bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            📹 Video Walkthrough
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-neutral-950 mt-3 tracking-tight">
            Watch How Rentigo Works in Under 2 Minutes
          </h2>
          <p class="text-neutral-500 text-sm sm:text-base mt-2">
            See the exact mobile app flow from downloading and digital KYC verification to unlocking your car with Bluetooth.
          </p>
        </div>

        <!-- Video Player Container Frame -->
        <div class="max-w-4xl mx-auto">
          <div class="relative aspect-video rounded-3xl overflow-hidden bg-neutral-950 border border-gray-200 shadow-md group">
            
            <!-- Video Poster / Thumbnail Preview using Asset Image -->
            <img
              :src="bannerCarImg"
              alt="Rentigo App Video Guide"
              class="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>

            <!-- Top Floating Duration Badge -->
            <div class="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-black bg-yellow-400 text-neutral-950 shadow-sm flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                HD Tutorial
              </span>
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white">
                02:15 Min
              </span>
            </div>

            <!-- Center Interactive Play Button -->
            <div class="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center">
              <button
                type="button"
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFC72C] hover:bg-yellow-300 text-neutral-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 active:scale-95 transition-all duration-300 btn-spring mb-3"
                @click="isVideoModalOpen = true"
                aria-label="Play video walkthrough"
              >
                <svg class="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <h3 class="text-base sm:text-xl font-bold text-white tracking-wide">
                Click to Watch Full Mobile App Walkthrough
              </h3>
              <p class="text-xs sm:text-sm text-neutral-300 mt-1 max-w-md">
                Fast onboarding, booking management, and instant keyless pickup demo.
              </p>
            </div>

            <!-- Bottom Progress & Controls Bar Mockup -->
            <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-neutral-950 to-transparent z-20 flex items-center justify-between text-xs text-white/90">
              <div class="flex items-center gap-3">
                <span class="font-bold">Rentigo Mobility Guide</span>
                <span class="text-neutral-400">•</span>
                <span class="text-neutral-400">Step 1 to 6</span>
              </div>
              <button
                type="button"
                class="px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs transition-colors"
                @click="isVideoModalOpen = true"
              >
                Watch Now ↗
              </button>
            </div>

          </div>

          <!-- Note for Developer / User -->
          <div class="mt-3 text-center text-xs text-neutral-400">
            💡 <em>You can easily swap this placeholder with your YouTube embed or custom MP4 video link anytime.</em>
          </div>

        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- 3. STEP-BY-STEP WALKTHROUGH (6 Easy Steps From Download to Return)         -->
    <!-- ========================================================================= -->
    <section id="step-by-step" class="py-16 sm:py-24 bg-[#F8F9FC] border-t border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="max-w-3xl mb-14">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-[#FFC72C] text-neutral-950 uppercase tracking-wider mb-2">
            ★ Complete User Journey
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight">
            6 Simple Steps to Hit the Road
          </h2>
          <div class="w-24 h-1.5 bg-[#FFC72C] rounded-full mt-3"></div>
          <p class="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
            From downloading the app and completing automated digital verification to picking up your live booking and unlocking your vehicle with one tap.
          </p>
        </div>

        <!-- 6 Steps Grid (2 Columns on Large Screens) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          <!-- Step 1 Card -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:border-yellow-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-xl text-xs font-black bg-yellow-400 text-neutral-950">
                  STEP 01
                </span>
                <span class="w-10 h-10 rounded-2xl bg-yellow-50 text-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  📲
                </span>
              </div>
              <h3 class="text-xl font-extrabold text-neutral-950 mb-2">Download & Install App</h3>
              <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Download the free Rentigo app from Google Play Store or Apple App Store. The lightweight app installs in seconds with zero bloat.
              </p>
              <!-- Features -->
              <div class="space-y-1.5 border-t border-gray-100 pt-4 text-xs text-neutral-600">
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Available on Android & iOS</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Fast biometric Fingerprint / Face ID login</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Zero membership or registration fees</span>
                </div>
              </div>
            </div>
            <div class="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span class="text-neutral-400 font-medium">Duration: ~30 seconds</span>
              <span class="text-amber-600 font-bold">Free Download →</span>
            </div>
          </div>

          <!-- Step 2 Card -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:border-yellow-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-xl text-xs font-black bg-yellow-400 text-neutral-950">
                  STEP 02
                </span>
                <span class="w-10 h-10 rounded-2xl bg-blue-50 text-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  🪪
                </span>
              </div>
              <h3 class="text-xl font-extrabold text-neutral-950 mb-2">2-Minute Digital KYC</h3>
              <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Log in with your mobile OTP. Upload photos of your original Driving License and Aadhaar card for instant AI-powered verification.
              </p>
              <!-- Features -->
              <div class="space-y-1.5 border-t border-gray-100 pt-4 text-xs text-neutral-600">
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>100% paperless automated scan</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Approved in under 2 minutes</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>One-time setup for lifetime bookings</span>
                </div>
              </div>
            </div>
            <div class="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span class="text-neutral-400 font-medium">Approval: Instant</span>
              <span class="text-blue-600 font-bold">Verified for Life →</span>
            </div>
          </div>

          <!-- Step 3 Card -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:border-yellow-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-xl text-xs font-black bg-yellow-400 text-neutral-950">
                  STEP 03
                </span>
                <span class="w-10 h-10 rounded-2xl bg-emerald-50 text-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  🚗
                </span>
              </div>
              <h3 class="text-xl font-extrabold text-neutral-950 mb-2">Explore Live Fleet</h3>
              <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Browse real-time available cars in your city. Filter by category (Sports Coupe, Luxury Sedan, SUV, EV), transmission, and fuel type.
              </p>
              <!-- Features -->
              <div class="space-y-1.5 border-t border-gray-100 pt-4 text-xs text-neutral-600">
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Real-time GPS availability</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>High-resolution car photos & specs</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Transparent per-hour & per-day rates</span>
                </div>
              </div>
            </div>
            <div class="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span class="text-neutral-400 font-medium">Fleet: 1,200+ Cars</span>
              <span class="text-emerald-600 font-bold">Pick Your Model →</span>
            </div>
          </div>

          <!-- Step 4 Card -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:border-yellow-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-xl text-xs font-black bg-yellow-400 text-neutral-950">
                  STEP 04
                </span>
                <span class="w-10 h-10 rounded-2xl bg-amber-50 text-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  💳
                </span>
              </div>
              <h3 class="text-xl font-extrabold text-neutral-950 mb-2">Book with ₹0 Deposit</h3>
              <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Select your trip duration (Hourly, Multi-Day, Self-Drive, or Chauffeur). Confirm your reservation with zero security deposit and comprehensive coverage.
              </p>
              <!-- Features -->
              <div class="space-y-1.5 border-t border-gray-100 pt-4 text-xs text-neutral-600">
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Zero security deposit on verified KYC</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Choose Doorstep Delivery or Hub Pickup</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>UPI, Cards, NetBanking, & Net-30 support</span>
                </div>
              </div>
            </div>
            <div class="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span class="text-neutral-400 font-medium">Payment: 100% Safe</span>
              <span class="text-amber-600 font-bold">Instant Confirmation →</span>
            </div>
          </div>

          <!-- Step 5 Card -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:border-yellow-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-xl text-xs font-black bg-yellow-400 text-neutral-950">
                  STEP 05
                </span>
                <span class="w-10 h-10 rounded-2xl bg-purple-50 text-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  🔑
                </span>
              </div>
              <h3 class="text-xl font-extrabold text-neutral-950 mb-2">Keyless Bluetooth Unlock</h3>
              <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Reach your vehicle location or receive doorstep handover. Open the app dashboard, tap "Unlock Vehicle", and start driving without physical keys.
              </p>
              <!-- Features -->
              <div class="space-y-1.5 border-t border-gray-100 pt-4 text-xs text-neutral-600">
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Contactless Bluetooth smartphone key</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Pre-trip digital inspection check</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Push-to-start ignition enabled</span>
                </div>
              </div>
            </div>
            <div class="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span class="text-neutral-400 font-medium">Access: Contactless</span>
              <span class="text-purple-600 font-bold">Drive Instantly →</span>
            </div>
          </div>

          <!-- Step 6 Card -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:border-yellow-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-xl text-xs font-black bg-yellow-400 text-neutral-950">
                  STEP 06
                </span>
                <span class="w-10 h-10 rounded-2xl bg-rose-50 text-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  🏁
                </span>
              </div>
              <h3 class="text-xl font-extrabold text-neutral-950 mb-2">Live Tracking & Return</h3>
              <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Track your active kilometers, fuel, and trip duration in real time. Extend your ride with 1-click if needed. Park at return point and tap "End Trip".
              </p>
              <!-- Features -->
              <div class="space-y-1.5 border-t border-gray-100 pt-4 text-xs text-neutral-600">
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>1-click in-app trip duration extension</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Automated FASTag toll calculation</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>Instant GST invoice sent to email/WhatsApp</span>
                </div>
              </div>
            </div>
            <div class="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span class="text-neutral-400 font-medium">Billing: Transparent</span>
              <span class="text-rose-600 font-bold">Complete Trip →</span>
            </div>
          </div>

        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- 4. DASHBOARD FEATURES BREAKDOWN (Live Booking Pickup & Management)        -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-xs font-extrabold uppercase tracking-widest text-brand-blue bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            📊 Interactive App Experience
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-neutral-950 mt-3 tracking-tight">
            Inside Your Rentigo Booking Dashboard
          </h2>
          <p class="text-neutral-500 text-sm sm:text-base mt-2">
            Your Rentigo mobile dashboard gives you full control over active trips, door locks, extensions, and billing.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Feature 1 -->
          <div class="bg-[#F8F9FC] rounded-2xl p-6 border border-gray-200 hover:border-yellow-400 transition-all">
            <div class="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center font-bold text-lg mb-4">
              📍
            </div>
            <h4 class="text-base font-extrabold text-neutral-900 mb-1">Live Vehicle Telemetry</h4>
            <p class="text-xs text-neutral-500 leading-relaxed">
              Check exact vehicle location, current fuel level, remaining range, and tire pressure in real time before handover.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-[#F8F9FC] rounded-2xl p-6 border border-gray-200 hover:border-yellow-400 transition-all">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg mb-4">
              📱
            </div>
            <h4 class="text-base font-extrabold text-neutral-900 mb-1">Bluetooth Remote Key</h4>
            <p class="text-xs text-neutral-500 leading-relaxed">
              Lock and unlock doors, pop the trunk, and sound the horn directly from your phone screen even in underground parking.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-[#F8F9FC] rounded-2xl p-6 border border-gray-200 hover:border-yellow-400 transition-all">
            <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg mb-4">
              ⏱️
            </div>
            <h4 class="text-base font-extrabold text-neutral-900 mb-1">1-Click Trip Extension</h4>
            <p class="text-xs text-neutral-500 leading-relaxed">
              Running late or extending your road trip? Add hours or days with one click without calling customer support.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-[#F8F9FC] rounded-2xl p-6 border border-gray-200 hover:border-yellow-400 transition-all">
            <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-lg mb-4">
              🆘
            </div>
            <h4 class="text-base font-extrabold text-neutral-900 mb-1">24/7 Roadside SOS</h4>
            <p class="text-xs text-neutral-500 leading-relaxed">
              Immediate connection to our emergency dispatch desk for highway breakdown, flat tire help, or nearest hub assistance.
            </p>
          </div>

        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- 5. HOST & PARTNER WORKFLOW GUIDE                                          -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-20 bg-[#F8F9FC] border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-6 space-y-4">
              <span class="px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
                💰 For Car Hosts & Fleet Partners
              </span>
              <h2 class="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                Want to Earn with Your Car? Host on Rentigo
              </h2>
              <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Turn your idle personal vehicle into a steady income asset. Rentigo manages driver verification, complete insurance, and automated payouts.
              </p>

              <!-- 3 Host Steps -->
              <div class="space-y-3 pt-2">
                <div class="flex items-start gap-3">
                  <span class="w-6 h-6 rounded-full bg-yellow-400 text-neutral-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <div class="text-xs font-extrabold text-neutral-900">List Your Vehicle Online</div>
                    <p class="text-[11px] text-neutral-500">Upload car photos, RC, and insurance details in under 5 minutes.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <span class="w-6 h-6 rounded-full bg-yellow-400 text-neutral-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <div class="text-xs font-extrabold text-neutral-900">Free Smart GPS & Safety Device Setup</div>
                    <p class="text-[11px] text-neutral-500">Rentigo installs real-time GPS tracking and remote immobilizer free of charge.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <span class="w-6 h-6 rounded-full bg-yellow-400 text-neutral-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <div class="text-xs font-extrabold text-neutral-900">Accept Bookings & Earn ₹35k–₹75k/mo</div>
                    <p class="text-[11px] text-neutral-500">Verified drivers rent your car. Payouts are transferred automatically to your bank.</p>
                  </div>
                </div>
              </div>

              <div class="pt-3">
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-950 text-white font-bold text-xs hover:bg-neutral-800 transition-all shadow-sm"
                >
                  <span>List Your Car Today</span>
                  <span>→</span>
                </NuxtLink>
              </div>

            </div>

            <!-- Host Estimate Visual Card -->
            <div class="lg:col-span-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
              <div class="flex items-center justify-between pb-4 border-b border-emerald-200/80">
                <span class="text-xs font-black uppercase tracking-wider text-emerald-900">Estimated Monthly Earnings</span>
                <span class="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">100% Insured</span>
              </div>
              <div class="py-4">
                <div class="text-3xl sm:text-4xl font-black text-emerald-900">₹45,000 – ₹85,000</div>
                <div class="text-xs text-emerald-700 mt-1">Based on 18–22 booked days per month for mid-to-luxury sedans & SUVs.</div>
              </div>
              <div class="grid grid-cols-2 gap-2 text-[11px] text-emerald-800 pt-2 border-t border-emerald-200/80">
                <div>✓ Zero damage liability for host</div>
                <div>✓ Real-time 24/7 GPS monitoring</div>
                <div>✓ Verified KYC drivers only</div>
                <div>✓ Instant direct bank payout</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- 6. FREQUENTLY ASKED QUESTIONS (FAQ Accordion)                             -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-12">
          <span class="text-xs font-extrabold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            ❓ FAQ
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-neutral-950 mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p class="text-neutral-500 text-xs sm:text-sm mt-2">
            Everything you need to know about KYC, deposits, fuel, and trip policies.
          </p>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faq, index) in faqList"
            :key="index"
            class="rounded-2xl border border-gray-200 overflow-hidden transition-all"
            :class="openFaqIndex === index ? 'bg-gray-50 border-yellow-400' : 'bg-white'"
          >
            <button
              type="button"
              class="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
              @click="toggleFaq(index)"
            >
              <span class="text-sm font-extrabold text-neutral-900">{{ faq.question }}</span>
              <span
                class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold shrink-0 transition-transform duration-200"
                :class="openFaqIndex === index ? 'rotate-180 bg-yellow-400 text-neutral-950' : 'text-neutral-600'"
              >
                ▼
              </span>
            </button>
            <div
              v-if="openFaqIndex === index"
              class="px-6 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-gray-100 pt-3"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- 7. CALL TO ACTION / APP DOWNLOAD BANNER                                   -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-20 bg-[#F8F9FC] border-t border-gray-200 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="relative bg-gradient-to-r from-neutral-950 via-[#0F172A] to-neutral-950 rounded-3xl p-8 sm:p-12 text-white border border-neutral-800 shadow-lg overflow-hidden">
          
          <div class="absolute -top-24 -left-24 w-80 h-80 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div class="max-w-2xl text-center lg:text-left space-y-3">
              <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-[#FFC72C] text-neutral-950 uppercase tracking-wider">
                ⚡ Download App Today
              </span>
              <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Ready to Start Your First Journey?
              </h2>
              <p class="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Install Rentigo on your iOS or Android device and receive an exclusive 20% discount on your first self-drive rental.
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
    <!-- 8. INTERACTIVE VIDEO PLAYER MODAL                                         -->
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
        v-if="isVideoModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md"
        @click.self="isVideoModalOpen = false"
      >
        <div class="bg-neutral-900 rounded-3xl max-w-3xl w-full flex flex-col shadow-2xl border border-neutral-800 overflow-hidden relative">
          
          <div class="px-6 py-4 border-b border-neutral-800 flex items-center justify-between text-white">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold bg-yellow-400 text-neutral-950">
                HD TUTORIAL
              </span>
              <span class="text-xs font-bold text-neutral-300">How to Use Rentigo App</span>
            </div>
            <button
              type="button"
              class="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              @click="isVideoModalOpen = false"
              aria-label="Close video modal"
            >
              ✕
            </button>
          </div>

          <!-- Video Display Frame -->
          <div class="relative aspect-video bg-neutral-950 flex items-center justify-center p-6 text-center">
            <!-- 
              DEVELOPER NOTE:
              Replace this placeholder with an iframe (YouTube / Vimeo) or HTML5 <video> tag when your video file is ready:
              <iframe class="w-full h-full" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" allowfullscreen></iframe>
            -->
            <div class="space-y-3">
              <div class="w-16 h-16 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center mx-auto text-2xl font-bold">
                🎬
              </div>
              <h4 class="text-lg font-bold text-white">Rentigo App Walkthrough Video</h4>
              <p class="text-xs text-neutral-400 max-w-sm mx-auto">
                Video player container is active and ready. Simply insert your video embed URL or MP4 source into this container.
              </p>
              <button
                type="button"
                class="px-5 py-2 rounded-xl bg-yellow-400 text-neutral-950 font-extrabold text-xs hover:bg-yellow-300"
                @click="isVideoModalOpen = false"
              >
                Got It
              </button>
            </div>
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
  title: 'How to Use Rentigo | Step-by-Step App & Booking Walkthrough',
  meta: [
    {
      name: 'description',
      content: 'Learn how to use Rentigo car rental platform. 6-step walkthrough for downloading app, instant digital KYC, booking luxury fleet, Bluetooth keyless unlock, and live trip dashboard.'
    }
  ]
})

// Video Modal State
const isVideoModalOpen = ref(false)

// FAQ Accordion State & Data
const openFaqIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

const faqList = ref([
  {
    question: 'What documents are required to book a car on Rentigo?',
    answer: 'You only need two documents: a valid Driving License (minimum 1 year old) and an Aadhaar Card. Verification is 100% digital and automated via AI in under 2 minutes.'
  },
  {
    question: 'Is any security deposit required?',
    answer: 'No! Rentigo operates on a Zero Security Deposit model for all verified drivers. Your capital is never locked or frozen on credit cards.'
  },
  {
    question: 'How does the Bluetooth keyless unlock work?',
    answer: 'Once your booking time begins, open the Rentigo app and tap "Unlock Vehicle". The encrypted Bluetooth signal connects to the car telematics system and unlocks the doors instantly.'
  },
  {
    question: 'Can I extend my ongoing trip if I need more time?',
    answer: 'Yes! Open your live booking dashboard in the app and tap "Extend Trip". Choose your additional hours or days and pay the pro-rated difference with 1 tap.'
  },
  {
    question: 'What is the fuel policy?',
    answer: 'Rentigo provides transparent options: you can choose fuel-inclusive pricing or receive the vehicle with a full tank and return it at the same fuel level.'
  }
])
</script>
