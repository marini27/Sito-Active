<template>
    <div class="bg-zinc-900 p-6 rounded-2xl border border-white/5">
        <h4 class="text-[15px] font-bold uppercase tracking-widest text-zinc-500 border-b border-white/5 mb-6 pb-3">Informazioni</h4>
        <div class="space-y-5">
            <div class="flex justify-between items-center">
              <span class="text-zinc-500">Campionato:</span>
              <span class="text-white">{{ team.championship }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-zinc-500">Girone:</span>
              <span class="text-white">{{ team.group }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-zinc-500">Palazzetto:</span>
              <span class="text-white">{{ team.arena }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-zinc-500">Allenamenti:</span>
              <span class="text-white">{{ team.training }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    team: any
}>()
</script>