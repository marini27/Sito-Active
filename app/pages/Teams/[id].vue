<template>
  <div class="bg-black min-h-screen text-white">
    <MiniHero
      :badge="`Home / Squadre / ${team.name}`"
      :badgeCategory="team.category"
    >
      <template #title>{{ team.name }}</template>
      <template #description>
        {{ team.description }}
      </template>
    </MiniHero>
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center gap-4 mb-4">
        <h1 class="text-3xl font-black italic uppercase">La rosa {{ team.season }}</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <PlayerCard v-for="player in team.players" :key="player.id" :player="player" />
        </section>

        <aside class="lg:col-span-4 space-y-6">
          <TechnicalStaffCard :staff="team.staff" />
          <TeamInfoCard :team="team" />
          <LastMatchesCard :matches="team.matches" />
        </aside>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  import mockTeams from '~/mock/teams.json';
  import PlayerCard from '~/components/PlayerCard.vue';

  import TechnicalStaffCard from '~/components/TechnicalStaffCard.vue';
  import LastMatchesCard from '~/components/LastMatchesCard.vue';
  import TeamInfoCard from '~/components/TeamInfoCard.vue';

  const route = useRoute();

  const team = ref<any>(null);

  team.value = mockTeams.find(t => t.id === parseInt(route.params.id as string));
  </script>