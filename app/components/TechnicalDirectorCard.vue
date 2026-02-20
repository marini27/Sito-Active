<template>
  <div class="bg-zinc-900 rounded-2xl p-6 border border-white/5">
    <h4 class="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">{{ roleTitle }}</h4>
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-full overflow-hidden border border-white/10">
        <img :src="image" :alt="name" class="w-full h-full object-cover" />
      </div>
      <div>
        <p class="font-bold text-sm">{{ name }}</p>
        <p class="text-[10px] text-zinc-500 uppercase">{{ role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  roleTitle: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>