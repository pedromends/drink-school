<template lang="">
    <section class="relative flex items-center">
        <div class="absolute flex w-full justify-between h-full">
            <button class="bg-mainblack hover:bg-skin px-2 focus:ring-2 focus:ring-white transition duration-200 cssbtn" @click="scrollLeft()">
                <svg class="w-7 h-4 dark:text-gray-800 rtl:rotate-180 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 6 10">
                    <path stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
            </button>
            <button class="bg-mainblack hover:bg-skin px-2 focus:ring-2 focus:ring-white transition duration-200 cssbtn" @click="scrollRight()" >
                <svg class="w-7 h-4 dark:text-gray-800 rtl:rotate-180 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 6 10">
                    <path stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </button>
        </div>
        <div id="carousel-2" class="flex gap-4 overflow-scroll overflow-x-hidden overflow-y-hidden">
            <img src='@/assets/images/rec1.jpg' class="w-52 h-96" alt="">
            <img src='@/assets/images/rec2.jpg' class="w-52 h-96" alt="">
            <img src='@/assets/images/rec3.jpg' class="w-52 h-96" alt="">
            <img src='@/assets/images/rec4.jpg' class="w-52 h-96" alt="">
            <img src='@/assets/images/rec5.jpg' class="w-52 h-96" alt="">
            <img src='@/assets/images/rec6.jpg' class="w-52 h-96" alt="">
            <img src='@/assets/images/rec1.jpg' class="w-52 h-96" alt="">
            <img src='@/assets/images/rec2.jpg' class="w-52 h-96" alt="">
            <img src='@/assets/images/rec3.jpg' class="w-52 h-96" alt="">
            <img src='@/assets/images/rec4.jpg' class="w-52 h-96" alt="">
            <img src='@/assets/images/rec5.jpg' class="w-52 h-96" alt="">
            <img src='@/assets/images/rec6.jpg' class="w-52 h-96" alt="">
        </div>
    </section>
</template>

<style>
.cssbtn:hover path {
    fill: black;
}
</style>
<script>

export default {
    name: 'CarouselTwo',
    data() {
        return {
            scrollPerClick: 300,
            scrollAmount: 0
        }
    },
    methods: {  
        scrollLeft(){
            let sliders = document.getElementById('carousel-2')
            sliders.scrollTo({
                top: 0,
                left: (this.scrollAmount -= this.scrollPerClick),
                behavior: 'smooth',
            })

            if(this.scrollAmount < 0) {
                this.scrollAmount = 0
            }
        },
        scrollRight(){
            let sliders = document.getElementById('carousel-2')
            if(this.scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
                sliders.scrollTo({
                    top:0,
                    left: (this.scrollAmount += this.scrollPerClick),
                    behavior: 'smooth',
                })
            }
        }
    }
}
</script>

<style scoped>
    .rect:hover p {
        position: absolute;
        display: inline;
        color:white;
    }
</style>