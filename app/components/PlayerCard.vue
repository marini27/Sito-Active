<template>
    <div class="bg-zinc-900 rounded-2xl overflow-hidden border border-white/5">
      <div class="aspect-[3/4] overflow-hidden">
        <img :src="player.image" :alt="player.name" class="w-full h-full object-cover" />
      </div>
      
      <div class="p-4 bg-zinc-900">
        <div class="text-yellow-400 font-bold text-xs mb-1">#{{ player.number }}</div>
        <h3 class="font-bold text-lg leading-tight">{{ player.name }}</h3>
        <p class="text-zinc-500 text-xs uppercase tracking-widest mt-1">{{ player.role }}</p>
      </div>
    </div>
  </template>

<script setup lang="ts">
defineProps<{
  player: {
    id: number
    name: string
    number: number
    role: string
    image: string
  }
}>()
</script>