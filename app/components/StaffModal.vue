<template>
      <div 
        v-if="staffMember"
        class="fixed inset-0 z-50 flex items-center justify-center"
      >
        <!-- Overlay -->
        <div 
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          @click="close"
        />
  
        <!-- Modal -->
        <div class="relative bg-yellow-400 rounded-2xl shadow-2xl max-w-2xl w-[90%] p-8 z-10">
          <button 
            @click="close"
            class="absolute top-4 right-4 text-black hover:text-black"
          >
            ✕
          </button>
  
          <div class="flex flex-col md:flex-row gap-6">
            <img 
              :src="staffMember.image"
              class="w-full md:w-1/2 rounded-xl"
            />
  
            <div>
              <h2 class="text-2xl font-bold mb-2 text-black">
                {{ staffMember.name }}
              </h2>
              <p class="mb-4 text-black">
                {{ staffMember.role }}
              </p>
              <p class="text-black">
                {{ staffMember.bio }}
              </p>
            </div>
          </div>
        </div>
      </div>
  </template>

<script setup>
const props = defineProps({
  staffMember: Object
})

const emit = defineEmits(['close'])

const close = () => emit('close')
</script>

