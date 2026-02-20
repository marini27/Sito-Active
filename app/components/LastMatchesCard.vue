<template>
  <div class="bg-zinc-900 p-6 rounded-2xl border border-white/5">
    <h4 class="text-[15px] font-bold uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/5 pb-3">Ultime Partite</h4>
    <table class="w-full text-xs">
      <tr v-for="match in matches" :key="match.date" class="border-b border-white/5 last:border-0">
        <td class="py-3 text-zinc-500">{{ match.date }}</td>
        <td class="py-3 font-bold">{{ match.opponent }}</td>
        <td class="py-3 text-right font-black" :class="match.win ? 'text-green-500' : 'text-red-500'">
          {{ match.score }}
        </td>
      </tr>
     </table>
   </div>
 </template>

 <script setup lang="ts">
 defineProps<{
  matches: any[]
 }>()
 </script>