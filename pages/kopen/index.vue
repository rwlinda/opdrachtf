<template>
  <section class="container mx-auto px-2 md:px-0 md:grid md:grid-cols-12 md:gap-8">
    <!-- START filters -->
    <aside class="md:col-span-4 md:my-8 hidden md:block">
      <h2>Filters</h2>
      <div class="bg-gray-100 w-full h-11 my-4 rounded"></div>
      <div class="bg-gray-100 w-full h-11 my-4 rounded"></div>
      <div class="bg-gray-100 w-full h-11 my-4 rounded"></div>
    </aside>
    <!-- END filters -->

    <!-- START resultaten -->
    <div class="md:col-span-8">
      <h1 class="py-8">Zoekresultaat</h1>
      <p v-if="homes.Objects.length > 0" class="font-bold mb-4">{{ homes.Objects.length }} koopwoningen gevonden</p>

      <!-- START response error/loading-->
      <loading v-if="loading" />
      <error v-else-if="error" :error="error" />
      <div v-else-if="homes.Objects.length === 0">
        Geen koopwoningen gevonden die voldoen aan uw zoekcriteria. 
      </div>
      <!-- END response error/loading-->

      <ul v-else-if="homes.Objects.length > 0" class="flex flex-col gap-4">
        <zoek-resultaat-item 
          v-for="home in homes.Objects" 
          :key="home.GlobalId" 
          :adres="home.Adres"
          :id="home.GroupByObjectType"
          :afbeelding="home.FotoMedium"
          :postcode="home.Postcode"
          :woonplaats="home.Woonplaats"
          :vraagprijs="home.Prijs.Koopprijs"
          :abbreviation="home.Prijs.KoopAbbreviation"
          :gebruiksopp="home.Oppervlakte"
          :perceelopp="home.Perceeloppervlakte"
          :aantalkamers="home.AantalKamers"
          :makelaar="home.MakelaarNaam"
          :makelaar-type="home.BronCode"
        />
      </ul>
    </div>
     <!-- End resultaten -->
  </section>
</template>

<script setup>
const { data:homes, loading, error } = await useFetch('/api/homes')

// TODO:     
//     - toevoegen unit test - https://nuxt.com/docs/getting-started/testing
//     - custom marker google maps
//     - scrset in imagegallery/swiper
//     - pagination zoekresultaten
//     - verTypescripten
    
</script>