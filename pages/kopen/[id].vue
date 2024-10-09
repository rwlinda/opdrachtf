<template>
  <main>    
    <!-- START response loading / error -->
    <loading v-if="loading" />
    <error v-else-if="error" :error="error" />
    <!-- END response loading / error -->

    <div v-else-if="homedetails" class="container mx-auto">
    <!--START hero images / slider-->     
      <galleryOverlay :images="filteredImages" :isOpen="isModalOpened" @modal-close="closeModal" />     
      <section-hero @click="openModal" :images="homedetails.Media" />
    <!--END hero images / slider-->  

    <!--START home detals -->   
    <section> 
      <h1 class="mt-4">{{ homedetails.Adres }}</h1>
      <div class="md:grid md:grid-cols-12 md:gap-8 mt-4">
        <div class="col-span-8">
          <h2>Omschrijving</h2>
          <div>
          {{ homedetails.VolledigeOmschrijving }}
          </div>
        </div>
      </div>
      <aside class="col-span-4">Aside</aside>    
    </section>
      <!--END home details -->

      <!--START google map -->
      <section class="mt-8 border-t border-primary">  
        <h2 class="py-2">Locatie</h2>
        <google-map :x="homedetails.WGS84_X" :y="homedetails.WGS84_Y" />
      </section>
      <!--END google map -->
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const { data:homedetails, loading, error } = await useFetch(`/api/homes/${route.params.id}`)

const title = homedetails.value.Adres + homedetails.value.Postcode + homedetails.value.Plaats

// This will be reactive when you change title/description above
useHead({
  title
})

const objectOfImages = homedetails.value.Media
const filteredImages = objectOfImages.filter(obj => {
  return obj.Categorie === 1
})

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
  document.body.style.overflow = "hidden"
};
const closeModal = () => {
  isModalOpened.value = false;
  document.body.style.overflow = "auto"
};


// TODO: return array with all large/medium/small images instead of using styling
// filter set of images based on category (category means small/medium/large etc).
// create srcset of images


</script>

