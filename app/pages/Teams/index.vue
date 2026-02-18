<template>
  <div class="p-8">
    <h1>Le Nostre Squadre</h1>
    
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