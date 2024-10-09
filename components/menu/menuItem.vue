<template>  
  <li>
    <NuxtLink  
      :to="link" 
      class="flex items-center h-full p-4 flex-0 hover:bg-primary-hover hover:border-b-primary-hover bg-primary bg-transparent transition duration-300 box-border border-b-4 font-bold border-b-primary"
      active-class="border-b-primary-active bg-transparent"
      aria-haspopup="menu"
      aria-expanded="false">
      <slot />
    </NuxtLink>  
  </li>    
</template>

<script setup>
defineProps ({
  link: {
    type: String,
    required: true
  }
})
</script>