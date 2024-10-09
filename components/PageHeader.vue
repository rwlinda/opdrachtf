<template>
  <header class="z-10 h-[3.75rem] w-full shrink-0 bg-primary px-2 flex items-center justify-between sm:justify-start">
    
    <nav 
      class="container mx-auto flex items-center justify-between sm:justify-start"
    >
    <a href="/kopen">
      <img src="/assets/logo.svg" alt="Funda logo" class="h-8 mr-8" />
    </a>
    <ul class="text-white" :class="[menuVisible ? 'fixed w-full h-full top-[3.75rem] z-10 left-0 bg-primary sm:flex sm:h-auto sm:relative border-t border-white' : 'hidden sm:flex h-full']">
      <menu-item link="/kopen" @click="toggleMenu">Kopen</menu-item>
      <menu-item link="/huren" @click="toggleMenu">Huren</menu-item>
      <menu-item link="/verkopen" @click="toggleMenu">Verkopen</menu-item> 
    </ul>
    
    <div class="sm:hidden items-end">
      <button type="button" @click="toggleMenu">
        <span v-if="menuVisible">
          <span class="text-white">Sluit menu</span>
        </span>
        <span v-else>
          <span class="sr-only">Open menu</span>
          <nuxt-icon name="icons-bars" aria-hidden="true" class="text-4xl" />
        </span>
      </button>
    </div>
     </nav>
  </header>
</template>

<script setup>

let menuVisible = ref(false)

function toggleMenu() {
  menuVisible.value = !menuVisible.value
}

</script>
