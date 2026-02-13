<template>
  <section class="bg-black text-white py-16 px-6 md:px-20">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- colonna testo -->
      <div>
        <span class="text-yellow-400 font-semibold text-sm">
          Chi Siamo
        </span>

        <h2 class="mt-4 text-3xl md:text-5xl font-bold leading-tight">
          PIÙ DI UNA SQUADRA,<br />
          UNA FAMIGLIA.
        </h2>

        <p class="mt-6 text-gray-300 leading-relaxed">
          Lo Zinella Volley nasce con l'obiettivo di promuovere la pallavolo
          come strumento di crescita educativa e sportiva. Dalle prime schiacciate nel minivolley
          fino ai campionati agonistici, seguiamo i nostri atleti passo dopo passo.
        </p>

        <p class="mt-4 text-gray-300 leading-relaxed">
          La nostra struttura offre 4 campi coperti, una sala pesi dedicata e uno staff tecnico di primo livello, pronto
          a valorizzareil talento di ogni singolo ragazzo e ragazza.
        </p>

        <!-- feature -->
        <div class="mt-8 flex flex-col sm:flex-row gap-8">
          <div class="flex items-start gap-4">
            <UIcon name="i-lucide-trophy" class="text-yellow-400 w-8 h-8 mt-1"/>
            <div>
              <h4 class="font-semibold">
                Eccellenza
              </h4>
              <p class="text-gray-400 text-sm">
                Staff tecnico certificato FIPAV.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-users" class="text-yellow-400 w-8 h-8 mt-1" />
            <div>
              <h4 class="font-semibold">
                Community
              </h4>
              <p class="text-gray-400 text-sm">
                Eventi e tornei tutto l'anno.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- colonna immagine da sostituire con immagine corretta-->
      <div>
        <img src="/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg" alt="Zinella Volley" class="rounded-xl object-cover w-full h-full" />
      </div>
    </div>

      <!-- BLOCCO STATISTICHE -->
      <div class="mt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl gap-6">

        <div class="bg-zinc-900 rounded-xl py-16 px-10 text-center">
          <h3 class="text-yellow-400 text-5xl font-bold">50+</h3>
          <p class="mt-2 text-gray-400 text-sm tracking-wide">
            ANNI DI STORIA
          </p>
        </div>

        <div class="bg-zinc-900 py-16 px-10 rounded-xl text-center">
          <h3 class="text-yellow-400 text-5xl font-bold">350</h3>
          <p class="mt-2 text-gray-400 text-sm tracking-wide">
            ATLETI ISCRITTI
          </p>
        </div>
 
        <div class="bg-zinc-900 py-16 px-10 rounded-xl text-center">
          <h3 class="text-yellow-400 text-5xl font-bold">22</h3>
          <p class="mt-2 text-gray-400 text-sm tracking-wide">
            CAMPIONATI VINTI
          </p>
        </div>

        <div class="bg-zinc-900 py-16 px-10 rounded-xl text-center">
          <h3 class="text-yellow-400 text-5xl font-bold">18</h3>
          <p class="mt-2 text-gray-400 text-sm tracking-wide">
            ALLENATORI
          </p>
        </div>

      </div>
  </section>
</template>