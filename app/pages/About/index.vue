<template>
  <MiniHero
    badge="Home / Chi Siamo"
    image="/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
    imageAlt="Zinella Volley"
    :features="myFeatures"
  >
    <template #title>
      PIÙ DI UNA SQUADRA,<br />
      UNA FAMIGLIA.
    </template>
    <template #description>
      Lo Zinella Volley nasce con l'obiettivo di promuovere la pallavolo
      come strumento di crescita educativa e sportiva. Dalle prime schiacciate nel minivolley
      fino ai campionati agonistici, seguiamo i nostri atleti passo dopo passo.<br />
      La nostra struttura offre 4 campi coperti, una sala pesi dedicata e uno staff tecnico di primo livello, pronto
      a valorizzareil talento di ogni singolo ragazzo e ragazza.
    </template>
    <template #stats>
      <div class="mt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl gap-6">
        <StatCard value="50+" label="ANNI DI STORIA" />
        <StatCard value="350" label="ATLETI ISCRITTI" />
        <StatCard value="22" label="CAMPIONATI VINTI" />
        <StatCard value="18" label="ALLENATORI" />
      </div>
    </template>
  </MiniHero>
  
  <section class="bg-gradient-to-br from-yellow-400 to-black py-16 text-white">
    <div class="max-w-7xl mx-auto">
      
      <header class="mb-12 max-w-2xl mx-auto"> 
        <span class="bg-zinc-700/50 text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 inline-block">
          Il nostro staff
        </span>
  
        <h2 class="text-4xl md:text-5xl font-extrabold mt-6 leading-tight text-white">
          TECNICI, PREPARATORI,<br />EDUCATORI.
        </h2>
  
        <p class="text-zinc-800 mt-4 max-w-xl"> Un team di professionisti che unisce esperienza di alto livello e attenzione alla crescita dei più giovani.</p>
      </header>
  </div>
  <div class="w-full px-2">
    <StaffCarousel :staffMembers="staffMembers" @select="handleSelect"/>
  </div>
  <StaffModal :staffMember="selectedStaff" :isOpen="isOpen" @close="closeModal"/>
  </section>
</template>

<script setup>
import StaffMembersMock from '~/mock/staff.json'
import { ref, onMounted } from 'vue'
import MiniHero from '~/components/MiniHero.vue'
import StatCard from '~/components/StatCard.vue'
import StaffCarousel from '~/components/StaffCarousel.vue'
import StaffModal from '~/components/StaffModal.vue'

const selectedStaff = ref(null)
const isOpen = ref(false)

const handleSelect = (staffMember) => {
  selectedStaff.value = staffMember
  isOpen.value = true
}

const closeModal = () => {
  selectedStaff.value = null
  isOpen.value = false
}
const myFeatures = [
  { 
    icon: 'i-lucide-trophy', 
    title: 'Eccellenza', 
    text: 'Staff tecnico certificato FIPAV.' 
  },
  { 
    icon: 'i-lucide-users', 
    title: 'Community', 
    text: 'Eventi e tornei tutto l\'anno.' 
  }
]

const staffMembers = ref([])

onMounted(() => {
  setTimeout(() => {
    staffMembers.value = StaffMembersMock
  }, 1500)
})
</script>