<template>
    <div>
      <div v-if="article">
        <NuxtLink to="/news">← Tutte le news</NuxtLink>
        <header class="py-8">
          <p>{{ article.date }}</p>
          <h1>{{ article.title }}</h1>
        </header>
  
        <article>
          <p>{{ article.excerpt }}</p>
          <p>{{ article.content }}</p>
        </article>
      </div>
      
      <div v-else>
        <h2>News non trovata</h2>
        <NuxtLink to="/news">Torna all'indice</NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import mockNews from '~/mock/news.json';
  
  const route = useRoute();
  const article = mockNews.find(n => n.id.toString() === route.params.id);
  </script>