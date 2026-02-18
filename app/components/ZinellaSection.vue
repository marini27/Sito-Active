<template>
    <section class="min-h-screen w-full flex items-center bg-black text-yellow-400 overflow-hidden">
      <div 
        class="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-0 flex flex-col gap-12"
        :class="props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'"
      >
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <div class="relative group w-full">
            <div class="absolute -inset-1 bg-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              :src="props.imageSrc" 
              :alt="props.imageAlt" 
              class="relative w-full h-[400px] md:h-[600px] object-cover rounded-2xl border-2 border-yellow-400/20"
            />
          </div>
        </div>
  
        <div class="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            {{ props.title }}
          </h2>
          <div class="w-20 h-2 bg-yellow-400"></div> <p class="text-xl md:text-2xl font-light text-yellow-100/80 leading-relaxed max-w-xl">
            {{ props.description }}
          </p>
          
          <div v-if="$slots.footer" class="pt-4">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </section>
  </template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: 'Immagine sezione',
  reverse: false
});
</script>
