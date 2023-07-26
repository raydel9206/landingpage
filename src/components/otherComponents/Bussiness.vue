<template>
    <div class="" style=" display: flex; padding: 100px 13%; flex-direction: column; align-items: center; gap: 60px;">
        <div class="self-stretch flex-col justify-start items-center gap-2 flex">
            <div class="self-stretch text-center text-neutral-700 text-5xl font-bold">Nuestros negocios</div>
            <div class="self-stretch text-center text-zinc-500 text-2xl font-medium">Los mejores negocios con comida a
                domicilio
                los encontrarás en Rapi2</div>
        </div>
        <div class="justify-center" style="max-height: 21%; width: 100%; display: flex; align-items: center; gap: 5%;">
            <img class="max-h-24" :src="negocio.src" v-for="negocio in negocios" />
        </div>
    </div>
</template>
<script setup>
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



</script>
<style scoped></style>