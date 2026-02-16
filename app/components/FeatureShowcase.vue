<template>
    <section class="bg-black text-white py-16 px-6 md:px-20">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <span v-if="badge" class="text-yellow-400 font-semibold text-sm">
            {{ badge }}
          </span>
  
          <h2 class="mt-4 text-3xl md:text-5xl font-bold leading-tight uppercase">
            <slot name="title" />
          </h2>
  
          <div class="mt-6 space-y-4 text-gray-300 leading-relaxed">
            <slot name="description" />
          </div>
  
          <div v-if="features.length" class="mt-8 flex flex-col sm:flex-row gap-8">
            <div v-for="(feature, index) in features" :key="index" class="flex items-start gap-4">
              <UIcon :name="feature.icon" class="text-yellow-400 w-8 h-8 mt-1 shrink-0"/>
              <div>
                <h4 class="font-semibold">{{ feature.title }}</h4>
                <p class="text-gray-400 text-sm">{{ feature.text }}</p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="relative h-full">
          <img 
            :src="image" 
            :alt="imageAlt" 
            class="rounded-xl object-cover w-full h-[300px] md:h-full" 
          />
        </div>
      </div>
      
      <slot name="stats" />
    </section>
  </template>
  
  <script setup>
  defineProps({
    badge: String,
    image: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: 'Immagine sezione'
    },
    features: {
      type: Array,
      default: () => []
    }
  })
  </script>