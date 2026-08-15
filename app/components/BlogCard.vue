<template>
  <article
    class="bg-[#F8F9FC] rounded-3xl p-5 sm:p-6 border border-gray-300/90 shadow-sm hover:shadow-xl hover:border-brand-blue hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    @click="$emit('select', post)"
  >
    <div>
      <!-- Featured Image Container (Matches Screenshot) -->
      <div class="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-neutral-900 mb-5">
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <!-- Category Badge -->
        <span class="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
          {{ post.category }}
        </span>

        <div class="absolute top-3 right-3 bg-yellow-400 text-neutral-950 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow">
          {{ post.readTime }}
        </div>
      </div>

      <!-- Date (Matches Screenshot: June, 15th, 2020 format) -->
      <div class="text-xs font-semibold text-neutral-400 mb-2">
        {{ post.date }}
      </div>

      <!-- Title (Bold Black Headline) -->
      <h3 class="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-brand-blue transition-colors line-clamp-2 mb-3">
        {{ post.title }}
      </h3>

      <!-- Body / Excerpt Snippet -->
      <p class="text-sm text-neutral-600 leading-relaxed line-clamp-4 font-normal">
        {{ post.excerpt }}
      </p>
    </div>

    <!-- Read Full Story Link -->
    <div class="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
      <span class="text-xs font-bold text-brand-blue group-hover:text-brand-blue-dark flex items-center gap-1.5 transition-colors">
        Read Full Story
        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
      <span class="text-xs text-neutral-400 font-medium">By {{ post.author }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
export interface BlogPost {
  id: number
  title: string
  category: string
  date: string
  image: string
  excerpt: string
  content?: string
  readTime: string
  author: string
}

defineProps<{
  post: BlogPost
}>()

defineEmits<{
  (e: 'select', post: BlogPost): void
}>()
</script>
