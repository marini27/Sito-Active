<template>
    <div>
      <button @click="isOpen = !isOpen" class="text-yellow-400">
        ☰
      </button>
  
      <div v-if="isOpen" class="absolute top-20 left-0 w-full bg-black">
        <NuxtLink
          v-for="item in menu"
          :key="item.label"
          :to="item.to"
          class="block px-6 py-4 text-white border-b border-gray-700"
          @click="isOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui'
  import { ref } from 'vue'
  
  defineProps<{
    menu: NavigationMenuItem[]
  }>()
  
  const isOpen = ref(false)
  </script>
  