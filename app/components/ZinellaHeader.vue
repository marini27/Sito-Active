<template>
  <header class="sticky top-0 z-50 bg-black text-yellow-400 h-20 px-8 flex items-center">
    <template>
      <NuxtLink to="/" class="flex items-center gap-3">
        <img 
          src="/logo-zinella.png" 
          alt="Zinella Volley Logo" 
          class="w-10 h-10"
        />
        <span class="text-xl font-bold tracking-wide">
          ZINELLA VOLLEY
        </span>
      </NuxtLink>
    </template>

    <ZinellaMenu :menu="navigationItems" class="mx-auto"/>
  </header>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import ZinellaMenu from '~/components/ZinellaMenu.vue'

const navigationItems = computed<NavigationMenuItem[]>(() => [
  { label: 'HOME', to: '/' },
  { label: 'CHI SIAMO', to: '/about' },
  { label: 'SQUADRE', to: '/teams' },
  { label: 'ACADEMY', to: '/academy' },
  { label: 'NEWS', to: '/news' },
  { label: 'CONTATTI', to: '/contact' }
])
</script>