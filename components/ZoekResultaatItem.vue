<template>
  <li class="flex flex-col sm:flex-row">
      <img :src="afbeelding" class="rounded rounded-t object-cover sm:rounded-l rounded-r-none" />
      <div class="border p-4 rounded-b sm:rounded-r sm:rounded-b-none flex-grow">        
        <NuxtLink :to="'/kopen/' + id" class="text-blue-800 font-bold">{{ adres }}</NuxtLink>
        <p class="mb-4">{{ postcode }} {{ woonplaats }}</p>
        <p class="font-bold">
          <span class="mr-2">&euro;</span>{{ formattedPrice }} {{ abbreviation }}
        </p>        
        <p>
          <span v-if="gebruiksopp !== 0" class="flex items-center"><nuxt-icon name="icons:expand" class="mr-2" /> {{ gebruiksopp }}</span>
          <span v-if="aantalkamers !== 0" class="flex items-center"><nuxt-icon name="icons:bed" class="mr-2" />{{ aantalkamers }}</span>
        </p>
        <p class="flex justify-between items-center leading-10">
          <NuxtLink to="#" class="text-blue-800 font-bold truncate">{{ makelaar }}</NuxtLink>
          <span v-if="makelaarType">
            <nuxt-icon v-if="makelaarType === 'NVM'" name="icons:nvm" />
            <nuxt-icon v-if="makelaarType === 'VBO'" name="icons:nvm" />
            <nuxt-icon v-if="makelaarType === 'LMV'" name="icons:nvm" />
          </span>
        </p>
      </div>
    
  </li>
</template>

<script setup>

const props = defineProps({
  adres: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  afbeelding: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  },  
  woonplaats: {
    type: String,
    required: true
  },
  vraagprijs: {
    type: Number,
    required: true
  },  
  abbreviation: {
    type: String,
    required: true
  },
  gebruiksopp: {
    type: Number
  },
  perceelopp: {
    type: Number
  },
  aantalkamers: {
    type: Number
  },
  makelaar: {
    type: String
  },
  makelaarType: {
    type: String
  }
})
const formattedPrice = new Intl.NumberFormat('en-DE').format(props.vraagprijs)
</script>
