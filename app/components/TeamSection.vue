<template>
    <section class="mb-16">
      <div class="flex items-center gap-4 mb-8">
        <h2 class="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">
          {{ title }}
        </h2>
        <div class="h-[1px] bg-zinc-800 flex-grow"></div>
      </div>
  
      <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TeamCard 
          v-for="team in teams" 
          :key="team.id" 
          :team="team" 
        />
      </div>
      <div v-else class="flex justify-center items-center h-full gap-6">
        <div v-for="i in 3" :key="i" class="h-60 w-full bg-zinc-800 animate-pulse rounded-xl mx-auto" />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string
    teams: any[]
    loading: boolean
  }>()
  </script>