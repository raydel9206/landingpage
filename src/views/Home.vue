<template>
  <div>
    <Carousel :images="carousels" :settings="settingsCarousel" />
  </div>
  <div
    class="flex px-64 pt-24 pb-20 bg-gradient-to-b from-amber-50 to-white flex-col justify-center items-center gap-14 inline-flex">
    <!-- Proband, Hay que crear el componente card -->
    <div class="text-lime-950 text-5xl font-bold">¿Por qué deberías usar Rapi2?</div>
    <div class="flex text-center text-yellow-700 text-2xl font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
      ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import Carousel from '../components/baseComponents/carousel.vue';
export default {
  components: { Carousel },
  setup() {
    // Load from server
    const carousels = [
      { text: "Slide 1", color: "#445e00" },
      { text: "Slide 2", color: '#006724' },
      { text: "Slide 3", color: '#b60000' },
      { text: "Slide 4", color: '#f4c300' },
      { text: "Slide 5", color: '#005c98' },
    ];
    const settingsCarousel = reactive({
      arrow: true,
      arrowHover: true,
      hasDrag: true,
      repeat: true,
    });
    const carouselModel = ref(1);
    return { carousels, settingsCarousel, carouselModel };
  }
};
</script>

<style>
.classCarousel {
  display: flex;
  padding-left: 0px;
  /* justify-content: space-between; */
  align-items: center;
  flex-shrink: 0;
}
</style>
