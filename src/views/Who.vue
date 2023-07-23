<template>
  <div class="main-div w-full" style="background: var(--fondoweb, #F8F8F8);">
    <div class="who-div">
      <div class="justify-center items-center gap-36 inline-flex ">
        <div class="grow shrink basis-0 flex-col justify-start items-start gap-16 inline-flex">
          <div class="self-stretch flex-col justify-start items-start gap-4 flex">
            <div class="justify-center items-center gap-2 inline-flex">
              <div class="text-neutral-700 text-sm font-semibold uppercase">¿Qué es Rapi2?</div>
            </div>
            <div class="self-stretch text-neutral-700 text-5xl font-bold leading-10">Rapi2 es una aplicación que te
              permitirá pedir la comida que más te guste a domicilio.</div>
            <div class="self-stretch text-stone-500 text-xl font-medium leading-loose">It is a long established fact that
              a reader will be distracted by the readable content of a page when looking at its layout. The point of using
              Lorem Ipsum.In the first place we have grante d to God, and by this our present charter confirmed for us and
              our heirs forever that the English Church shall be free, and shall have her rights entire,</div>
          </div>
          <div class="w-80 justify-between items-start gap-12 inline-flex">
            <div
              class="w-60 h-60 px-6 py-4 bg-white rounded-lg shadow flex-col justify-center items-center gap-8 inline-flex">
              <div class="bg-primary rounded-full p-4 justify-start items-start gap-2 inline-flex">
                <div class="w-12 h-12 justify-center items-center flex">
                  <div class="w-12 h-12 relative flex-col justify-start items-start flex"><User/></div>
                </div>
              </div>
              <div class="flex-col justify-start items-center flex">
                <div class="text-neutral-600 text-4xl font-semibold">199 587</div>
                <div class="text-neutral-400 text-sm font-normal">Total de clientes</div>
              </div>
            </div>
            <div
              class="w-60 h-60 px-6 py-4 bg-white rounded-lg shadow flex-col justify-center items-center gap-8 inline-flex">
              <div class="p-4 bg-primary rounded-full justify-start items-start gap-2 inline-flex">
                <div class="w-12 h-12 justify-center items-center flex">
                  <div class="w-12 h-12 relative flex-col justify-start items-start flex">
                    <div class="w-11 h-8 relative"><Moto/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-col justify-start items-center flex">
                <div class="text-neutral-600 text-4xl font-semibold">87</div>
                <div class="text-neutral-400 text-sm font-normal">Total de mensajeros</div>
              </div>
            </div>
            <div
              class="w-60 h-60 px-6 py-4 bg-white rounded-lg shadow flex-col justify-center items-center gap-8 inline-flex">
              <div class="p-4 bg-primary rounded-full justify-start items-start gap-2 inline-flex">
                <div class="w-12 h-12 justify-center items-center flex">
                  <div class="w-12 h-12 relative flex-col justify-start items-start flex"><Shop/></div>
                </div>
              </div>
              <div class="flex-col justify-start items-center flex">
                <div class="text-neutral-600 text-4xl font-semibold">58</div>
                <div class="text-neutral-400 text-sm font-normal">Total de negocios</div>
              </div>
            </div>
          </div>
        </div>
        <img class="w-96 h-96" src="../assets/anh-nguyen-kcA-c3f_3FE-unsplash.png" />
      </div>

    </div>
  </div>
</template>
<script>
import User from '../icons/User.vue';
import Moto from '../icons/Moto.vue';
import Shop from '../icons/Shop.vue';
export default {
  components: { User, Moto, Shop },
  setup() {

  }
}
</script>

<style>
.main-div {
  display: flex;
  padding: 0px 250px;
  flex-direction: column;
  align-items: center;
}

.who-div {
  display: flex;
  padding: 100px 0px;
  flex-direction: column;
  align-items: center;
  gap: 143px;
  align-self: stretch;

}
</style>
