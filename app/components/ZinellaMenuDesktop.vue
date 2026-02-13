<template>
    <UNavigationMenu
      :items="menu"
      orientation="horizontal"
      :ui="{
        link: 'px-4 py-2 text-white hover:text-gray-300 font-medium'
      }"
    />
  </template>
  
  <script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui'
  
  defineProps<{
    menu: NavigationMenuItem[]
  }>()
  </script>
  