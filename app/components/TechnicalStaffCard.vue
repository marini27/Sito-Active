<template>
  <div class="bg-zinc-900 p-6 rounded-2xl border border-white/5">
    <h4 class="text-[15px] font-bold uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/5 pb-3">Staff Tecnico</h4>
    <div class="space-y-4">
      <div v-for="member in staff" :key="member.name" class="flex items-center gap-4">
        <img :src="member.avatar" class="w-10 h-10 rounded-full object-cover border border-white/10" />
        <div>
          <p class="font-bold text-sm">{{ member.name }}</p>
          <p class="text-[10px] text-zinc-500 uppercase">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  staff: any[]
}>()
</script>