<template>
  <div class="bg-black min-h-screen text-white">
    <MiniHero
      badge="Stagione 2024/2025"
    >
      <template #title>Le nostre squadre</template>
      <template #description>
        Dalla Serie C al minivolley: scopri tutte le formazioni Zinella Volley, 
        gli staff tecnici e i campionati in cui siamo protagonisti.
      </template>
    </MiniHero>

    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="flex justify-end gap-3 mb-12">
        <button 
          v-for="filter in filters" 
          :key="filter.value"
          @click="activeFilter = filter.value"
          class="px-4 py-1.5 rounded-full font-bold text-sm transition-all duration-300"
          :class="activeFilter === filter.value 
            ? 'bg-yellow-400 text-black' 
            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'"
        >
          {{ filter.label }}
        </button>
      </div>

      <TeamSection
        v-if="activeFilter === 'senior' || activeFilter === 'tutte'"
        title="Squadre Senior"
        :teams="seniorTeams"
        :loading="loading"
      />
      <TeamSection
        v-if="activeFilter === 'giovanili' || activeFilter === 'tutte'"
        title="Squadre Giovanili"
        :teams="juniorTeams"
        :loading="loading"
      />
      <TeamSection
        v-if="activeFilter === 'minivolley' || activeFilter === 'tutte'"
        title="Minivolley e Volley S3"
        :teams="minivolleyTeams"
        :loading="loading"
      />
    </div>
  </div>
</template>

<script setup>
import mockTeams from '~/mock/teams.json';
import { ref, computed, onMounted } from 'vue';

const teams = ref([]);
const activeFilter = ref('tutte');
const loading = ref(true);

const filters = [
  { label: 'Tutte', value: 'tutte' },
  { label: 'Senior', value: 'senior' },
  { label: 'Giovanili', value: 'giovanili' },
  { label: 'Minivolley', value: 'minivolley' }
];

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    teams.value = mockTeams;
    loading.value = false;
  }, 1500)
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