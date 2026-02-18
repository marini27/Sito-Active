<template>
  <div 
    @click="handleClick"
    class="cursor-pointer group flex flex-col h-full bg-[#121212] rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:border-yellow-600/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
    <div 
    class="relative overflow-hidden aspect-[3/2]">
      <img 
        :src="staffMember.image" 
        :alt="staffMember.name" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div class="p-6 flex flex-col flex-grow bg-[#121212]">
      <h4 class="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
        {{ staffMember.name }}
      </h4>
      <p class="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500 mt-1 mb-4">
        {{ staffMember.role }}
      </p>
      <p class="text-sm leading-relaxed text-gray-400 line-clamp-3">
        {{ staffMember.bio }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface StaffModel {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const props = defineProps<{
  staffMember: StaffModel
}>()

const emit = defineEmits(['select'])

const handleClick = () => {
  emit('select', props.staffMember)
}
</script>