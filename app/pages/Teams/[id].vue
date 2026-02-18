<template>
    <div v-if="team">
      <NuxtLink to="/teams">← Torna alla lista</NuxtLink>
      
      <div>
        <h1>{{ team.name }}</h1>
      </div>
  
      <div>
        <h3>Informazioni Squadra</h3>
        <ul>
          <li><strong>Città:</strong> {{ team.city }}</li>
          <li><strong>ID squadra:</strong> {{ team.id }}</li>
        </ul>
      </div>
    </div>
    <div v-else>Squadra non trovata.</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import mockTeams from '~/mock/teams.json';
  const route = useRoute();

  const team = ref<any>(null);

  team.value = mockTeams.find(t => t.id === parseInt(route.params.id as string));
  </script>