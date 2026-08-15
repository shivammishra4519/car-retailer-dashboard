<template>
  <div class="min-h-screen flex flex-col bg-[#FAFAFC] text-neutral-900 font-sans">
    <!-- Sticky Navbar Component (Image 1 design) -->
    <AppNavbar />

    <!-- Dynamic Page Content Slot -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Global Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// In Nuxt 3 & 4, AppNavbar and AppFooter components in components/ are auto-imported!
</script>
