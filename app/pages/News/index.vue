<template>
  <div>
    <MiniHero
      badge="News"
      image="/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
      imageAlt="Zinella Volley"
    >
      <template #title>
        Ultime News
      </template>
      <template #description>
        Stay updated with the latest news and events from Zinella Volley.
      </template>
    </MiniHero>
    
    <ul>
      <li v-for="article in news" :key="article.id" class="py-8">
        <NuxtLink :to="`/news/${article.id}`">
          <span class="text-sm text-gray-500">{{ formatDate(article.date) }}</span>
          <h2>
            {{ article.title }}
          </h2>
          <p>
            {{ article.excerpt }}
          </p>
          <span>
            Leggi di più →
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import mockNews from '~/mock/news.json'
import dayjs from 'dayjs'
import 'dayjs/locale/it'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('it')

const news = ref(mockNews)

const formatDate = (date: string): string => {
  return dayjs(date).format('DD MMMM YYYY')
}
</script>