<template>
  <div class="bg-black min-h-screen text-white">
    <MiniHero
      badge="Stagione 2024/2025"
      imageAlt="Zinella Volley Squadre"
    >
      <template #title>Le nostre squadre</template>
      <template #description>
        Dalla Serie C al minivolley: scopri tutte le formazioni Zinella Volley, 
        gli staff tecnici e i campionati in cui siamo protagonisti.
      </template>
    </MiniHero>

    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="flex justify-end gap-3 mb-12">
        <button class="px-4 py-1.5 rounded-full bg-yellow-400 text-black font-bold text-sm">Tutte</button>
        <button class="px-4 py-1.5 rounded-full bg-zinc-800 text-zinc-400 font-bold text-sm hover:bg-zinc-700">Senior</button>
        <button class="px-4 py-1.5 rounded-full bg-zinc-800 text-zinc-400 font-bold text-sm hover:bg-zinc-700">Giovanili</button>
        <button class="px-4 py-1.5 rounded-full bg-zinc-800 text-zinc-400 font-bold text-sm hover:bg-zinc-700">Minivolley</button>
      </div>

      <TeamSection
        title="Squadre Senior"
        :teams="seniorTeams"
      />
      <TeamSection
        title="Squadre Giovanili"
        :teams="juniorTeams"
      />
      <TeamSection
        title="Minivolley e Volley S3"
        :teams="minivolleyTeams"
      />
    </div>
  </div>
</template>

<script setup>
import mockTeams from '~/mock/teams.json';
import { ref, computed, onMounted } from 'vue';

const teams = ref([]);

onMounted(() => {
  teams.value = mockTeams;
});

const seniorTeams = computed(() => {
  return teams.value.filter(team => team.category === 'Serie C Maschile' || team.category === 'Serie D Maschile');
});

const juniorTeams = computed(() => {
  return teams.value.filter(team => team.category === 'Under 19' || team.category === 'Under 17' || team.category === 'Under 15');
});

const minivolleyTeams = computed(() => {
  return teams.value.filter(team => team.category === 'S3 (6-11 anni)');
});

</script>