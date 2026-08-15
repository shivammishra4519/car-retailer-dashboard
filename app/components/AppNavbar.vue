<template>
  <header
    class="sticky top-0 z-50 w-full transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-[#F8F9FC]/95 backdrop-blur-md shadow-md border-b border-gray-200/90 py-3'
        : 'bg-[#F8F9FC] border-b border-gray-200/80 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] py-3.5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        
        <!-- Left: Brand Logo -->
        <NuxtLink to="/" class="flex items-center group transition-transform duration-200 active:scale-95">
          <div class="relative flex items-center">
            <img
              src="~/assets/images/logo.png"
              alt="Rentigo Logo"
              class="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
        </NuxtLink>

        <!-- Center: Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center space-x-1 xl:space-x-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="relative px-3.5 py-2 text-sm font-semibold transition-colors duration-200"
            :class="[
              route.path === link.path
                ? 'text-neutral-900'
                : 'text-neutral-600 hover:text-neutral-900'
            ]"
          >
            {{ link.name }}
            
            <!-- Active Indicator Underline (Matches design image 1) -->
            <span
              v-if="route.path === link.path"
              class="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-neutral-900 rounded-full"
            ></span>
          </NuxtLink>
        </nav>

        <!-- Right: Action Button -->
        <div class="hidden sm:flex items-center gap-3">
          <button
            type="button"
            class="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold bg-neutral-950 text-white hover:bg-neutral-800 active:scale-95 transition-all duration-200 shadow-sm"
          >
            Download App
          </button>
        </div>

        <!-- Mobile Hamburger Button -->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden border-b border-gray-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3"
      >
        <div class="flex flex-col space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="px-4 py-2.5 rounded-lg text-base font-semibold transition-colors"
            :class="[
              route.path === link.path
                ? 'bg-yellow-50 text-neutral-900 font-bold'
                : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
            ]"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
        <div class="pt-2">
          <button
            type="button"
            class="w-full py-3 rounded-full text-center text-sm font-semibold bg-neutral-950 text-white hover:bg-neutral-800 shadow transition-all"
          >
            Download App
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/#about' },
  { name: 'Safety', path: '/#safety' },
  { name: 'Careers', path: '/#careers' },
  { name: 'Blog', path: '/#blog' },
  { name: 'Press', path: '/#press' },
  { name: 'Contact Us', path: '/contact' },
]

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 20
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
