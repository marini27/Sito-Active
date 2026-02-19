<template>
  <div>
    <MiniHero
      badge="Teams"
      image="/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
      imageAlt="Zinella Volley"
    >
      <template #title>
        Le Nostre Squadre
      </template>
      <template #description>
        Le nostre squadre sono il cuore della nostra struttura. Offrono corsi di preparazione fisica, tecnica e psicologica per i nostri atleti.
      </template>
    </MiniHero>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      <NuxtLink 
        v-for="team in teams" 
        :key="team.id" 
        :to="`/teams/${team.id}`"
      >
        <h2>{{ team.name }}</h2>
        <p>{{ team.city }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import mockTeams from '~/mock/teams.json';
import { ref, onMounted } from 'vue';

const teams = ref([]);

onMounted(() => {
  teams.value = mockTeams;
});
</script>