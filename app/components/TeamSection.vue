<template>
  <section class="mb-16">
    <div class="flex items-center gap-4 mb-8">
      <h2 class="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">
        {{ title }}
      </h2>
      <div class="h-[1px] bg-zinc-800 flex-grow"></div>
    </div>

    <div v-if="!loading" 
      :class="[
        'grid gap-6', 
        vertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      ]"
    >
      <TeamCard 
        v-for="team in teams" 
        :key="team.id" 
        :team="team" 
      />
    </div>

    <div v-else 
      :class="[
        'grid gap-6',
        vertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      ]"
    >
      <div 
        v-for="i in (vertical ? 2 : 3)" 
        :key="i" 
        class="h-48 w-full bg-zinc-800 animate-pulse rounded-xl" 
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    teams: any[]
    loading: boolean
    vertical?: boolean
  }>()
</script>