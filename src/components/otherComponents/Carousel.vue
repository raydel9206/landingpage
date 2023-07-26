<template>
    <div id="carouselExampleCaptions" class="relative" data-te-carousel-init data-te-carousel-slide>
        <!--Carousel indicators-->
        <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0 items-center gap-2"
            data-te-carousel-indicators>

            <button v-for="(carousel, i) in carousels" :key="i" type="button" data-te-target="#carouselExampleCaptions"
                :data-te-slide-to="i" data-te-carousel-active="0" class="mx-[3px] box-content w-7 h-2 bg-amber-100 flex-initial cursor-pointer border-0 border-y-[10px]
        border-transparent bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity 
        duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-current="true"
                aria-label="Slide 1"></button>
        </div>

        <!--Carousel items-->
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <!--First item-->
            <div class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active="0" data-te-carousel-item style="backface-visibility: hidden">
                <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" class="block w-full" alt="..." />
                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">First slide label</h5>
                    <p>
                        Some representative placeholder content for the first slide.
                    </p>
                </div>
            </div>
            <!--Second item-->
            <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item style="backface-visibility: hidden">
                <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" class="block w-full" alt="..." />
                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">Second slide label</h5>
                    <p>
                        Some representative placeholder content for the second slide.
                    </p>
                </div>
            </div>
            <!--Third item-->
            <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item style="backface-visibility: hidden">
                <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg" class="block w-full" alt="..." />
                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">Third slide label</h5>
                    <p>
                        Some representative placeholder content for the third slide.
                    </p>
                </div>
            </div>
        </div>

        <!--Carousel controls - prev item-->
        <button
            class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
            <span class="inline-block h-8 w-8">
                <!-- <ArrowNext/> -->
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </button>
        <!--Carousel controls - next item-->
        <button
            class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
            <span class="inline-block h-8 w-8">
                <ArrowNext />
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
        </button>
    </div>
</template>
<script setup>
import { Carousel, initTE } from "tw-elements";
import { onMounted } from 'vue'
import ArrowNext from '../../icons/ArrowNext.vue';

const carousels = [
    { text: "Slide 1", color: "#F5D437", img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" },
    { text: "Slide 2", color: '#006724', img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" },
    { text: "Slide 3", color: '#b60000', img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" },
    { text: "Slide 4", color: '#f4c300', img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" },
    { text: "Slide 5", color: '#005c98', img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" },
];

onMounted(() => {
    initTE({ Carousel });
});
</script>