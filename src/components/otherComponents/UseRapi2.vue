<template>
    <div class="div-rapid2" style="background: linear-gradient(180deg, #FDFAEA 0%, #FFF 100%);">
        <div class="text-lime-950 text-5xl font-bold">¿Por qué deberías usar Rapi2?</div>
        <div class="flex px-64 text-center text-yellow-700 text-2xl font-medium">Lorem ipsum dolor sit amet, consectetur
            adipiscing
            elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt
            rhoncus,
            ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
        </div>
        <div class="div_section_card grid justify-items-center">
            <div class="image_promotions" >
                <img src="../../assets/MOVIL_LANDING_ISOMETRIC.webp" />
            </div>
            <div class="grid_promotions">
                <div class="div-uses">
                    <div class="w-6 h-6 bg-green-500 rounded-2xl flex-col justify-center items-center gap-2 inline-flex">
                        <Check />
                    </div>
                    <div class="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                        <div class="self-stretch text-neutral-700 text-xl font-semibold uppercase">Gran variedad de
                            productos y
                            negocios</div>
                        <div class="self-stretch text-stone-500 text-base font-normal">Podrás disfrutar de la comida de tus
                            negocios
                            favoritos desde su casa</div>
                    </div>
                </div>
                <div class="div-uses">
                    <div class="w-6 h-6 bg-green-500 rounded-2xl flex-col justify-center items-center gap-2 inline-flex">
                        <Check />
                    </div>
                    <div class="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                        <div class="text-neutral-700 text-xl font-semibold uppercase">Seguridad en sus pagos</div>
                        <div class="self-stretch text-stone-500 text-base font-normal">Con tarjetas de crédito o débito
                        </div>
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
                        <div class="text-neutral-700 text-xl font-semibold uppercase"> Entregas rápidas y con calidad</div>
                        <div class="self-stretch text-stone-500 text-base font-normal">Ordene cualquier producto y recibirá el pedido en minutos</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import Check from '../../icons/Check.vue';
import Tropipay from '../../icons/Tropipay.vue';
import Visa from '../../icons/Visa.vue';
import Mastercard from '../../icons/Mastercard.vue';

</script>
<style>
.div_section_card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch
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
    padding: 100px 13% 80px 13%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 54px;
}

.div-uses {
    display: flex;
    width: 100%;
    height: 13%;
    padding: 0px 24px;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    border: 0.5px solid var(--primario-60, #EEC70C);
    background: var(--base-00, #FFF);
    /* SHADOW 02 */
    box-shadow: 0px 1px 24px 8px rgba(20, 20, 20, 0.08);
}

.grid_promotions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
}
</style>