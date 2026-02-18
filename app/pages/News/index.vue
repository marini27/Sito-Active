<template>
  <div>
    <h1>Ultime News</h1>
    
    <ul>
      <li v-for="article in news" :key="article.id" class="py-8">
        <NuxtLink :to="`/news/${article.id}`">
          <span>{{ article.date }}</span>
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

<script setup>
import mockNews from '~/mock/news.json';
const news = ref(mockNews);
</script>