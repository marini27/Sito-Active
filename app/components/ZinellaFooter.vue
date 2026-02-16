<template>
  <footer class="bg-black text-yellow-400">
    <div class="max-w-7xl mx-auto px-6 py-16">
      
      <!-- Grid colonne -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <!-- Colonne dinamiche -->
        <div v-for="section in sections" :key="section.title">
          <h3 class="text-lg font-semibold mb-4">
            {{ section.title }}
          </h3>

          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="text-gray-400"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
            <li v-if="section.social" :key="section.social[0]?.icon">
              <NuxtLink v-for="social in section.social" :key="social.icon" :to="social.link" target="_blank">
                <UIcon :name="social.icon" class="text-gray-400 transition px-2 mx-2 my-2 w-4 h-4" />
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom -->
      <div class=" border-gray-800 mt-16 pt-6 text-center text-gray-400">
        © 2024 Zinella Volley Bologna ASD - P.IVA 0123456789
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const sections = [
  {
    title: "ZINELLA VOLLEY",
    links: [
      { label: "La società storica di Bologna. Passione, dedizione e sportività dal 1970. Alleniamo i campioni di domani.", to: "/" },
    ],
    social: [
      { icon: "i-simple-icons-facebook", link: "https://facebook.com" },
      { icon: "i-simple-icons-instagram", link: "https://instagram.com" },
      { icon: "i-simple-icons-youtube", link: "https://youtube.com" }
    ]
  },
  {
    title: "SOCIETÀ",
    links: [
      { label: "Chi Siamo", to: "/chi-siamo" },
      { label: "Storia", to: "/storia" },
      { label: "Organigramma", to: "/organigramma" },
      { label: "Partner & Sponsor", to: "/partner" }
    ]
  },
  {
    title: "ATTIVITÀ",
    links: [
      { label: "Serie C Maschile", to: "/serie-c" },
      { label: "Settore Giovanile", to: "/giovanile" },
      { label: "Minivolley S3", to: "/minivolley" },
      { label: "Camp Estivi", to: "/camp" }
    ]
  },
  {
    title: "CONTATTI",
    links: [
      { label: "Segreteria", to: "/contatti" },
      { label: "Lavora con noi", to: "/lavora" },
      { label: "Dove Siamo", to: "/dove-siamo" },
      { label: "Area Riservata", to: "/area-riservata" }
    ]
  }
]
</script>

