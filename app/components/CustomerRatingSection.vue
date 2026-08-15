<template>
  <section class="py-16 sm:py-20 bg-white border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-yellow-400/20 text-neutral-900 border border-yellow-400/40 uppercase tracking-wider mb-2">
          ★ Verified Customer Ratings
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
          What Our Renters Are Saying
        </h2>
        <p class="text-neutral-500 text-sm sm:text-base mt-2">
          Real feedback from thousands of customers who explored cities, highways, and destinations with Rentigo.
        </p>
      </div>

      <!-- Rating Overview Score Card -->
      <div class="bg-[#F8F9FC] rounded-3xl p-6 sm:p-9 border border-gray-300/90 shadow-sm mb-12">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <!-- Left: Big Rating Number (4 cols) -->
          <div class="md:col-span-4 text-center md:text-left md:border-r md:border-gray-200 md:pr-8">
            <div class="text-5xl sm:text-6xl font-extrabold text-neutral-900 tracking-tight">4.9<span class="text-2xl text-neutral-400 font-normal">/5.0</span></div>
            
            <!-- 5 Golden Stars -->
            <div class="flex items-center justify-center md:justify-start gap-1 text-amber-400 my-2">
              <svg v-for="i in 5" :key="i" class="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            
            <p class="text-xs text-neutral-500 font-medium">Based on <strong>12,850+</strong> verified reviews</p>
            
            <div class="mt-4">
              <button
                type="button"
                class="px-5 py-2.5 rounded-full bg-neutral-950 text-white font-bold text-xs hover:bg-neutral-800 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1.5 mx-auto md:mx-0 btn-spring"
                @click="isReviewModalOpen = true"
              >
                <span>Write a Review</span>
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Right: Star Breakdown Progress Bars (8 cols) -->
          <div class="md:col-span-8 space-y-2.5">
            <div
              v-for="stat in ratingBreakdown"
              :key="stat.stars"
              class="flex items-center gap-3 text-xs"
            >
              <span class="w-14 font-bold text-neutral-700 shrink-0">{{ stat.stars }} Stars</span>
              <div class="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-700"
                  :class="stat.stars >= 4 ? 'bg-amber-400' : 'bg-gray-400'"
                  :style="{ width: `${stat.percent}%` }"
                ></div>
              </div>
              <span class="w-10 text-right font-semibold text-neutral-500">{{ stat.percent }}%</span>
            </div>
          </div>

        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="flex items-center justify-between gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
        <div class="flex items-center gap-2 shrink-0">
          <button
            v-for="tab in filterTabs"
            :key="tab.value"
            type="button"
            class="px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap"
            :class="selectedFilter === tab.value ? 'bg-neutral-900 text-white shadow-sm' : 'bg-gray-100 text-neutral-600 hover:bg-gray-200'"
            @click="setFilter(tab.value)"
          >
            {{ tab.label }} ({{ getFilterCount(tab.value) }})
          </button>
        </div>

        <span class="text-xs text-neutral-500 font-medium shrink-0">
          Showing <strong>{{ filteredReviews.length }}</strong> verified feedback
        </span>
      </div>

      <!-- Reviews Grid -->
      <div v-if="paginatedReviews.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="review in paginatedReviews"
          :key="review.id"
          class="bg-[#F8F9FC] rounded-3xl p-6 border border-gray-300/90 shadow-sm hover:shadow-lg hover:border-brand-blue transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Review Header: User & Rating -->
            <div class="flex items-start justify-between gap-3 mb-3">
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-500 text-neutral-950 font-bold flex items-center justify-center text-sm shadow-sm">
                  {{ review.avatarInitials }}
                </div>
                <div>
                  <h4 class="text-sm font-bold text-neutral-900 leading-snug">{{ review.userName }}</h4>
                  <div class="text-[11px] text-neutral-500 flex items-center gap-1">
                    <span>{{ review.location }}</span>
                    <span>•</span>
                    <span class="text-emerald-600 font-semibold flex items-center gap-0.5">
                      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              <!-- Rating Badge -->
              <div class="flex items-center gap-1 text-amber-400">
                <span class="text-xs font-bold text-neutral-800">{{ review.rating }}.0</span>
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>

            <!-- Car Tag -->
            <div class="inline-block px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-[11px] font-semibold text-neutral-700 mb-3">
              🚗 {{ review.carModel }}
            </div>

            <!-- Review Title & Text -->
            <h5 class="text-sm font-bold text-neutral-900 mb-1.5">{{ review.title }}</h5>
            <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              "{{ review.comment }}"
            </p>
          </div>

          <!-- Review Footer -->
          <div class="mt-4 pt-3 border-t border-gray-200/80 flex items-center justify-between text-[11px] text-neutral-400">
            <span>{{ review.date }}</span>
            <span class="text-neutral-500 font-medium">{{ review.tripType }}</span>
          </div>
        </div>
      </div>

      <!-- If no reviews in filter -->
      <div v-else class="text-center py-12 bg-[#F8F9FC] rounded-3xl border border-gray-200 p-8">
        <p class="text-sm font-semibold text-neutral-600">No reviews found in this category.</p>
        <button
          type="button"
          class="mt-3 px-4 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold"
          @click="setFilter('all')"
        >
          Show All Reviews
        </button>
      </div>

      <!-- Reviews Pagination Controls -->
      <div v-if="filteredReviews.length > reviewsPerPage" class="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <!-- Left: Current Page Summary -->
        <div class="text-xs text-neutral-500 font-medium">
          Showing <strong class="text-neutral-900">{{ (currentReviewPage - 1) * reviewsPerPage + 1 }}</strong> to <strong class="text-neutral-900">{{ Math.min(currentReviewPage * reviewsPerPage, filteredReviews.length) }}</strong> of <strong class="text-neutral-900">{{ filteredReviews.length }}</strong> reviews
        </div>

        <!-- Right: Clean Page Buttons -->
        <div class="flex items-center gap-2">
          <!-- Prev Button -->
          <button
            type="button"
            :disabled="currentReviewPage === 1"
            class="px-3.5 py-2 rounded-xl border border-gray-300 text-xs font-bold text-neutral-700 bg-white hover:bg-gray-50 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 shadow-sm"
            @click="currentReviewPage--"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous</span>
          </button>

          <!-- Numeric Page Pills -->
          <button
            v-for="p in totalReviewPages"
            :key="p"
            type="button"
            class="w-8 h-8 rounded-xl text-xs font-bold transition-all flex items-center justify-center"
            :class="currentReviewPage === p ? 'bg-neutral-900 text-white shadow-md' : 'bg-white border border-gray-300 text-neutral-700 hover:bg-gray-50'"
            @click="currentReviewPage = p"
          >
            {{ p }}
          </button>

          <!-- Next Button -->
          <button
            type="button"
            :disabled="currentReviewPage === totalReviewPages"
            class="px-3.5 py-2 rounded-xl border border-gray-300 text-xs font-bold text-neutral-700 bg-white hover:bg-gray-50 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 shadow-sm"
            @click="currentReviewPage++"
          >
            <span>Next</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Rating Count & Trust Badges displayed underneath pagination -->
      <div class="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 font-bold">✓</span>
          <span><strong>12,850+ Verified Ratings</strong> recorded across 18 North India rental hubs</span>
        </div>
        <div class="flex items-center gap-4 text-neutral-400 font-medium">
          <span class="flex items-center gap-1"><span class="text-amber-400">★</span> 98.4% 5-Star Satisfaction</span>
          <span>•</span>
          <span>Zero Fake Reviews Guarantee</span>
        </div>
      </div>

    </div>

    <!-- Write a Review Modal (Clean Sticky Header & Footer with Scrollable Form Body) -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isReviewModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-sm"
        @click.self="isReviewModalOpen = false"
      >
        <div class="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] sm:max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 overflow-hidden relative">
          
          <!-- Sticky Header -->
          <div class="shrink-0 px-6 py-4 border-b border-gray-100 bg-white/95 backdrop-blur-md flex items-center justify-between z-20">
            <div>
              <h3 class="text-lg sm:text-xl font-extrabold text-neutral-900">Share Your Experience</h3>
              <p class="text-[11px] text-neutral-500">Help others choose the best luxury ride by rating your experience.</p>
            </div>
            <button
              type="button"
              class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-neutral-600 hover:text-neutral-950 flex items-center justify-center transition-colors"
              @click="isReviewModalOpen = false"
              aria-label="Close dialog"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Scrollable Form Body -->
          <div class="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar overscroll-contain">
            <form id="reviewForm" @submit.prevent="submitReview" class="space-y-4">
              
              <!-- Star Selection -->
              <div>
                <label class="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">Rating</label>
                <div class="flex items-center gap-2">
                  <button
                    v-for="star in 5"
                    :key="star"
                    type="button"
                    class="p-1 hover:scale-125 transition-transform"
                    @click="newReview.rating = star"
                  >
                    <svg
                      class="w-7 h-7"
                      :class="star <= newReview.rating ? 'text-amber-400 fill-current' : 'text-gray-300 fill-current'"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </button>
                  <span class="ml-2 text-xs font-bold text-neutral-700">{{ newReview.rating }} / 5 Stars</span>
                </div>
              </div>

              <!-- Name -->
              <div>
                <label class="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Your Name</label>
                <input
                  v-model="newReview.userName"
                  type="text"
                  required
                  placeholder="e.g. Vikram Seth"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>

              <!-- Car Model -->
              <div>
                <label class="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Vehicle Rented</label>
                <select
                  v-model="newReview.carModel"
                  required
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                >
                  <option value="Porsche 718 Cayman GTS">Porsche 718 Cayman GTS</option>
                  <option value="Mercedes-AMG GT 4-Door">Mercedes-AMG GT 4-Door</option>
                  <option value="Porsche Taycan EV">Porsche Taycan EV</option>
                  <option value="BMW 5 Series Sedan">BMW 5 Series Sedan</option>
                  <option value="Audi A6 Matrix Luxury">Audi A6 Matrix Luxury</option>
                  <option value="Range Rover Velar">Range Rover Velar</option>
                </select>
              </div>

              <!-- Review Title -->
              <div>
                <label class="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Review Headline</label>
                <input
                  v-model="newReview.title"
                  type="text"
                  required
                  placeholder="e.g. Super smooth pickup and amazing ride quality!"
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>

              <!-- Comment -->
              <div>
                <label class="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Your Detailed Feedback</label>
                <textarea
                  v-model="newReview.comment"
                  rows="3"
                  required
                  placeholder="Write your experience with car condition, digital key unlock and overall service..."
                  class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 resize-y"
                ></textarea>
              </div>

            </form>
          </div>

          <!-- Sticky Footer -->
          <div class="shrink-0 px-6 py-4 bg-gray-50/95 backdrop-blur-md border-t border-gray-200 flex items-center justify-between z-20">
            <button
              type="button"
              class="px-4 py-2 text-xs font-bold text-neutral-600 hover:text-neutral-900"
              @click="isReviewModalOpen = false"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="reviewForm"
              class="px-6 py-2.5 bg-[#FFC72C] hover:bg-yellow-400 text-neutral-950 font-bold text-xs rounded-xl shadow-sm transition-all btn-spring"
            >
              Submit Review
            </button>
          </div>

        </div>
      </div>
    </Transition>

  </section>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

interface ReviewItem {
  id: number
  userName: string
  avatarInitials: string
  location: string
  rating: number
  carModel: string
  title: string
  comment: string
  date: string
  tripType: string
}

const isReviewModalOpen = ref(false)
const selectedFilter = ref<number | 'all'>('all')
const currentReviewPage = ref(1)
const reviewsPerPage = 3

const setFilter = (val: number | 'all') => {
  selectedFilter.value = val
  currentReviewPage.value = 1
}

const filterTabs = [
  { label: 'All Reviews', value: 'all' },
  { label: '5 Stars', value: 5 },
  { label: '4 Stars', value: 4 },
  { label: '3 Stars', value: 3 }
]

const ratingBreakdown = [
  { stars: 5, percent: 92 },
  { stars: 4, percent: 6 },
  { stars: 3, percent: 1.5 },
  { stars: 2, percent: 0.3 },
  { stars: 1, percent: 0.2 }
]

const reviewsList = ref<ReviewItem[]>([
  {
    id: 1,
    userName: 'Aman Sharma',
    avatarInitials: 'AS',
    location: 'Shahjahanpur, UP',
    rating: 5,
    carModel: 'Porsche 718 Cayman GTS',
    title: 'Flawless condition & Instant digital key pickup',
    comment: 'Booked the Cayman for a weekend road trip to Nainital. The car was spotless, delivered right to my location in Bareilly Mod within 20 mins. Zero paperwork hassle!',
    date: 'August 12, 2026',
    tripType: 'Weekend Getaway'
  },
  {
    id: 2,
    userName: 'Rohit Kulkarni',
    avatarInitials: 'RK',
    location: 'Lucknow',
    rating: 5,
    carModel: 'Mercedes-AMG GT 4-Door',
    title: 'Top-tier luxury experience for wedding event',
    comment: 'The AMG GT turned every head at the event. Transparent billing with no hidden fees and full insurance coverage gave complete peace of mind.',
    date: 'August 8, 2026',
    tripType: 'Special Event'
  },
  {
    id: 3,
    userName: 'Priya Narang',
    avatarInitials: 'PN',
    location: 'Noida, NCR',
    rating: 5,
    carModel: 'Porsche Taycan EV',
    title: 'Fast charging assistance and superb comfort',
    comment: 'Rented the Taycan for an executive corporate meeting. Extremely smooth acceleration and the app guided me to verified high-speed charging hubs seamlessly.',
    date: 'July 29, 2026',
    tripType: 'Corporate Trip'
  },
  {
    id: 4,
    userName: 'Vikramaditya Rao',
    avatarInitials: 'VR',
    location: 'Bareilly',
    rating: 4,
    carModel: 'BMW 5 Series Sedan',
    title: 'Great service and reliable 24/7 roadside assist',
    comment: 'Had a query regarding toll tag fastag deduction during the trip and their phone helpline resolved it in under 2 minutes. Will definitely book again.',
    date: 'July 21, 2026',
    tripType: 'Business Travel'
  },
  {
    id: 5,
    userName: 'Kavita Singhal',
    avatarInitials: 'KS',
    location: 'Delhi NCR',
    rating: 5,
    carModel: 'Range Rover Velar',
    title: 'Unbelievable highway comfort and spacious interior',
    comment: 'Took the Velar for a 4-day family road trip to Uttarakhand. The air suspension made the hill curves ultra smooth. Rentigo customer service was top tier throughout.',
    date: 'July 14, 2026',
    tripType: 'Family Road Trip'
  },
  {
    id: 6,
    userName: 'Aditya Kapoor',
    avatarInitials: 'AK',
    location: 'Kanpur',
    rating: 4,
    carModel: 'Audi A6 Matrix Luxury',
    title: 'Punctual delivery and clean car handover',
    comment: 'Car was handed over on time right outside our hotel. App unlocking worked seamlessly without requiring keys. Minor app lag during initial selfie KYC but resolved quickly.',
    date: 'July 5, 2026',
    tripType: 'Airport Transfer'
  },
  {
    id: 7,
    userName: 'Deepak Verma',
    avatarInitials: 'DV',
    location: 'Lucknow',
    rating: 3,
    carModel: 'BMW 5 Series Sedan',
    title: 'Decent ride quality, pickup took a little longer',
    comment: 'The car drove amazingly well and was pristine inside. Pickup took 25 minutes instead of the promised 15 mins due to peak traffic near Hazratganj. Overall good value.',
    date: 'June 28, 2026',
    tripType: 'Self Drive City'
  }
])

const newReview = reactive({
  userName: '',
  rating: 5,
  carModel: 'Porsche 718 Cayman GTS',
  title: '',
  comment: ''
})

const getFilterCount = (val: number | 'all') => {
  if (val === 'all') return reviewsList.value.length
  return reviewsList.value.filter(r => r.rating === val).length
}

const filteredReviews = computed(() => {
  if (selectedFilter.value === 'all') return reviewsList.value
  return reviewsList.value.filter(r => r.rating === selectedFilter.value)
})

const totalReviewPages = computed(() => {
  return Math.ceil(filteredReviews.value.length / reviewsPerPage) || 1
})

const paginatedReviews = computed(() => {
  const start = (currentReviewPage.value - 1) * reviewsPerPage
  return filteredReviews.value.slice(start, start + reviewsPerPage)
})

const submitReview = () => {
  if (newReview.userName && newReview.title && newReview.comment) {
    const initials = newReview.userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    reviewsList.value.unshift({
      id: Date.now(),
      userName: newReview.userName,
      avatarInitials: initials || 'UR',
      location: 'Verified Renter',
      rating: newReview.rating,
      carModel: newReview.carModel,
      title: newReview.title,
      comment: newReview.comment,
      date: 'Just now',
      tripType: 'Self Drive'
    })
    
    // Reset form and view first page
    newReview.userName = ''
    newReview.title = ''
    newReview.comment = ''
    newReview.rating = 5
    currentReviewPage.value = 1
    isReviewModalOpen.value = false
  }
}
</script>


