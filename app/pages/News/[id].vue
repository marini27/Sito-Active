<template>
  <div>
    <div v-if="article">
      <NuxtLink to="/news" class="text-sm text-zinc-500 hover:underline">
        ← Tutte le news
      </NuxtLink>
      <header class="py-8">
        <p class="text-sm text-zinc-500 mb-2">
          {{ formatDate(article.date) }}
        </p>
        <h1 class="text-4xl font-bold">{{ article.title }}</h1>
      </header>

      <article class="prose max-w-none">
        <p class="text-lg text-zinc-700 mb-4">{{ article.excerpt }}</p>
        <p class="text-zinc-600">{{ article.content }}</p>
      </article>
    </div>
    
    <div v-else class="p-8">
      <h2 class="text-2xl font-bold mb-4">News non trovata</h2>
      <NuxtLink to="/news" class="text-blue-600 hover:underline">
        Torna all'indice
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import mockNews from '~/mock/news.json'
import dayjs from 'dayjs'
import 'dayjs/locale/it'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('it')

const route = useRoute()
const article = mockNews.find(n => n.id.toString() === route.params.id)

const formatDate = (date: string): string => {
  const articleDate = dayjs(date)
  const now = dayjs()
  const daysDiff = now.diff(articleDate, 'day')
  
  if (daysDiff === 0) {
    return 'Oggi'
  } else if (daysDiff === 1) {
    return 'Ieri'
  } else if (daysDiff < 7) {
    return `${daysDiff} giorni fa`
  } else {
    return articleDate.format('DD MMMM YYYY')
  }
}
</script>