<template>
  <section class="bg-black min-h-screen text-white pt-24 pb-12">
    <div class="max-w-7xl mx-auto px-6">
      <header class="mb-16">
        <nav class="text-zinc-500 text-xs uppercase tracking-widest mb-4">Home / Contatti</nav>
        <h1 class="text-6xl font-black italic tracking-tighter mb-6">CONTATTI</h1>
        <p class="text-zinc-400 max-w-xl text-lg">
          Scrivici per informazioni su iscrizioni, corsi, squadre agonistiche o collaborazioni con Zinella Volley.
        </p>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <section class="lg:col-span-8 bg-zinc-900 p-10 rounded-xl border border-white/5">
          <ContactForm />
        </section>

        <aside class="lg:col-span-4 space-y-8">
          <ContactSidebar />
        </aside>
      </div>

      <ContactFooter class="mt-12" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue'
import ContactFooter from '~/components/ContactFooter.vue'
</script>