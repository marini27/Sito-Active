<template>
    <div class="space-y-2">
        <label class="text-sm font-semibold text-zinc-400">{{ label }}</label>
        <input :placeholder="placeholder" class="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none transition" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    placeholder: string
}>()
</script>