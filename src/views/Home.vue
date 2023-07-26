<template>
  <!-- Section carousel -->
  <Carousel />
  <!-- End Section carousel -->

  <!-- Section Why use Rapid2 -->
  <UseRapi2 />
  <!-- End section Why use Rapid2 -->

  <!-- Section Prueba nuestra aplicación -->
  <TryRapi2/>
  <!-- End section Prueba nuestra aplicación -->

  <!-- Section Nuestros Negocios -->
  <Bussines/>
  <!-- End section Nuestros Negocios -->


  <!-- Section Start Now -->
  <StartNow/>
  <!-- End Section Start Now -->
</template>

<script setup>

import Carousel from '../components/otherComponents/Carousel.vue';
import UseRapi2 from '../components/otherComponents/UseRapi2.vue';
import TryRapi2 from '../components/otherComponents/TryRapi2.vue';
import Bussines from '../components/otherComponents/Bussiness.vue';
import StartNow from "../components/otherComponents/StartNow.vue";

// Load from server

const promotions = [
  { title: "Gran variedad de productos y negocios", subtitle: "Podrás disfrutar de la comida de tus negocios favoritos desde su casa" },
  { title: "Seguridad en sus pagos", subtitle: 'Con tarjetas de crédito o débito' },
  { title: "Entregas rápidas y con calidad", subtitle: 'Ordene cualquier producto y recibirá el pedido en minutos' },
];

const promotionsImages =
  { src: "../assets/MOVIL_LANDING_ISOMETRIC.webp", alt: "image_alt" };



</script>

<style  scoped>

</style>
