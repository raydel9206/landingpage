<template>
    <div class="body-font font-urbanist">
        <!-- Header -->
        <div class="flex px-64 py-5 bg-white shadow justify-between items-center gap-72">
            <div class="w-40 h-14 justify-start items-center gap-5 flex">
                <div
                    class="w-14 h-14 p-2.5 bg-primary rounded-2xl flex-col justify-center items-center gap-1.5 inline-flex">
                    <div class="w-8 h-8 relative"> <rapi-2 /></div>
                </div>
                <div class="text-neutral-700 text-3xl font-bold">Rapi2</div>
            </div>
            <div class="justify-end items-center gap-12 flex">
                <div class="px-0.5 py-2 justify-center items-center gap-2 flex">
                    <div class="text-center text-stone-500 text-xl font-normal">
                        <btn :label="$t('about_us')" :inverted="true" class="hover:text-primary" />
                    </div>
                </div>
                <div class="px-0.5 py-2 justify-center items-center gap-2 flex">
                    <div class="text-center text-stone-500 text-xl font-normal">
                        <btn :label="$t('faq')" :inverted="true" class="hover:text-primary" />
                    </div>
                </div>
                <div class="px-0.5 py-2 justify-center items-center gap-2 flex">
                    <div class="text-center text-stone-500 text-xl font-normal">
                        <btn :label="$t('contact_us')" :inverted="true" class="hover:text-primary" />
                    </div>
                </div>
                <div class="justify-end items-center gap-1 flex">
                    <div class="px-0.5 py-2 justify-center items-center gap-2 flex text-stone-500 text-xl">
                        <menuBtn :label="$t('languages')" :inverted="true" :options="languages" @selElemnt="emitedSelLang" :radioBtn="true"
                            itemActiveClass="bg-yellow rounded-2xl text-black"
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
        <!-- End Header -->
        <div>
            <!-- Main content -->
            <main>
                <router-view />
            </main>
            <!-- End Main content -->
        </div>
        <!-- Footer -->
        <div class="flex h-96 px-64 pt-16 pb-8 bg-lime-950 flex-col justify-center items-center gap-16 inline-flex">
            <div class="self-stretch justify-between items-center gap-96 inline-flex">
                <div class="justify-start items-start gap-60 flex">
                    <div class="flex-col justify-start items-start gap-4 inline-flex">
                        <div class="self-stretch h-12 text-white text-xl font-semibold">Descargue nuestras App’s aquí </div>
                        <div class="justify-start items-center gap-4 inline-flex">
                            <div class="w-24 opacity-75 text-white text-xl font-semibold">Neogcio</div>
                            <div class="justify-start items-start gap-8 flex">
                                <div
                                    class="px-2.5 py-1.5 rounded-md shadow border border-white justify-center items-center gap-2 flex">
                                    <div class="w-6 h-6 relative"></div>
                                    <div class="flex-col justify-center items-start inline-flex">
                                        <div class="text-white text-xs font-normal">Descárgala ahora</div>
                                        <div class="text-white text-2xl font-bold">App Store</div>
                                    </div>
                                </div>
                                <div
                                    class="px-2.5 py-1.5 rounded-md shadow border border-white justify-center items-center gap-2 flex">
                                    <div class="w-5 h-5 relative"></div>
                                    <div class="flex-col justify-center items-start inline-flex">
                                        <div class="text-white text-xs font-normal">Descárgala ahora</div>
                                        <div class="text-white text-2xl font-bold">Google Play</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-8 inline-flex">
                    <div class="w-80 opacity-60 text-white text-base font-normal">Suscríbete para recibir información de las
                        mejores promociones.</div>
                    <div class="justify-start items-start gap-8 inline-flex">
                        <div class="w-80 flex-col justify-start items-start gap-1 inline-flex">
                            <div
                                class="self-stretch h-12 px-5 py-3.5 bg-white rounded-3xl border border-neutral-200 justify-start items-center gap-2.5 inline-flex">
                                <div class="text-zinc-400 text-base font-normal">barrett@gmail.com</div>
                            </div>
                        </div>
                        <div class="w-32 px-8 py-2.5 bg-yellow-300 rounded-3xl justify-center items-center gap-2.5 flex">
                            <div class="text-neutral-700 text-sm font-semibold">Suscribirse</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="self-stretch h-20 flex-col justify-center items-center gap-8 flex">
                <div class="self-stretch h-px opacity-20 bg-white border"></div>
                <div class="flex justify-between items-center gap-96 inline-flex">
                    <div class="w-40 h-14 justify-start items-center gap-5 flex">
                        <div
                            class="w-14 h-14 p-2.5 bg-yellow-300 rounded-2xl flex-col justify-center items-center gap-1.5 inline-flex">
                            <div class="w-8 h-8 relative"></div>
                        </div>
                        <div class="text-white text-3xl font-bold">Rapi2</div>
                    </div>
                    <div class="justify-end items-center gap-14 flex">
                        <div class="text-white text-xl font-semibold"> Nos puedes encontrar en...</div>
                        <div class="justify-start items-start gap-6 flex">
                            <div class="w-12 h-12 relative">
                            </div>
                            <div
                                class="w-11 h-11 p-0.5 rounded-3xl border border-white border-opacity-25 justify-center items-center gap-2 flex">
                                <div class="w-5 h-5 relative">
                                </div>
                            </div>
                            <div class="w-12 h-12 relative">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Footer -->
    </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import btn from '../components/baseComponents/btn.vue';
import menuBtn from '../components/baseComponents/menu.vue';
import Rapi2 from '../icons/Rapi2.vue';
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
    }
}
</script>

<style scoped>

</style>