<template>
    <UApp>
      <ZinellaHeader />
      <div class="main-content">
        <NuxtPage />
      </div>
      <ZinellaFooter />
    </UApp>
</template>

<script setup lang="ts">
import ZinellaHeader from '~/components/ZinellaHeader.vue'
import ZinellaFooter from '~/components/ZinellaFooter.vue'
</script>
