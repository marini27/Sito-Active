<template>
  <div class="bg-zinc-900 rounded-xl py-12 px-6 text-center border border-white/5 transition-transform hover:scale-105">
    <h3 class="text-yellow-400 text-4xl md:text-5xl font-bold">
      {{ value }}
    </h3>
    <p class="mt-2 text-zinc-400 text-xs md:text-sm tracking-widest uppercase">
      {{ label }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>
