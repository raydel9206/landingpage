<template>
  <div class="w-full"
      style="background: var(--fondoweb, #F8F8F8); display: flex; padding: 100px 0px; flex-direction: column; align-items: center; gap: 54px;">
      <div class="flex flex-col items-center" style="gap: 8px;">
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

</template>
<script setup>
import Moto from '../../icons/Moto.vue';
import Shop from '../../icons/Shop.vue';

</script>
<style></style>