<template>
  <nav class="flex items-center gap-1">
    <NuxtLink
      v-for="item in menu"
      :key="item.label"
      :to="item.to"
      class="relative px-4 py-2 font-medium transition-all duration-200 ease-in-out"
      :class="isActive(item.to as string) 
        ? 'text-yellow-400' 
        : 'text-white hover:text-zinc-300'"
    >
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  menu: NavigationMenuItem[]
}>()

const route = useRoute()

const isActive = (path: string): boolean => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>
  