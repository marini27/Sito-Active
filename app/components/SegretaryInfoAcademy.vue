<template>
    <div class="bg-zinc-900 rounded-2xl p-6 border border-white/5 space-y-6">
        <h4 class="text-xs font-bold uppercase tracking-widest text-zinc-500">{{ segretaryTitle }}</h4>

            <ul class="space-y-4 text-sm">
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-map-pin" class="w-4 h-4 text-zinc-500 mt-0.5" />
                <span class="text-zinc-300">{{ address }}</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-phone" class="w-4 h-4 text-zinc-500 mt-0.5" />
                <span class="text-zinc-300">{{ phone }}</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-mail" class="w-4 h-4 text-zinc-500 mt-0.5" />
                <span class="text-zinc-300 break-all">{{ email }}</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-clock" class="w-4 h-4 text-zinc-500 mt-0.5" />
                <span class="text-zinc-300">{{ openingHours }}</span>
              </li>
            </ul>

        <button class="w-full border border-white/10 py-3 rounded-xl font-bold text-xs uppercase hover:bg-white/5 transition-all italic tracking-tighter">
            {{ buttonLabel }}
        </button>
    </div>
</template>

<script setup>

defineProps({
  segretaryTitle: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  openingHours: {
    type: String,
    required: true
  },
  buttonLabel: {
    type: String,
    required: true
  }
})
</script>