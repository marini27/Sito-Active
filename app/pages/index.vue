<template>
  <section class="relative h-screen flex items-center justify-center text-center text-white">
    <div class="absolute inset-0 bg-[url('/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg')] bg-cover bg-center bg-no-repeat"/>
    <div class="absolute inset-0 bg-black/70"/>
    <div class="relative z-10 max-w-4xl px-6">
      <h1 class="text-4xl md:text-6xl font-bold text-white">
        LA STORIA DELLA
        <span class="text-yellow-400">PALLAVOLO</span> 
        A BOLOGNA
      </h1>
      <p class="text-zinc-400 text-sm">
        Dal 1970 portiamo passione, talento e spirito di squadra sui campi di tutta Italia. Unisciti alla famiglia Zinella.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
      
      <NuxtLink
        to="/"
        class="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
      >
        Scopri i Corsi
      </NuxtLink>

      <NuxtLink
        to="/"
        class="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
      >
        Chi Siamo
      </NuxtLink>

    </div>
    </div>
  </section>
  
  <ZinellaSection
    title="La nostra storia"
    description="Dal 1970 portiamo passione, talento e spirito di squadra sui campi di tutta Italia. Unisciti alla famiglia Zinella."
    imageSrc="/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
    imageAlt="Zinella Volley Bologna"
    reverse
  />
  <ZinellaSection
    title="La nostra storia"
    description="Dal 1970 portiamo passione, talento e spirito di squadra sui campi di tutta Italia. Unisciti alla famiglia Zinella."
    imageSrc="/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
    imageAlt="Zinella Volley Bologna"
  />
</template>

<script setup>
import ZinellaSection from '~/components/ZinellaSection.vue';
</script>