<template lang="">
  <section>
    <div class="flex items-center">
      <div
        id="carousel"
        class="flex gap-5 overflow-scroll overflow-x-hidden overflow-y-hidden px-12 py-2"
      >
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
        <CardClients />
      </div>
    </div>
    <div class="flex justify-center w-full gap-2 h-full mt-10">
      <button
        class="bg-maingreen/70 hover:bg-maingreen border-2 border-mainyellow rounded-xl p-3 transition duration-200 z-30 hover:bg-gray-400"
        @click="scrollLeft()"
      >
        <img src="/assets/icons/left-arrow.webp" alt="" />
      </button>
      <button
        class="bg-maingreen/70 hover:bg-maingreen border-2 border-mainyellow rounded-xl p-3 transition duration-200 z-30 hover:bg-gray-400"
        @click="scrollRight()"
      >
        <img src="/assets/icons/right-arrow.webp" alt="" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CarouselOne",
  data() {
    return {
      scrollPerClick: 450,
      scrollAmount: 0,
    };
  },
  methods: {
    scrollLeft() {
      let sliders = document.getElementById("carousel");
      sliders.scrollTo({
        top: 0,
        left: (this.scrollAmount -= this.scrollPerClick),
        behavior: "smooth",
      });

      if (this.scrollAmount < 0) {
        this.scrollAmount = 0;
      }
    },
    scrollRight() {
      let sliders = document.getElementById("carousel");
      if (this.scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
          top: 0,
          left: (this.scrollAmount += this.scrollPerClick),
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style lang=""></style>
