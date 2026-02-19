<template>
  <MiniHero
    badge="Academy"
    image="/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
    imageAlt="Zinella Volley"
    :features="myFeatures"
  >
    <template #title>
      Academy
    </template>
    <template #description>
      La nostra Academy è il punto di partenza per i nostri atleti. Offre corsi di preparazione fisica, tecnica e psicologica per i nostri atleti.
    </template>
  </MiniHero>
</template>

<script setup>
import MiniHero from '~/components/MiniHero.vue';

const myFeatures = [
  { 
    icon: 'i-lucide-trophy', 
    title: 'Eccellenza', 
    text: 'Staff tecnico certificato FIPAV.' 
  },
]
</script>