<template>
    <NuxtLink 
      :to="`/teams/${team.id}`"
      class="group bg-zinc-900 border border-white/5 p-6 rounded-2xl hover:border-yellow-400/50 transition-all duration-300 relative overflow-hidden"
    >
      <div class="flex justify-between items-start mb-6">
        <span class="text-[10px] bg-zinc-800 px-2 py-1 rounded font-bold uppercase tracking-wider text-zinc-300">
          {{ team.category }}
        </span>
        <span class="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
          {{ team.championship || 'Campionato Regionale' }}
        </span>
      </div>
  
      <h3 class="text-2xl font-black italic mb-4 group-hover:text-yellow-400 transition-colors">
        {{ team.name }}
      </h3>
  
      <div class="space-y-2 text-sm text-zinc-400 mb-8">
        <p v-for="(value, label) in {
          'Allenatore': props.team.coach,
          'Palazzetto': props.team.arena,
          'Allenamenti': props.team.training,
          'Obiettivo': props.team.objective
           }" :key="label">
          <span class="text-zinc-600 font-bold uppercase text-[10px] mr-2">{{ label }}:</span>
          {{ value }}
        </p>
      </div>
  
      <div class="flex justify-between items-center">
        <button class="border border-white/10 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-tighter group-hover:bg-white group-hover:text-black transition-all">
          Vedi Rosa
        </button>
      </div>
    </NuxtLink>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    team: any
  }>()
  </script>