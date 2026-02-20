<template>
  <section class="bg-black min-h-screen text-white pt-10 pb-12 px-4">
      <header>
        <nav class="text-zinc-500 text-xs uppercase tracking-widest mb-4">Home / News / {{ article?.badge }}</nav>
        <div class="flex items-center justify-center gap-3 text-zinc-500 text-xs mb-6">
          <div class="bg-yellow-300/20 py-1 px-4 rounded-xl w-fit">
            <span class="text-sm text-yellow-400 mb-2 text-center justify-center uppercase">
              {{ article?.category }}
            </span>
          </div>
          <span class="text-sm text-zinc-500 mb-2 text-center justify-center py-1 px-4">
              {{ formatDate(article?.date || '') }}
          </span>
          <span class="text-sm text-zinc-500 mb-2 text-center justify-center py-1 px-4">
              {{ article?.readTime }}
          </span>
        </div>
        <h1 class="text-yellow-100 text-4xl font-bold text-center uppercase max-w-2xl justify-center mx-auto py-4">{{ article?.title }}</h1>
        <p class="text-zinc-500 text-center max-w-2xl justify-center mx-auto py-4">{{ article?.excerpt }}</p>
      </header>

      <!-- Immagine hero -->
      <div class="max-w-5xl justify-center mx-auto pb-18">
        <img :src="article?.image" class="w-full h-full object-cover" alt="article?.title" />
      </div>

      <div class="max-w-2xl justify-center mx-auto">
        <!-- Contenuto principale articolo -->
        <article>
          <div v-if="article?.content" class="article-content space-y-6 text-zinc-300 leading-relaxed">
            <div v-for="(section, index) in parsedContent" :key="index">
              <!-- Paragrafo normale -->
              <p v-if="section.type === 'paragraph'" class="text-base leading-relaxed">
                {{ section.content }}
              </p>
              
              <!-- Heading H2 -->
              <h2 v-else-if="section.type === 'h2'" class="text-yellow-100 text-2xl md:text-3xl font-black italic uppercase mt-12 mb-6 text-white">
                {{ section.content }}
              </h2>
              
              <!-- Blockquote/Citazione -->
              <blockquote v-else-if="section.type === 'blockquote'" class="border-l-4 border-yellow-400 bg-zinc-900/50 pl-6 pr-6 py-5 rounded-r-xl my-8">
                <p class="text-yellow-100 font-semibold italic text-lg leading-relaxed">
                  {{ section.content }}
                </p>
              </blockquote>
            </div>
          </div>
        </article>
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 my-10">
          <span class="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
            Condividi articolo:
          </span>
          <div class="flex gap-4">
            <button v-for="i in 4" :key="i" class="w-10 h-10 rounded-full bg-zinc-800 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center">
              <UIcon :name="getSocialIcon(i)" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <footer>
        <section class="max-w-7xl justify-center mx-auto">
            <div class="flex justify-between items-end mb-10">
              <h3 class="text-2xl font-black italic uppercase tracking-tighter">
                Potrebbe interessarti anche
              </h3>
              <NuxtLink 
                to="/news" 
                class="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold text-xs uppercase italic tracking-tighter hover:bg-yellow-300 transition-colors"
              >
                Vedi tutte le news
              </NuxtLink>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <NuxtLink 
                v-for="related in relatedArticles" 
                :key="related.id" 
                :to="`/news/${related.id}`"
                class="group"
              >
                <div class="aspect-video overflow-hidden rounded-2xl mb-4">
                  <img :src="related.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span class="text-[10px] text-zinc-500 font-bold uppercase mb-2 block">
                  {{ related.date }}
                </span>
                <h4 class="font-bold text-lg leading-tight group-hover:text-yellow-400 transition-colors">
                  {{ related.title }}
                </h4>
              </NuxtLink>
            </div>
        </section>
      </footer>
  </section>
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
  return dayjs(date).format('DD MMMM YYYY')
}

// Parser semplice per il contenuto Markdown-like
const parsedContent = computed(() => {
  if (!article?.content) return []
  
  const lines = article.content.split('\n')
  const sections: Array<{ type: string; content: string }> = []
  
  let currentParagraph = ''
  
  for (const line of lines) {
    const trimmedLine = line.trim()
    
    // Heading H2
    if (trimmedLine.startsWith('## ')) {
      if (currentParagraph) {
        sections.push({ type: 'paragraph', content: currentParagraph.trim() })
        currentParagraph = ''
      }
      sections.push({ type: 'h2', content: trimmedLine.replace('## ', '') })
    }
    // Blockquote
    else if (trimmedLine.startsWith('> ')) {
      if (currentParagraph) {
        sections.push({ type: 'paragraph', content: currentParagraph.trim() })
        currentParagraph = ''
      }
      sections.push({ type: 'blockquote', content: trimmedLine.replace('> ', '').replace(/^[""]|[""]$/g, '') })
    }
    // Linea vuota - separa i paragrafi
    else if (trimmedLine === '') {
      if (currentParagraph) {
        sections.push({ type: 'paragraph', content: currentParagraph.trim() })
        currentParagraph = ''
      }
    }
    // Testo normale - accumula nel paragrafo corrente
    else {
      currentParagraph += (currentParagraph ? ' ' : '') + trimmedLine
    }
  }
  
  // Aggiungi l'ultimo paragrafo se presente
  if (currentParagraph) {
    sections.push({ type: 'paragraph', content: currentParagraph.trim() })
  }
  
  return sections
})

// Trova 3 articoli correlati (escludendo quello corrente)
const relatedArticles = computed(() => {
  return mockNews
    .filter(n => n.id !== article?.id)
    .slice(0, 3)
})

const getSocialIcon = (index: number) => {
  const icons = ['i-lucide-facebook', 'i-lucide-twitter', 'i-lucide-instagram', 'i-lucide-link'];
  return icons[index - 1];
};
</script>