<template>
  <div>
    <!--Documented on -
    Nuxt options: https://scripts.nuxt.com/scripts/content/google-maps
    Google maps: https://developers.google.com/maps/documentation/embed/embedding-map
    -->
      <iframe
        width="100%"
        height="550"
        style="border:0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        :src=location />
    <!-- restrict API key: https://developers.google.com/maps/documentation/embed/get-api-key-->
  </div>
</template>

<script setup>
const props = defineProps({
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  }
})
const location = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD4w4Gqf4E5o0fYMobX477ucq70r74iGlA&q=${props.y},${props.x}&zoom=17"`
</script>