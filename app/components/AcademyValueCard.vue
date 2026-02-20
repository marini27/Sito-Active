<template>
  <div class="bg-zinc-900 rounded-xl p-6 mt-4 border border-white/5 transition-transform hover:scale-105">
    <div class="bg-red-500/50 rounded-xl flex gap-4 p-4 h-12 w-12 items-center justify-center mb-4">
        <UIcon :name="icon" class="text-white w-8 h-8 mt-1 shrink-0"/>
    </div>
    <h3 class="text-white text-xl md:text-2xl font-bold">
      {{ value }}
    </h3>
    <p class="mt-2 text-zinc-400 text-xs md:text-sm tracking-widest">
      {{ label }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
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

