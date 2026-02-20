<template>
  <section class="bg-black min-h-screen text-white pt-16 md:pt-24 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <header class="mb-8 md:mb-16">
        <nav class="text-zinc-500 text-xs uppercase tracking-widest mb-4">Home / News</nav>
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-black italic tracking-tighter mb-6 md:mb-8">ULTIME NOVITÀ</h1>
        <div class="flex flex-wrap justify-start md:justify-end gap-2 md:gap-3">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            @click="activeFilter = filter.value"
            class="px-3 md:px-4 py-1.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300"
            :class="activeFilter === filter.value 
              ? 'bg-yellow-400 text-black' 
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'"
          >
            {{ filter.label }}
          </button>
        </div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <article 
          v-for="(news, index) in filteredNews" 
          :key="news.id"
          :class="[
            'group cursor-pointer',
            index === 0 ? 'md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-4 md:gap-8 bg-zinc-900 p-4 md:p-6 rounded-2xl md:rounded-3xl' : 'flex flex-col'
          ]"
        >
          <div :class="[
            'overflow-hidden rounded-xl md:rounded-2xl',
            index === 0 ? 'w-full md:w-2/3 aspect-video' : 'w-full aspect-video mb-4'
          ]">
            <img :src="news.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          <div :class="index === 0 ? 'w-full md:w-1/3 flex flex-col justify-center' : ''">
            <div class="flex items-center gap-3 mb-2 md:mb-3">
              <span class="text-[10px] bg-yellow-400/10 text-yellow-400 px-2 py-1 rounded font-bold uppercase">
                {{ news.category }}
              </span>
              <span class="text-[10px] text-zinc-500 font-bold uppercase">{{ formatDate(news.date) }}</span>
            </div>
            <h2 :class="[
              'font-black italic uppercase leading-tight group-hover:text-yellow-400 transition-colors',
              index === 0 ? 'text-2xl md:text-3xl mb-3 md:mb-4' : 'text-lg md:text-xl mb-2'
            ]">
              {{ news.title }}
            </h2>

            <p class="text-zinc-400 text-sm mb-4 md:mb-6 line-clamp-3">
              {{ news.excerpt }}
            </p>

            <div v-if="index === 0" class="flex bg-yellow-300 p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 w-fit">
              <NuxtLink :to="`/news/${news.id}`" class="text-black font-bold text-xs uppercase">
                Leggi l'articolo completo
              </NuxtLink>
            </div>

            <div v-else>
              <NuxtLink :to="`/news/${news.id}`" class="text-yellow-400 font-bold text-xs uppercase tracking-widest hover:text-yellow-300">
                Leggi di più
              </NuxtLink>
            </div>

          </div>
        </article>
        <div class="mt-8 md:mt-16 text-center col-span-1 md:col-span-2 lg:col-span-3">
          <button class="text-zinc-500 font-bold uppercase text-xs tracking-[0.2em] hover:text-white transition-colors">
            Carica altri articoli
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import mockNews from '~/mock/news.json'
import dayjs from 'dayjs'
import 'dayjs/locale/it'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
dayjs.locale('it')

const news = ref(mockNews)
const activeFilter = ref('tutte')
const filters = [
  { label: 'Tutte', value: 'tutte' },
  { label: 'Prima squadra', value: 'prima-squadra' },
  { label: 'Settore Giovanile', value: 'giovanile' },
  { label: 'Eventi', value: 'eventi' },
  { label: 'Comunicati', value: 'comunicati' }

]

const formatDate = (date: string): string => {
  return dayjs(date).format('DD MMMM YYYY')
}

const filteredNews = computed(() => {
  return news.value.filter(news => {
    return news.category === activeFilter.value || activeFilter.value === 'tutte'
  })
})
</script>