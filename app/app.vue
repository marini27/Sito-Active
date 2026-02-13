<template>
    <UApp>
      <Header />
      <div class="main-content">
        <NuxtPage />
      </div>
      <Footer />
    </UApp>
</template>

<script setup lang="ts">
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
</script>
