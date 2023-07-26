<template>
  <div class="w-full flex justify-between items-center" style="padding: 21px 13%;">
    <div class="w-40 h-14 justify-start items-center gap-5 flex">
      <div class="w-14 h-14 p-2.5 bg-primary rounded-2xl flex-col justify-center items-center gap-1.5 inline-flex">
        <div @click="$router.push({ name: 'home' })" class="cursor-pointer w-8 h-8 relative"> <rapi-2 /></div>
      </div>
      <div class="text-neutral-700 text-3xl font-bold">Rapi2</div>
    </div>
    <div class="justify-end items-center gap-12 flex">
      <div class="px-0.5 py-2 justify-center items-center gap-2 flex">
        <div class="text-center text-gray-400 text-xl font-normal">
          <btn :label="$t('about_us')" @click="$router.push({ name: 'who' })" :inverted="true"
            class="hover:text-primary" />
        </div>
      </div>
      <div class="px-0.5 py-2 justify-center items-center gap-2 flex">
        <div class="text-center text-gray-400 text-xl font-normal">
          <btn :label="$t('faq')" @click="$router.push({ name: 'faq' })" :inverted="true" class="hover:text-primary" />
        </div>
      </div>
      <div class="px-0.5 py-2 justify-center items-center gap-2 flex">
        <div class="text-center text-gray-400 text-xl font-normal">
          <btn :label="$t('contact_us')" :inverted="true" class="hover:text-primary" />
        </div>
      </div>
      <div class="justify-end items-center gap-1 flex">
        <div class="px-0.5 py-2 justify-center items-center gap-2 flex text-gray-400 text-xl">
          <menuBtn :label="$t('languages')" :inverted="true" :options="languages" @selElemnt="emitedSelLang"
            :radioBtn="true" itemActiveClass="bg-yellow rounded-2xl text-black"
            classToMenu="w-26 h-10 justify-end items-center gap-1 inline-flex hover:text-primary"
            classToMenuActive="text-primary"
            classToDivItem="h-36 absolute bg-white rounded-2xl shadow border border-neutral-200 flex-col justify-start items-start inline-flex"
            classToItem="w-52 h-12 px-4 py-2 justify-between items-center gap-2 inline-flex cursor-pointer hover:bg-yellow hover:rounded-2xl">
          </menuBtn>
        </div>
        <div class="w-4 h-4 origin-top-left -rotate-90 justify-center items-center flex">
          <div class="w-4 h-4 relative flex-col justify-start items-start flex"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";
import btn from '../baseComponents/btn.vue';
import menuBtn from '../baseComponents/menu.vue';
import Rapi2 from '../../icons/Rapi2.vue';
export default {
  components: { btn, menuBtn, Rapi2 },
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    // Emited events from child component
    const emitedSelLang = (lang) => {
      switch (lang) {
        case "en":
          locale.value = 'en'
          break;
        case "es":
          locale.value = 'es'
          break;
        case "fr":
          locale.value = 'fr'
          break;
        default:
          locale.value = 'es'
          break;
      }
    };
    const languages = [
      { text: "Español", value: "es" },
      { text: "Inglés", value: 'en' },
      { text: "Francés", value: 'fr' },
    ];
    return { locale, languages, emitedSelLang };


  },
  methods: {
    select: function (app, repo) {
      console.log('app');
      console.log('repo');
    }
  }
}
</script>
<style>
.header {
  display: flex;
  padding: 21px 13%;
  justify-content: space-between;
  align-items: center;
}
</style>

