<template>
    <div class="space-y-8">
      <SegretaryInfoContact segretaryTitle="Segreteria" title="Parliamo di volley.<br />Dal vivo, al telefono, online." email="segreteria@zinellavolley.it" phone="051 1234567" openingDays="Lunedì - Venerdì" openingHours="16:30 - 19:30" address="Palestra Zinella - Via dello Sport 12,<br />40100 Bologna (BO)" training="Allenamenti giovanili" team="Prima squadra" social="Canali Social" socialDescription="Seguici per risultati, foto e aggiornamenti in tempo reale." />
      <div class="relative group rounded-xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/5">
        <div class="absolute inset-0 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.364402636605!2d11.3703314!3d44.4872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e2b724f8d55a1%3A0x6734c26a0c56f2f9!2sZinella%20Volley%20Bologna!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              class="w-full h-full border-0 grayscale-[0.3] contrast-[1.1] invert-[0.9] hue-rotate-[180deg]"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
        </div>
      </div>
    </div>
</template>

<script setup>
import SegretaryInfoContact from '~/components/SegretaryInfoContact.vue';
</script>