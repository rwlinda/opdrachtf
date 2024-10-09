<template>
  <section class="container mx-auto">
    <p>Helaas, er is iets mis gegaan</p>
    <p class="text-sm">{{ error }}</p>
  </section>
</template>

<script setup>
defineProps ({
  error: {
    type: String,
    required: true
  }
})
</script>