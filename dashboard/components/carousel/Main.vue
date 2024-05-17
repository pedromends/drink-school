<template lang="">
    <section id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div data-hs-carousel='{
            "loadingClasses": "opacity-0"
        }' class="relative">
            <div class="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full bg-gray-100">
                        <img src='@/assets/images/fb-beach.jpg' class="w-full" alt="...">
                    </div>
                </div>
                <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full bg-gray-200">
                        <img src='@/assets/images/fb-champ.jpg' class="w-full" alt="...">
                    </div>
                </div>
                <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full bg-gray-300">
                        <img src='@/assets/images/fb-fruit.jpg' class="w-full" alt="...">
                    </div>
                </div>
                <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full bg-gray-300">
                        <img src='@/assets/images/banner-cozumel.jpg' class="w-full" alt="...">
                    </div>
                </div>
                <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full bg-gray-300">
                        <img src='@/assets/images/banner-cozumel.jpg' class="w-full" alt="...">
                    </div>
                </div>
                </div>
            </div>

            <button type="button" class="cssbtn hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full transition duration-200 bg-mainblack hover:bg-skin">
                <span class="text-2xl " aria-hidden="true">
                    <svg class="w-7 h-4 dark:text-gray-800 rtl:rotate-180 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 6 10">
                        <path stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </span>
                <span class="sr-only">Previous</span>
            </button>
            <button type="button" class="cssbtn hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full transition duration-200 bg-mainblack hover:bg-skin">
                <span class="sr-only">Next</span>
                <span class="text-2xl" aria-hidden="true">
                    <svg class="w-7 h-4 dark:text-gray-800 rtl:rotate-180 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 6 10">
                        <path stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </span>
            </button>

            <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span class="hs-carousel-active:bg-mainblack hs-carousel-active:border-mainblack w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span class="hs-carousel-active:bg-mainblack hs-carousel-active:border-mainblack w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span class="hs-carousel-active:bg-mainblack hs-carousel-active:border-mainblack w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'MainCarousel',

}
</script>
<style lang="">
    
</style>