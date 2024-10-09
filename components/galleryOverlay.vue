<template>
  <div v-if="isOpen" class="fixed h-full w-full z-40 bg-white top-0 left-0 sm:p-8">
    <galleryElement :images="images" />
    <button 
      @click="emit('modal-close')" 
      class="absolute bg-primary text-white font-bold top-8 right-16 px-4 py-2 rounded-xl hover:cursor-pointer z-50
    ">
    Sluiten
  </button>
  </div>
</template>

<script setup>
const props = defineProps({
  images: { 
    type: Array, 
    required: true 
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(["modal-close"]);


</script>
