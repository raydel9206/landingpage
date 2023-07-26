<template>
  <div class="grid justify-items-center" style="background: var(--base-00, #FFF);">
    <div style="display: inline-flex; align-items: center; gap: 9.4%; padding: 72px 13% 0px 17%;">
      <div style="max-width: 42%; height: 100%;">
        <img style="height: 100%;" src="../../assets/VISTAS_LANDING_ISOMETRIC.webp" />
      </div>
      <div class="flex"
        style="width: 49%; height: 40%; display: flex; flex-direction: column; align-items: flex-start; gap: 24px;">
        <div style="color: var(--primario-100, #2C2502); leading-trim: both; text-edge: cap; font-size: 56px; font-style: normal; font-weight: 700; line-height: normal; width: 100%; height: 7%;">Prueba nuestra aplicación</div>
        <div
          style="color: var(--primario-80, #8D7607); font-size: 24px; font-style: normal; font-weight: 500; line-height: normal;">
          Desde su casa ordene sus platillos favoritos de los mejores
          restaurantes</div>
        <div class="justify-start items-start gap-6 inline-flex">
          <div class="px-4 py-2 bg-neutral-700 rounded-lg shadow justify-center items-center gap-2.5 flex">
            <div class="h-1/4 relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                <g clip-path="url(#clip0_13558_130717)">
                  <path
                    d="M28.3388 19.6105C28.2938 15.052 32.0558 12.865 32.2246 12.757C30.1096 9.66325 26.8156 9.238 25.6411 9.19075C22.8376 8.90725 20.1713 10.8422 18.7471 10.8422C17.3273 10.8422 15.1313 9.2335 12.8071 9.27625C9.7516 9.32125 6.9346 11.0537 5.3596 13.7897C2.18485 19.2977 4.54735 27.4607 7.6411 31.927C9.1531 34.114 10.9553 36.571 13.3223 36.4832C15.6016 36.3932 16.4633 35.0072 19.2196 35.0072C21.9758 35.0072 22.7498 36.4832 25.1618 36.436C27.6143 36.391 29.1691 34.2062 30.6698 32.0125C32.4068 29.4745 33.1201 27.0197 33.1628 26.8937C33.1088 26.869 28.3793 25.0577 28.3321 19.6127L28.3388 19.6105ZM23.8073 6.232C25.0628 4.70875 25.9111 2.59375 25.6793 0.483246C23.8703 0.557496 21.6766 1.68925 20.3783 3.21025C19.2128 4.56025 18.1936 6.7135 18.4658 8.78125C20.4863 8.93875 22.5496 7.75525 23.8051 6.23425L23.8073 6.232Z"
                    fill="#F5D437" />
                </g>
                <defs>
                  <clipPath id="clip0_13558_130717">
                    <rect width="36" height="36" fill="white" transform="translate(0.513062 0.483246)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="flex-col justify-center items-start inline-flex">
              <div class="text-white text-base font-normal">Descárgala ahora</div>
              <div class="text-primary text-4xl font-bold">App Store</div>
            </div>
          </div>
          <div class="px-4 py-2 bg-neutral-700 rounded-lg shadow justify-center items-center gap-2.5 flex">
            <div class="h-1/4 relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <g clip-path="url(#clip0_13558_130723)">
                  <path
                    d="M29.8704 18.2139L24.645 21.1712L19.9584 16.5139L24.6824 11.8192L29.8704 14.7552C30.1766 14.9284 30.4313 15.1797 30.6085 15.4835C30.7858 15.7874 30.8792 16.1328 30.8792 16.4846C30.8792 16.8363 30.7858 17.1818 30.6085 17.4856C30.4313 17.7894 30.1766 18.0408 29.8704 18.2139ZM2.2957 1.71524C2.19675 1.95546 2.14601 2.21278 2.14636 2.47258V30.4952C2.14636 30.7846 2.20636 31.0539 2.3117 31.2952L17.185 16.5126L2.2957 1.71524ZM18.5717 15.1352L22.9157 10.8179L5.11303 0.743245C4.73144 0.523959 4.28702 0.439866 3.8517 0.504578L18.5717 15.1352ZM18.5717 17.8912L3.90503 32.4686C4.30236 32.5166 4.72103 32.4472 5.11303 32.2246L22.8784 22.1712L18.5717 17.8912Z"
                    fill="#F5D437" />
                </g>
                <defs>
                  <clipPath id="clip0_13558_130723">
                    <rect fill="white" transform="translate(0.513062 0.483246)" />
                  </clipPath>
                </defs>
              </svg>
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
</template>
<script setup>
import Ios from '../../icons/Ios.vue';
import Playstore from '../../icons/Playstore.vue';

</script>
<style></style>