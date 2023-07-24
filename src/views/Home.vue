<template>
  <!-- Section carousel -->
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
      <div
        class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
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
      <div
        class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
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
      <div
        class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
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
  <!-- End Section carousel -->

  <!-- Section Why use Rapid2 -->
  <div class="w-full div-rapid2" style="background: linear-gradient(180deg, #FDFAEA 0%, #FFF 100%);">
    <div class="text-lime-950 text-5xl font-bold">¿Por qué deberías usar Rapi2?</div>
    <div class="flex px-64 text-center text-yellow-700 text-2xl font-medium">Lorem ipsum dolor sit amet, consectetur
      adipiscing
      elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
      ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
    </div>
    <div class="div_section_card grid justify-items-center">
      <div class="image_promotions" style="width: 50%;">
        <img src="../assets/MOVIL_LANDING_ISOMETRIC.webp" :alt="promotionsImages.alt" />
      </div>
      <div class="grid_promotions" style="width: 50%;">
        <div class="div-uses ">
          <div class="w-6 h-6 bg-green-500 rounded-2xl flex-col justify-center items-center gap-2 inline-flex">
            <Check />
          </div>
          <div class="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
            <div class="self-stretch text-neutral-700 text-xl font-semibold uppercase">Gran variedad de productos y
              negocios</div>
            <div class="self-stretch text-stone-500 text-base font-normal">Podrás disfrutar de la comida de tus negocios
              favoritos desde su casa</div>
          </div>
        </div>
        <div class="div-uses">
          <div class="w-6 h-6 bg-green-500 rounded-2xl flex-col justify-center items-center gap-2 inline-flex">
            <Check />
          </div>
          <div class="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
            <div class="text-neutral-700 text-xl font-semibold uppercase">Seguridad en sus pagos</div>
            <div class="self-stretch text-stone-500 text-base font-normal">Con tarjetas de crédito o débito</div>
            <div class="bg-white justify-start items-center gap-6 inline-flex">
              <div class="relative">
                <Tropipay />
              </div>
              <div class="relative">
                <Visa />
              </div>
              <div class="relative">
                <Mastercard />
              </div>
            </div>
          </div>
        </div>
        <div class="div-uses">
          <div class="w-6 h-6 bg-green-500 rounded-2xl flex-col justify-center items-center gap-2 inline-flex">
            <Check />
          </div>
          <div class="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
            <div class="title-uses"> Entregas rápidas y con calidad</div>
            <div class="self-stretch text-stone-500 text-base font-normal">Ordene cualquier producto y recibirá el pedido
              en minutos</div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- End section Why use Rapid2 -->

  <!-- Section Prueba nuestra aplicación -->
  <div class="grid justify-items-center" style="background: var(--base-00, #FFF);">
    <div style="display: inline-flex; align-items: center; gap: 127px;">
      <div>
        <img class="w-full" src="../assets/VISTAS_LANDING_ISOMETRIC.webp" />
      </div>
      <div style="display: flex; flex-direction: column; align-items: flex-start;gap: 24px;">
        <div class="text-lime-950 text-6xl font-bold">Prueba nuestra aplicación</div>
        <div
          style="width: 420px; color: var(--primario-80, #8D7607); font-size: 24px; font-style: normal; font-weight: 500; line-height: normal;">
          Desde su casa ordene sus platillos favoritos de los mejores
          restaurantes</div>
        <div class="justify-start items-start gap-6 inline-flex">
          <div class="px-4 py-2 bg-neutral-700 rounded-lg shadow justify-center items-center gap-2.5 flex">
            <div class="w-9 h-9 relative">
              <Ios />
            </div>
            <div class="flex-col justify-center items-start inline-flex">
              <div class="text-white text-base font-normal">Descárgala ahora</div>
              <div class="text-primary text-4xl font-bold">App Store</div>
            </div>
          </div>
          <div class="px-4 py-2 bg-neutral-700 rounded-lg shadow justify-center items-center gap-2.5 flex">
            <div class="w-8 h-8 relative">
              <Playstore />
            </div>
            <div class="flex-col justify-center items-start inline-flex">
              <div class="text-white text-base font-normal">Descárgala ahora</div>
              <div class="text-primary text-4xl font-bold">Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End section Prueba nuestra aplicación -->

  <!-- Section Nuestros Negocios -->
  <div class="" style="display: flex; padding: 100px 250px; flex-direction: column; align-items: center; gap: 60px;">
    <div class="self-stretch flex-col justify-start items-center gap-2 flex">
      <div class="self-stretch text-center text-neutral-700 text-5xl font-bold">Nuestros negocios</div>
      <div class="self-stretch text-center text-zinc-500 text-2xl font-medium">Los mejores negocios con comida a domicilio
        los encontrarás en Rapi2</div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 77px;">
      <div v-for="negocio in negocios">
        <img class="w-24 h-24" :src="negocio.src" />
      </div>

    </div>
  </div>
  <!-- End section Nuestros Negocios -->


  <!-- Section Start Now -->
  <div class="w-full"
    style="background: var(--fondoweb, #F8F8F8); display: flex; padding: 100px 0px; flex-direction: column; align-items: center; gap: 54px;">
    <div class="w-3/4 flex flex-col items-center" style="gap: 8px;">
      <div class="self-stretch text-center text-neutral-700 text-5xl font-bold">
        Comienza ahora con Rapi2
      </div>
      <div class=" text-center text-zinc-500 text-2xl font-medium">Acompáñanos ahora y regístrate </div>
    </div>
    <div class="px-48 justify-center items-center gap-20 inline-flex">
      <div class="w-2/6 px-8 py-6 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2 inline-flex">
        <div class="flex-col justify-start items-center gap-4 flex">
          <div class="flex-col justify-start items-start flex">
            <div class="w-16 h-16 justify-center items-center gap-2 inline-flex bg-primary rounded-full">
              <Shop />
            </div>

          </div>
          <div class="text-center text-neutral-600 text-2xl font-semibold">Une tu negocio a Rapi2</div>
          <div class="text-center text-neutral-500 text-base font-normal">Gestione su negocio y aumente sus ventas
          </div>
          <div class="h-12 px-8 py-2.5 bg-neutral-700 rounded-3xl justify-center items-center gap-2.5 inline-flex">
            <div class="text-primary text-sm font-semibold">¡Registrate ya!</div>
          </div>
        </div>
      </div>
      <div class="w-2/6 px-8 py-6 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2 inline-flex">
        <div class="flex-col justify-start items-center gap-4 flex">
          <div class="flex-col justify-start items-start flex">
            <div class="w-16 h-16 justify-center rounded-full bg-primary items-center gap-2 inline-flex">
              <Moto />
            </div>

          </div>
          <div class="text-center text-neutral-600 text-2xl font-semibold">Conviértete en repartidor</div>
          <div class="text-center text-neutral-500 text-base font-normal">Realice entregas ganando dinero y siendo su
            propio jefe</div>
          <div class="h-12 px-8 py-2.5 bg-neutral-700 rounded-3xl justify-center items-center gap-2.5 inline-flex">
            <div class="text-primary text-sm font-semibold">¡Registrate ya!</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End Section Start Now -->
</template>

<script>
import "tw-elements";
import { onMounted } from "vue";
import { Carousel, initTE } from "tw-elements";
import ArrowNext from '../icons/ArrowNext.vue';
import Check from '../icons/Check.vue';
import Tropipay from '../icons/Tropipay.vue';
import Visa from '../icons/Visa.vue';
import Mastercard from '../icons/Mastercard.vue';
import Ios from '../icons/Ios.vue';
import Playstore from '../icons/Playstore.vue';
import Moto from '../icons/Moto.vue';
import Shop from '../icons/Shop.vue';
export default {
  components: { ArrowNext, Check, Tropipay, Visa, Mastercard, Playstore, Ios, Moto, Shop },
  setup() {
    onMounted(() => {
      initTE({ Carousel });
    });

    // Load from server
    const carousels = [
      { text: "Slide 1", color: "#F5D437", img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" },
      { text: "Slide 2", color: '#006724', img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" },
      { text: "Slide 3", color: '#b60000', img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" },
      { text: "Slide 4", color: '#f4c300', img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" },
      { text: "Slide 5", color: '#005c98', img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" },
    ];
    const promotions = [
      { title: "Gran variedad de productos y negocios", subtitle: "Podrás disfrutar de la comida de tus negocios favoritos desde su casa" },
      { title: "Seguridad en sus pagos", subtitle: 'Con tarjetas de crédito o débito' },
      { title: "Entregas rápidas y con calidad", subtitle: 'Ordene cualquier producto y recibirá el pedido en minutos' },
    ];

    const promotionsImages =
      { src: "../assets/MOVIL_LANDING_ISOMETRIC.webp", alt: "image_alt" };

    const negocios = [
      { src: "../src/assets/popeyes.png", alt: "Lousiana Kitchen" },
      { src: "../src/assets/dominos.png", alt: "Domino's Pizza" },
      { src: "../src/assets/togos.png", alt: "True to the Sandwich" },
      { src: "../src/assets/chipotle.png", alt: "Mexican Grill" },
      { src: "../src/assets/kfc.png", alt: "KFC" },
      { src: "../src/assets/burger.png", alt: "Burger King" },
      { src: "../src/assets/taco.png", alt: "Taco Bell" },
      { src: "../src/assets/noodles.png", alt: "Noodles" },
      { src: "../src/assets/pollo.png", alt: "Pollo Loco" },
    ];
    return { carousels, promotions, promotionsImages, negocios };
  }
};
</script>

<style  scoped>
.div_section_card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch
}

.grid_promotions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
}

.image_promotions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 54px;
}

.div-rapid2 {
  display: flex;
  padding: 100px 250px 80px 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 54px;
}

.div-uses {
  display: flex;
  width: 100%;
  height: 120px;
  padding: 0px 24px;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  border: 0.5px solid var(--primario-60, #EEC70C);
  background: var(--base-00, #FFF);
  /* SHADOW 02 */
  box-shadow: 0px 1px 24px 8px rgba(20, 20, 20, 0.08);
}

.title-uses {
  color: var(--grises-80-p, #343434);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
}
</style>
