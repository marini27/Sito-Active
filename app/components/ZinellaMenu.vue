<template>
    <nav>
      <!-- Desktop -->
      <ZinellaMenuDesktop 
        :menu="menu"
        class="hidden md:block"
      />
  
      <!-- Mobile -->
      <ZinellaMenuMobile 
        :menu="menu"
        class="block md:hidden"
      />
    </nav>
  </template>
  
  <script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui'
  
  defineProps<{
    menu: NavigationMenuItem[]
  }>()
  </script>
  