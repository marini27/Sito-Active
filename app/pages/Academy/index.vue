<template>
  <div class="bg-black min-h-screen text-white">
    <MiniHero
      badge="Home / Academy"
      badgeCategory="Settore Giovanile"
    >
      <template #title>
        Il futuro inizia qui.
      </template>
      <template #description>
        Lo Zinella Volley Academy è il luogo dove i giovani talenti crescono. Non solo atleti, ma persone. Un percorso educativo attraverso lo sport, dal minivolley all'agonismo.
      </template>
    </MiniHero>
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section class="lg:col-span-8">
          <div class="flex flex-col gap-2 mb-6">
            <h1 class="text-3xl font-black italic">I nostri valori</h1>
            <p class="text-zinc-400 text-sm">
              Pilastri fondamentali su cui costruiamo il percorso di ogni nostro atleta.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <AcademyValueCard icon="i-lucide-users" value="Spirito di squadra" label="Imparare a vincere e perdere insieme, supportandosi a vicenda" />
            <AcademyValueCard icon="i-lucide-users" value="Crescita" label="Miglioramento tecnico costante seguito da allenatori certificati FIPAV" />
            <AcademyValueCard icon="i-lucide-trophy" value="Passione" label="Trasmettere l'amore e la passione per la pallavolo e lo sport sano" />
          </div>

          <div class="flex flex-col gap-2 mb-6">
            <h1 class="text-3xl font-black italic">Le nostre squadre</h1>
            <p class="text-zinc-400 text-sm">
              Trova la squadra giusta per te.
            </p>
          </div>

          <TeamSection
            title="Squadre"
            :teams="teams"
            :loading="loading"
            vertical
          />
        </section>

        <aside class="lg:col-span-4 flex flex-col gap-6">
          <OpenDayCard title="Open Days" description="Vieni a provare gratuitamente!" date="14-15 SET" info="Dalle 15:00 alle 18:00 presso il PalaZinella. <br /> Prenotazione obbligatoria." buttonLabel="Prenota posto" />

          <TechnicalDirectorCard roleTitle="Responsabile Tecnico" name="Roberto Monti" image="/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg" role="Direttore Scuola Volley" />

          <SegretaryInfoAcademy segretaryTitle="Segreteria" address="Via dello Sport 12, Bologna" phone="051 1234567" email="scuolavolley@zinellavolley.it" openingHours="Lun-Ven 16:30 - 19:30" buttonLabel="Modulo Iscrizione PDF" />
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import MiniHero from '~/components/MiniHero.vue';
import AcademyValueCard from '~/components/AcademyValueCard.vue';
import TeamSection from '~/components/TeamSection.vue';
import OpenDayCard from '~/components/OpenDayCard.vue';
import TechnicalDirectorCard from '~/components/TechnicalDirectorCard.vue';
import SegretaryInfoAcademy from '~/components/SegretaryInfoAcademy.vue';

import mockTeams from '~/mock/teams.json';

const teams = ref([]);
const loading = ref(true);

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    teams.value = mockTeams;
    loading.value = false;
  }, 1500)
});
</script>