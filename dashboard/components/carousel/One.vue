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
        <div id="carousel" class="flex gap-4 overflow-scroll items-center overflow-x-hidden overflow-y-hidden px-14">
            <img src='@/assets/images/square1.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square2.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square1.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square2.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square1.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square2.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square1.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square2.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square1.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square2.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square1.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square2.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square1.jpg' class="w-72 h-3/4" alt="">
            <img src='@/assets/images/square2.jpg' class="w-72 h-3/4" alt="">
        </div>
    </section>
</template>

<script>
export default {
    name: 'CarouselOne',
    data() {
        return {
            scrollPerClick: 300,
            scrollAmount: 0
        }
    },
    methods: {  
        scrollLeft(){
            let sliders = document.getElementById('carousel')
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
            let sliders = document.getElementById('carousel')
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

<style lang="">
    
</style>