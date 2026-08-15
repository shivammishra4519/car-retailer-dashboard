<template>
  <div class="bg-white min-h-[calc(100vh-80px)]">
    
    <!-- Top Hero Banner for Contact Us -->
    <section class="relative bg-gradient-to-b from-[#F8F9FC] via-[#EEF2F6] to-white pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-gray-200 overflow-hidden">
      <!-- Background subtle decorative shapes -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-4" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-neutral-900 transition-colors">Home</NuxtLink>
          <span>/</span>
          <span class="text-neutral-900">Contact Us</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div class="max-w-2xl">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-yellow-400/20 text-neutral-900 border border-yellow-400/40 uppercase tracking-wider mb-3">
              <span class="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              24/7 Dedicated Support
            </span>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Get in Touch with <span class="text-brand-blue">Rentigo</span>
            </h1>
            <p class="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
              Have questions about renting luxury vehicles, corporate leases, feedback, or need instant roadside assistance? Fill in the form or connect directly with our local office.
            </p>
          </div>

          <!-- Quick Contact Pill Badges -->
          <div class="flex flex-wrap items-center gap-3">
            <a
              href="tel:+912345667777"
              class="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-gray-300 shadow-sm hover:shadow-md hover:border-blue-400 transition-all text-xs font-bold text-neutral-800"
            >
              <div class="w-7 h-7 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div class="text-[10px] text-neutral-400 font-normal">Call Us</div>
                +91 2345667777
              </div>
            </a>

            <a
              href="mailto:support@rentigo.com"
              class="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-gray-300 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all text-xs font-bold text-neutral-800"
            >
              <div class="w-7 h-7 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div class="text-[10px] text-neutral-400 font-normal">Email Support</div>
                support@rentigo.com
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- Main Content Section: Form & Office Information Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        <!-- Left Column: Form Container Card (Gray background with clear border) -->
        <div class="lg:col-span-7 bg-[#F8F9FC] rounded-3xl p-6 sm:p-9 border border-gray-300/90 shadow-sm">
          <div class="mb-7 pb-4 border-b border-gray-200">
            <h2 class="text-xl sm:text-2xl font-bold text-neutral-900">Send us a Message</h2>
            <p class="text-xs sm:text-sm text-neutral-500 mt-1">Please fill in your details and requirements below.</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-5">
            
            <!-- Full Name Field -->
            <div>
              <label for="fullName" class="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">
                Full Name <span class="text-neutral-400 font-normal">(Optional)</span>
              </label>
              <input
                id="fullName"
                v-model="form.fullName"
                type="text"
                placeholder="Enter your full name"
                class="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-sm transition-all"
              />
            </div>

            <!-- Email Address Field -->
            <div>
              <label for="email" class="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">
                Email Address <span class="text-amber-500 font-bold">*</span>
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter your email"
                class="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-sm transition-all"
              />
            </div>

            <!-- Mobile Number Field -->
            <div>
              <label for="mobile" class="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">
                Mobile Number <span class="text-amber-500 font-bold">*</span>
              </label>
              <div class="relative flex items-center">
                <span class="absolute left-4 text-sm font-semibold text-neutral-500 select-none">+91</span>
                <input
                  id="mobile"
                  v-model="form.mobile"
                  type="tel"
                  required
                  placeholder="Enter your mobile number"
                  class="w-full pl-14 pr-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-sm transition-all"
                />
              </div>
            </div>

            <!-- You are a Dropdown Field -->
            <div>
              <label for="role" class="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">
                You are a <span class="text-amber-500 font-bold">*</span>
              </label>
              <div class="relative">
                <select
                  id="role"
                  v-model="form.role"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 appearance-none shadow-sm transition-all cursor-pointer"
                >
                  <option value="" disabled selected>-select-</option>
                  <option value="Customer">Customer</option>
                  <option value="Captain / Driver">Captain / Driver Partner</option>
                  <option value="Corporate Client">Corporate Client</option>
                  <option value="Vendor / Fleet Partner">Vendor / Fleet Partner</option>
                  <option value="Press / Media">Press & Media</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Comment / Message Field -->
            <div>
              <label for="comment" class="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">
                Comment <span class="text-amber-500 font-bold">*</span>
              </label>
              <textarea
                id="comment"
                v-model="form.comment"
                rows="4"
                required
                placeholder="Enter your comment"
                class="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-sm transition-all resize-y"
              ></textarea>
            </div>

            <!-- Submit Button (Yellow Pill Button matching design) -->
            <div class="pt-3">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full sm:w-auto px-11 py-3.5 rounded-full bg-[#FFC72C] hover:bg-[#F2B922] text-neutral-950 font-bold text-sm tracking-wide shadow-sm hover:shadow active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 btn-spring"
              >
                <svg
                  v-if="isSubmitting"
                  class="animate-spin -ml-1 mr-2 h-4 w-4 text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{{ isSubmitting ? 'Submitting...' : 'Submit' }}</span>
              </button>
            </div>

            <!-- Submission Feedback Alert -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-if="submittedSuccess"
                class="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-sm font-medium flex items-center gap-3"
              >
                <svg class="w-5 h-5 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Thank you! Your message has been received. Our team will contact you at <strong>{{ form.mobile }}</strong> shortly.</span>
              </div>
            </Transition>

          </form>
        </div>

        <!-- Right Column: Office Information Cards (Crisp gray cards with distinct borders) -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Card 1: Registered Office / Headquarters -->
          <div class="bg-[#F8F9FC] rounded-3xl p-6 sm:p-7 border border-gray-300/90 shadow-sm hover:shadow-md transition-all space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full">Headquarters</span>
              <span class="text-xs text-neutral-400 font-semibold">Registered Office</span>
            </div>
            <h3 class="text-lg font-bold text-neutral-900 pt-1">
              Rentigo Mobility Solutions Pvt Ltd
            </h3>
            <p class="text-sm text-neutral-600 leading-relaxed">
              Bareilly Mod, Shahjahanpur,<br />
              Uttar Pradesh - 242001, India.
            </p>
            <div class="pt-3 text-xs text-neutral-600 space-y-2 border-t border-gray-200">
              <p class="flex items-center justify-between"><span class="text-neutral-500 font-medium">Mobile:</span> <strong class="text-neutral-900">+91 2345667777</strong></p>
              <p class="flex items-center justify-between"><span class="text-neutral-500 font-medium">Email:</span> <strong class="text-neutral-900">support@rentigo.com</strong></p>
              <p class="flex items-center justify-between"><span class="text-neutral-500 font-medium">CIN:</span> <span class="font-mono text-neutral-700">U52210UP2025PTC097115</span></p>
            </div>
          </div>

          <!-- Card 2: City Office -->
          <div class="bg-[#F8F9FC] rounded-3xl p-6 sm:p-7 border border-gray-300/90 shadow-sm hover:shadow-md transition-all space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-neutral-600">
                City Office:
              </span>
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <p class="text-sm text-neutral-800 font-medium leading-relaxed">
              Rentigo City Hub, Bareilly Mod Bypass,<br />
              Near Highway Junction, Shahjahanpur,<br />
              Uttar Pradesh - 242001.
            </p>
            <div class="pt-2 border-t border-gray-200 text-xs text-neutral-600 flex items-center justify-between">
              <span class="text-neutral-500">Local Helpline:</span>
              <strong class="text-neutral-900">+91 2345667777</strong>
            </div>
          </div>

          <!-- Card 3: Corporate Office -->
          <div class="bg-[#F8F9FC] rounded-3xl p-6 sm:p-7 border border-gray-300/90 shadow-sm hover:shadow-md transition-all space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-neutral-600">
              Corporate Office:
            </span>
            <p class="text-sm text-neutral-800 font-medium leading-relaxed">
              Rentigo Commercial Tower, Sector 62,<br />
              Cyber Hub, Noida, Uttar Pradesh - 201309,<br />
              India.
            </p>
          </div>

          <!-- Card 4: Support Card (Dark contrast) -->
          <div class="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl border border-neutral-800 shadow-md space-y-2">
            <div class="flex items-center gap-2 text-yellow-400 font-bold text-sm">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              24x7 Roadside & Booking Assistance
            </div>
            <p class="text-xs text-neutral-300 leading-relaxed">
              Need immediate help during your ongoing trip or car booking? Call our emergency hotline <strong>+91 2345667777</strong> anytime, 365 days a year.
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

useHead({
  title: 'Contact Us - Rentigo Mobility',
  meta: [
    { name: 'description', content: 'Contact Rentigo Car Rental in Shahjahanpur, Uttar Pradesh. Get 24x7 assistance for car rental bookings.' }
  ]
})

const isSubmitting = ref(false)
const submittedSuccess = ref(false)

const form = reactive({
  fullName: '',
  email: '',
  mobile: '',
  role: '',
  comment: ''
})

const handleSubmit = () => {
  isSubmitting.value = true
  
  // Simulate submission
  setTimeout(() => {
    isSubmitting.value = false
    submittedSuccess.value = true
    
    // Auto reset after 5s
    setTimeout(() => {
      form.fullName = ''
      form.email = ''
      form.mobile = ''
      form.role = ''
      form.comment = ''
      submittedSuccess.value = false
    }, 5000)
  }, 700)
}
</script>
