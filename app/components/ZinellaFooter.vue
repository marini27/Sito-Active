<template>
  <footer class="text-center justify-center relative bg-black text-yellow-400">
    <div class="z-[3] relative container flex flex-col py-10 items-center">
        <div class="flex flex-col items-center">
          <img src="/logo-zinella.png" alt="Zinella Volley Logo" class="w-15 h-15 mx-auto">
          <h3 class="text-lg font-semibold my-4">
            {{ section.title }}
          </h3>

          <ul class="space-y-3">
            <li v-if="section.social" :key="section.social[0]?.icon">
              <NuxtLink v-for="social in section.social" :key="social.icon" :to="social.link" target="_blank">
                <UIcon :name="social.icon" class="text-zinc-400 transition w-4 h-4 mx-2"/>
              </NuxtLink>
            </li>
            <li v-for="link in section.links" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="text-zinc-400"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

      <!-- Bottom -->
      <div class=" border-zinc-800 text-center text-zinc-400 mt-4 mx-auto">
        © 2024 Zinella Volley Bologna ASD - P.IVA 0123456789
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const section = 
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
  }
</script>

