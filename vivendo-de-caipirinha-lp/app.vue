<template>
  <NuxtPage></NuxtPage>
</template>

<script setup>
useServerSeoMeta({
  title: "Escola de Bar - Vivendo de caipirinha",
  ogTitle: "Escola de Bar - Vivendo de caipirinha",
  description:
    "Somos apaixonados por coquetéis e por compartilhar nosso conhecimento com vocês! Descubra mais sobre a história da Escola de Bar.",
  ogDescription:
    "Somos apaixonados por coquetéis e por compartilhar nosso conhecimento com vocês! Descubra mais sobre a história da Escola de Bar.",
  ogImage: "assets/images/mainbg.webp",
  twitterCard: "summary_large_image",
});

import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
