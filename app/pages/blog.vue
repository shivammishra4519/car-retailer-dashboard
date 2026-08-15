<template>
  <div class="bg-white min-h-[calc(100vh-80px)]">
    
    <!-- Top Hero Banner for Blog Page (Clean & Focused) -->
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
          <span class="text-neutral-900">Blog</span>
        </nav>

        <div class="max-w-3xl">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-yellow-400/20 text-neutral-900 border border-yellow-400/40 uppercase tracking-wider mb-3">
            <span class="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            Rentigo Stories & Insights
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            News, Travel Guides & <span class="text-brand-blue">Innovations</span>
          </h1>
          <p class="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
            Explore verified customer ratings, latest updates on luxury rental fleets, road trip recommendations across India, and safety initiatives.
          </p>

          <!-- Key Quick Highlights Badges -->
          <div class="flex flex-wrap items-center gap-3 mt-5 text-xs text-neutral-600 font-medium">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-gray-200/90 rounded-full shadow-sm">
              <span class="text-amber-500">★</span> 12,850+ Customer Ratings
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-gray-200/90 rounded-full shadow-sm">
              <span>🚗</span> Certified Luxury Fleet
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-gray-200/90 rounded-full shadow-sm">
              <span class="text-emerald-500">✓</span> Instant Digital Verification
            </span>
          </div>
        </div>

      </div>
    </section>

    <!-- Rating & Reviews Section (Moved UP) -->
    <CustomerRatingSection />

    <!-- Main Blog Grid Section (With Category Filters & Search Bar Placed Here) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 border-t border-gray-200">
      
      <!-- Section Headline -->
      <div class="mb-8">
        <span class="text-xs font-bold uppercase tracking-wider text-neutral-400">Featured Content</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
          Latest Articles & Driving Insights
        </h2>
        <p class="text-neutral-500 text-xs sm:text-sm mt-1">
          Curated road trip guides, technical fleet comparisons, and rental tips.
        </p>
      </div>

      <!-- Filters & Real-Time Search Bar Toolbar (Positioned right with Blog Section) -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 bg-[#F8F9FC] p-4 sm:p-5 rounded-3xl border border-gray-200 shadow-sm">
        
        <!-- Category Filter Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            class="px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap"
            :class="selectedCategory === cat ? 'bg-neutral-900 text-white shadow-sm' : 'bg-white border border-gray-300 text-neutral-600 hover:bg-gray-100'"
            @click="selectedCategory = cat; currentPage = 1"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Real-Time Search Bar -->
        <div class="w-full lg:w-80 shrink-0">
          <div class="relative bg-white rounded-2xl border border-gray-300 shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-yellow-400 focus-within:border-yellow-400">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search articles, fleet, tips..."
              class="w-full pl-10 pr-9 py-2.5 bg-transparent rounded-2xl text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none"
            />
            <button
              v-if="searchQuery"
              type="button"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-800 transition-colors"
              @click="searchQuery = ''; currentPage = 1"
              aria-label="Clear search"
            >
              <span class="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold">✕</span>
            </button>
          </div>
        </div>

      </div>


      <!-- If posts found -->
      <div v-if="paginatedPosts.length > 0">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            v-for="post in paginatedPosts"
            :key="post.id"
            :post="post"
            @select="openArticleModal"
          />
        </div>

        <!-- Redesigned Modern Pagination Bar -->
        <div class="mt-14 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <!-- Left: Clean Count Badge -->
          <div class="text-xs text-neutral-500 font-medium">
            Showing <strong class="text-neutral-900">{{ (currentPage - 1) * postsPerPage + 1 }}</strong> to <strong class="text-neutral-900">{{ Math.min(currentPage * postsPerPage, filteredPosts.length) }}</strong> of <strong class="text-neutral-900">{{ filteredPosts.length }}</strong> articles
          </div>

          <!-- Right: Sleek Pagination Controls -->
          <div class="flex items-center gap-2">
            <!-- Prev Button -->
            <button
              type="button"
              :disabled="currentPage === 1"
              class="px-3.5 py-2 rounded-xl border border-gray-300 text-xs font-bold text-neutral-700 bg-white hover:bg-gray-50 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 shadow-sm"
              @click="currentPage--"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous</span>
            </button>

            <!-- Page Number Badges -->
            <button
              v-for="p in totalPages"
              :key="p"
              type="button"
              class="w-8 h-8 rounded-xl text-xs font-bold transition-all flex items-center justify-center"
              :class="currentPage === p ? 'bg-neutral-900 text-white shadow-md' : 'bg-white border border-gray-300 text-neutral-700 hover:bg-gray-50'"
              @click="currentPage = p"
            >
              {{ p }}
            </button>

            <!-- Next Button -->
            <button
              type="button"
              :disabled="currentPage === totalPages"
              class="px-3.5 py-2 rounded-xl border border-gray-300 text-xs font-bold text-neutral-700 bg-white hover:bg-gray-50 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 shadow-sm"
              @click="currentPage++"
            >
              <span>Next</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <!-- If no posts match search -->
      <div v-else class="text-center py-16 bg-[#F8F9FC] rounded-3xl border border-gray-200 p-8">
        <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-3 text-neutral-500">
          🔍
        </div>
        <h3 class="text-lg font-bold text-neutral-900">No articles found</h3>
        <p class="text-xs text-neutral-500 mt-1">Try searching for different keywords or reset category filters.</p>
        <button
          type="button"
          class="mt-4 px-4 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold"
          @click="searchQuery = ''; selectedCategory = 'All Stories'; currentPage = 1"
        >
          Reset Filters
        </button>
      </div>

    </section>

    <!-- Article Detail Modal (Responsive: Sticky Header, Scrollable Middle Body, Sticky Footer) -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="selectedArticle"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-sm"
        @click.self="selectedArticle = null"
      >
        <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] sm:max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 overflow-hidden relative">
          
          <!-- 1. Sticky Header with Category Badge & High-Contrast Close Icon -->
          <div class="shrink-0 px-6 py-4 border-b border-gray-100 bg-white/95 backdrop-blur-md flex items-center justify-between z-20">
            <div class="flex items-center gap-2">
              <span class="bg-neutral-900 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {{ selectedArticle.category }}
              </span>
              <span class="text-xs text-neutral-400 hidden sm:inline">• {{ selectedArticle.readTime }}</span>
            </div>
            
            <button
              type="button"
              class="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-neutral-700 hover:text-neutral-950 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              @click="selectedArticle = null"
              aria-label="Close article modal"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- 2. Scrollable Middle Body (Content fits without scroll if short, scrolls smoothly if long) -->
          <div class="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 overscroll-contain custom-scrollbar">
            
            <!-- Hero Image Banner -->
            <div class="relative h-56 sm:h-72 rounded-2xl overflow-hidden bg-neutral-900 shrink-0 shadow-inner">
              <img :src="selectedArticle.image" :alt="selectedArticle.title" class="w-full h-full object-cover" />
            </div>

            <!-- Published Meta -->
            <div class="text-xs font-semibold text-neutral-400 flex items-center gap-2">
              <span>Published on {{ selectedArticle.date }}</span>
              <span>•</span>
              <span class="text-neutral-600 font-bold">By {{ selectedArticle.author }}</span>
            </div>

            <!-- Article Title -->
            <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              {{ selectedArticle.title }}
            </h2>

            <!-- Detailed Content -->
            <div class="prose prose-neutral max-w-none text-sm text-neutral-600 space-y-4 leading-relaxed font-normal">
              <p class="font-medium text-neutral-800 text-sm sm:text-base border-l-4 border-yellow-400 pl-4 py-0.5 bg-yellow-50/50 rounded-r-xl">
                {{ selectedArticle.excerpt }}
              </p>
              <p v-if="selectedArticle.content">{{ selectedArticle.content }}</p>
              <p>
                At Rentigo, our mission is to empower seamless mobility, whether for daily urban commutes or scenic highway explorations. We continuously expand our certified luxury fleet and EV infrastructure to ensure maximum comfort and safety for every rider.
              </p>
            </div>

          </div>

          <!-- 3. Sticky Footer with Close Story & Explore Fleet Action Buttons -->
          <div class="shrink-0 px-6 py-4 bg-gray-50/95 backdrop-blur-md border-t border-gray-200 flex items-center justify-between z-20">
            <button
              type="button"
              class="px-5 py-2.5 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-900 font-bold text-xs transition-all active:scale-95"
              @click="selectedArticle = null"
            >
              Close Story
            </button>
            <NuxtLink
              to="/#about"
              class="px-5 py-2.5 rounded-full bg-[#FFC72C] hover:bg-yellow-400 text-neutral-950 font-bold text-xs transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
              @click="selectedArticle = null"
            >
              <span>Explore Rentigo Fleet</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>

        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { BlogPost } from '~/components/BlogCard.vue'

// Import assets for high-quality visuals
import heroCarImg from '~/assets/images/hero-car.jpg'
import bannerCarImg from '~/assets/images/car-banner.jpg'

useHead({
  title: 'Blog & Customer Ratings - Rentigo Mobility',
  meta: [
    { name: 'description', content: 'Read the latest updates, car rental guides, and verified customer ratings from Rentigo.' }
  ]
})

const categories = ['All Stories', 'Company News', 'Fleet & EVs', 'Subscription & Passes', 'Safety & Tips']
const selectedCategory = ref('All Stories')
const searchQuery = ref('')
const currentPage = ref(1)
const postsPerPage = 3

const selectedArticle = ref<BlogPost | null>(null)

const openArticleModal = (post: BlogPost) => {
  selectedArticle.value = post
}

// Reset page when search or category changes
watch([searchQuery, selectedCategory], () => {
  currentPage.value = 1
})

// Blog Posts Data
const allPosts = ref<BlogPost[]>([
  {
    id: 1,
    title: 'Rentigo launches 11 Fast Charging & Refreshment Centers in UP Hubs',
    category: 'Company News',
    date: 'August 15th, 2026',
    image: bannerCarImg,
    readTime: '3 min read',
    author: 'Editorial Team',
    excerpt: 'The summer wave has been sweeping across North India. To ensure safety and hydration for our captains and self-drive renters, Rentigo has launched 11 dedicated refreshment and ultra-fast charging centers throughout major highway routes.',
    content: 'These centers are equipped with 150kW DC fast chargers for electric vehicles, complimentary air-conditioned rest lounges, chilled beverage dispensers, and 24/7 technical tire-inspection stations.'
  },
  {
    id: 2,
    title: 'Rentigo rolls out All-Inclusive Luxury Power Pass Subscription',
    category: 'Subscription & Passes',
    date: 'August 10th, 2026',
    image: heroCarImg,
    readTime: '4 min read',
    author: 'Mobility Product Team',
    excerpt: "India's fastest growing premium rental service has officially announced its Power Pass subscription program. Frequent travelers can now unlock guaranteed surge-free prices, priority car delivery, and zero-deposit rentals across all sports coupe and luxury sedan models.",
    content: 'Power Pass holders receive 20% discount on every weekend rental, free doorstep vehicle drops, comprehensive bumper-to-bumper insurance, and access to dedicated personal concierge support.'
  },
  {
    id: 3,
    title: 'Top 5 Scenic Weekend Road Trips from Shahjahanpur & Bareilly',
    category: 'Safety & Tips',
    date: 'August 4th, 2026',
    image: bannerCarImg,
    readTime: '5 min read',
    author: 'Travel Desk',
    excerpt: 'Looking to escape the city noise? From the lush hills of Nainital to the royal heritage trails of Lucknow and Dudhwa National Park, here is your curated guide for high-speed luxury highway cruising.',
    content: 'Discover the best highway rest stops, recommended pitstops with verified EV chargers, and safety tips for cruising comfortably in our premium sports coupes.'
  },
  {
    id: 4,
    title: 'Porsche Taycan vs Cayman: Which Luxury Rental Fits Your Driving Style?',
    category: 'Fleet & EVs',
    date: 'July 28th, 2026',
    image: heroCarImg,
    readTime: '4 min read',
    author: 'Auto Enthusiast Desk',
    excerpt: 'Comparing the pure raw acoustic thrills of the twin-turbo petrol engines with the instantaneous 0-100 km/h electric torque of modern EV supercars.',
    content: 'Whether you prefer track-inspired cornering precision or silent, seamless highway luxury, this in-depth comparison will help you pick the right car for your upcoming booking.'
  },
  {
    id: 5,
    title: 'Safety First: Complete 50-Point Sanitization & Inspection Standards',
    category: 'Safety & Tips',
    date: 'July 15th, 2026',
    image: bannerCarImg,
    readTime: '3 min read',
    author: 'Safety Operations',
    excerpt: 'Every single vehicle in our fleet undergoes computerized brake calibration, tire-tread laser depth measurement, and complete interior deep disinfection before every handover.',
    content: 'We adhere to the highest global standards so that every journey you take with your family or business colleagues is safe, reliable, and pristine.'
  },
  {
    id: 6,
    title: 'Expanding Luxury Fleet to 10 New Tier-2 Travel Corridors',
    category: 'Company News',
    date: 'July 8th, 2026',
    image: heroCarImg,
    readTime: '3 min read',
    author: 'Corporate Growth Desk',
    excerpt: 'With rising demand for premium self-drive vehicles across Uttar Pradesh and NCR, Rentigo is adding 150 brand new BMW, Mercedes, and Porsche models to our fast-growing regional network.',
    content: 'All new locations feature contactless pickup terminals, 24/7 dedicated breakdown support, and localized concierge staff.'
  }
])

const filteredPosts = computed(() => {
  return allPosts.value.filter(post => {
    const matchesCategory = selectedCategory.value === 'All Stories' || post.category === selectedCategory.value
    const matchesQuery = searchQuery.value.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesQuery
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / postsPerPage) || 1
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  return filteredPosts.value.slice(start, start + postsPerPage)
})
</script>

