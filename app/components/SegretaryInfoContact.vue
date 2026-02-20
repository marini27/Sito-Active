<template>
    <div class="bg-gradient-to-br from-zinc-800 to-zinc-1000 p-8 rounded-xl border border-white/5 space-y-8 text-sm">
        <span class="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">{{ segretaryTitle }}</span>
        <h2 class="text-2xl font-bold text-white mt-2 leading-tight" v-html="title" />
  
        <div class="space-y-1 border-t border-white/5 pt-4">
          <p class="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Email</p>
          <a href="mailto:segreteria@zinellavolley.it" class="text-yellow-400 font-bold hover:underline">
            {{ email }}
          </a>
        </div>
  
        <div class="space-y-3 border-t border-white/5 pt-4">
          <p class="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Telefono</p>
          <p class="text-white font-bold">{{ phone }}</p>
          <div class="flex flex-wrap gap-2">
            <span class="bg-zinc-800/50 border border-white/10 px-3 py-1 rounded-full text-[10px] text-zinc-300">
              {{ openingDays }}
            </span>
            <span class="bg-zinc-800/50 border border-white/10 px-3 py-1 rounded-full text-[10px] text-zinc-300">
              {{ openingHours }}
            </span>
          </div>
        </div>
  
        <div class="space-y-3 pt-4 border-t border-white/5">
          <p class="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Palestra Principale</p>
          <p class="text-white font-bold leading-snug" v-html="address" />
          <div class="flex flex-wrap gap-2">
            <span class="bg-zinc-800/50 border border-white/10 px-3 py-1 rounded-full text-[10px] text-zinc-300">
              {{ training }}
            </span>
            <span class="bg-zinc-800/50 border border-white/10 px-3 py-1 rounded-full text-[10px] text-zinc-300">
              {{ team }}
            </span>
          </div>
        </div>
  
        <div class="space-y-2 pt-4 border-t border-white/5">
          <p class="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">{{ social }}</p>
          <p class="text-zinc-400 text-xs">{{ socialDescription }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
  segretaryTitle: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  openingDays: {
    type: String,
    required: true
  },
  openingHours: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  training: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  social: {
    type: String,
    required: true
  },
  socialDescription: {
    type: String,
    required: true
  }
})
</script>