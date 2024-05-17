<template>
    <div class="flex-col">
      <Navbar />
      <main class="pl-64 pt-14 px-2">
        <slot />
      </main>
    </div>
  </template>
<script>
import Navbar from './navbar.vue';
export default {
  name: "",
  components: {
    Navbar,
  },
};
</script>