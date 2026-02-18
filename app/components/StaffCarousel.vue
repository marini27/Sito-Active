<template>
    <div v-if="!staffMembers.length" class="flex gap-6">
      <div v-for="i in 3" :key="i" class="h-60 w-72 bg-gray-200 animate-pulse rounded-xl" />
    </div>
  
    <div v-else class="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4">
        <div
          v-for="staffMember in staffMembers"
          :key="staffMember.id"
          class="snap-start flex-shrink-0 w-[75%] sm:w-[45%] lg:w-[30%]"
        >
          <StaffCard :staffMember="staffMember" @select="handleSelect"/>
        </div>
    </div>
</template>

<script setup>
import StaffCard from '~/components/StaffCard.vue'

const props = defineProps({
  staffMembers: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['select'])

const handleSelect = (staffMember) => {
  emit('select', staffMember)
}
</script>

