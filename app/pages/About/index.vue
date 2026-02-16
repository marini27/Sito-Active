<template>
  <FeatureShowcase
    badge="Chi Siamo"
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
  </FeatureShowcase>
  
  <section class="bg-gradient-to-br from-yellow-400 to-black py-16 px-6 text-white">
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

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <StaffCard 
          v-for="person in team" 
          :key="person.id"
          :name="person.name"
          :role="person.role"
          :bio="person.bio"
          :image="person.image"
        />
      </div>
  </div>
  </section>
</template>

<script setup>
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

const team = [
  {
    id: 1,
    name: 'Elena Bianchi',
    role: 'Allenatrice U16',
    image: '/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg', 
    bio: 'Allenatrice giovane e preparata, lavora sulla tecnica individuale e sulla costruzione del gruppo nei campionati giovanili d\'eccellenza.'
  },
  {
    id: 2,
    name: 'Davide Neri',
    role: 'Preparatore Atletico',
    image: '/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg',
    bio: 'Laureato in Scienze Motorie, struttura i programmi di forza, prevenzione infortuni e riatletizzazione per tutte le prime squadre.'
  },
  {
    id: 3,
    name: 'Sara Gialli',
    role: 'Responsabile Minivolley',
    image: '/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg',
    bio: 'Punto di riferimento per i più piccoli: propone percorsi motori ludici dove il gioco è lo strumento principale di apprendimento.'
  }
]
</script>