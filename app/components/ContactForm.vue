<template>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <h2 class="text-2xl font-bold text-yellow-400 mb-8">Inviaci un messaggio</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactFormItem label="Nome e Cognome" placeholder="Inserisci il tuo nome" />
        <ContactFormItem label="Email" placeholder="esempio@email.com" />
        <ContactFormItem label="Telefono" placeholder="Numero di telefono" />
        <ContactFormItem label="Motivo del contatto" placeholder="Iscrizioni, provini, info corsi, altro..." />
      </div>
      <div class="mb-0">
        <label class="text-sm font-semibold text-zinc-400">Messaggio</label>
        <textarea placeholder="Raccontaci come possiamo aiutarti" class="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-6 focus:border-yellow-400 outline-none transition" rows="4"></textarea>
      </div>
      <span class="text-sm text-zinc-400">Indicaci eventualmente l'anno di nascita dell'atleta e il livello di esperienza</span>
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-white/5">
        <p class="text-[10px] text-zinc-500 max-w-xs uppercase tracking-tight">
          <span>Inviando il messaggio accetti il trattamento dei dati secondo la nostra informativa privacy.</span>
          <span class="text-yellow-400">● Dati protetti e mai ceduti a terzi</span>
        </p>
        <button class="bg-yellow-400 text-black font-black px-8 py-4 rounded-xl hover:bg-white transition-all transform hover:scale-105 uppercase italic tracking-tighter">
          Invia Richiesta
        </button>
      </div>
    </form>
  </template>

<script setup lang="ts">
import ContactFormItem from '~/components/ContactFormItem.vue'

const handleSubmit = () => {
  console.log('Form submitted')
}
</script>