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
  <!-- carosello sponsor -->
  <div class="bg-black w-full px-2 py-12">
    <h2 class="text-xl uppercase tracking-widest px-6 mt-6 leading-tight text-yellow-400 pb-6" >
      I nostri sponsor
    </h2>
    <div v-if="!sponsor.length" class="flex gap-6">
      <div v-for="i in 3" :key="i" class="h-60 w-72 bg-zinc-800 animate-pulse rounded-xl" />
    </div>
  
    <div v-else class="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth">
        <div
          v-for="sponsor in sponsor"
          :key="sponsor.id"
          @click="handleClickSponsor(sponsor)"
          class="snap-start flex-shrink-0 w-[75%] sm:w-[45%] lg:w-[30%]"
        >
          <img :src="sponsor.image" :alt="sponsor.name" class="w-full h-full object-cover" />
        </div>
    </div>
  </div>
</template>

<script setup>
import ZinellaSection from '~/components/ZinellaSection.vue';
import mockSponsor from '~/mock/sponsor.json';

const sponsor = ref(mockSponsor);

onMounted(() => {
  setTimeout(() => {
    sponsor.value = mockSponsor;
  }, 1500);
});

const handleClickSponsor = (sponsor) => {
  window.open(sponsor.link, '_blank');
}
</script>