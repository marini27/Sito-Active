<template>
    <div class="bg-yellow-400 rounded-2xl p-6 text-black shadow-lg">
      <h3 class="text-xl font-black uppercase tracking-tighter">{{ title }}</h3>
      <p class="text-sm font-bold mb-4 italic">{{ description }}</p>
  
      <div class="text-4xl font-black mb-4">{{ date }}</div>
  
      <p class="text-[11px] leading-tight font-medium mb-6 opacity-80" v-html="info" />
  
      <button class="w-full bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-zinc-100 transition-colors uppercase italic tracking-tighter">
        {{ buttonLabel }}
      </button>
    </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  buttonLabel: {
    type: String,
    required: true
  }
})
</script>