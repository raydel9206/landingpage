<template>
    <div class="layout w-full body-font font-urbanist_regaular">
        <!-- Header -->
        <div class="header w-full">
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
                        <btn :label="$t('about_us')" @click="$router.push({ name: 'who' })" :inverted="true" class="hover:text-primary" />
                    </div>
                </div>
                <div class="px-0.5 py-2 justify-center items-center gap-2 flex">
                    <div class="text-center text-stone-500 text-xl font-normal">
                        <btn :label="$t('faq')" @click="$router.push({ name: 'faq' })" :inverted="true" class="hover:text-primary" />
                    </div>
                </div>
                <div class="px-0.5 py-2 justify-center items-center gap-2 flex">
                    <div class="text-center text-stone-500 text-xl font-normal">
                        <btn :label="$t('contact_us')" :inverted="true" class="hover:text-primary" />
                    </div>
                </div>
                <div class="justify-end items-center gap-1 flex">
                    <div class="px-0.5 py-2 justify-center items-center gap-2 flex text-stone-500 text-xl">
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
        <!-- End Header -->
        <div>
            <!-- Main content -->
            <main>
                <router-view />
            </main>
            <!-- End Main content -->
        </div>
    </div>
    <!-- Footer -->
    <div class="div-footer w-full" style="background: var(--primario-100, #2C2502);">
        <div class="self-stretch justify-between items-center gap-24 inline-flex">
            <div class="justify-start items-start gap-60 flex">
                <div class="flex-col justify-start items-start gap-4 inline-flex">
                    <div class="self-stretch text-white text-xs font-semibold">Descargue nuestras App’s aquí
                    </div>
                    <div class="justify-start items-center gap-4 inline-flex">
                        <div class="w-20 opacity-75 text-white text-xs font-semibold">Cliente</div>
                        <div class=" cursor-pointer justify-start items-start gap-6 flex">
                            <div v-on:click="select('client', 'ios')"
                                class="hover:bg-yellow_hover px-4 py-2 bg-primary rounded-lg shadow gap-2.5 flex">
                                <div class="w-9 h-9">
                                    <Ios />
                                </div>
                                <div class="flex-col items-start inline-flex">
                                    <div class="text-neutral-700 font-normal text-xs">Descárgala ahora
                                    </div>
                                    <div class="text-lime-950 text-xs font-bold">App Store</div>
                                </div>
                            </div>
                            <div class="px-4 py-2 bg-primary rounded-lg shadow justify-center items-center gap-2.5 flex">
                                <div class="w-9 h-9 relative">
                                    <Playstore />
                                </div>
                                <div class="flex-col justify-center items-start inline-flex">
                                    <div class="text-neutral-700 text-base font-normal text-xs">Descárgala ahora</div>
                                    <div class="text-lime-950 text-xs font-bold">Google Play</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="justify-start items-center gap-4 inline-flex">
                        <div class="w-20 opacity-75 text-white text-xs font-semibold">Negocio</div>
                        <div class="justify-start items-start gap-6 flex">
                            <div class="px-4 py-2 bg-primary rounded-lg shadow justify-center items-center gap-2.5 flex">
                                <div class="w-9 h-9 relative">
                                    <Ios />
                                </div>
                                <div class="flex-col justify-center items-start inline-flex">
                                    <div class="text-neutral-700 text-base font-normal text-xs">Descárgala ahora</div>
                                    <div class="text-lime-950 text-xs font-bold">App Store</div>
                                </div>
                            </div>
                            <div class="px-4 py-2 bg-primary rounded-lg shadow justify-center items-center gap-2.5 flex">
                                <div class="w-9 h-9 relative">
                                    <Playstore />
                                </div>
                                <div class="flex-col justify-center items-start inline-flex">
                                    <div class="text-neutral-700 text-base font-normal text-xs">Descárgala ahora</div>
                                    <div class="text-lime-950 text-xs font-bold">Google Play</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="justify-start items-center gap-4 inline-flex">
                        <div class="w-20 opacity-75 text-white text-xs font-semibold">Mensajero</div>
                        <div class="justify-start items-start gap-6 flex">
                            <div class="px-4 py-2 bg-primary rounded-lg shadow justify-center items-center gap-2.5 flex">
                                <div class="w-9 h-9 relative">
                                    <Ios />
                                </div>
                                <div class="flex-col justify-center items-start inline-flex">
                                    <div class="text-neutral-700 text-base font-normal text-xs">Descárgala ahora</div>
                                    <div class="text-lime-950 text-xs font-bold">App Store</div>
                                </div>
                            </div>
                            <div class="px-4 py-2 bg-primary rounded-lg shadow justify-center items-center gap-2.5 flex">
                                <div class="w-9 h-9 relative">
                                    <Playstore />
                                </div>
                                <div class="flex-col justify-center items-start inline-flex">
                                    <div class="text-neutral-700 text-base font-normal text-xs">Descárgala ahora</div>
                                    <div class="text-lime-950 text-xs font-bold">Google Play</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-col justify-start items-start gap-8 inline-flex">
                <div class=" opacity-60 text-white text-base font-normal">Suscríbete para recibir información de
                    las mejores promociones.</div>
                <div class="justify-start items-start gap-8 inline-flex">                                         
                        <o-field
                            class="self-stretch h-12 px-5 py-3.5 bg-white rounded-3xl border border-neutral-200 justify-start items-center gap-2.5 inline-flex">
                            <o-input placeholder="No label" rounded></o-input>
                        </o-field>                    
                    <div class="w-32 px-8 py-2.5 bg-primary rounded-3xl justify-center items-center gap-2.5 flex">
                        <div class="text-neutral-700 text-xs font-semibold">Suscribirse</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="self-stretch h-20 flex-col justify-center  gap-8 flex">
            <div class="self-stretch h-px opacity-20 bg-white border"></div>
            <div class="justify-between items-center gap-40 inline-flex">
                <div class="justify-start items-center gap-5 flex">
                    <div
                        class=" h-14 p-2.5 bg-primary rounded-2xl flex-col justify-center items-center gap-1.5 inline-flex">
                        <div class="w-8 h-8 relative">
                            <Rapi2 />
                        </div>
                    </div>
                    <div class="text-white text-3xl font-bold">Rapi2</div>
                </div>
                <div class="justify-end items-center gap-14 inline-flex">
                    <div class="text-white text-xs font-semibold"> Nos puedes encontrar en...</div>
                    <div class="justify-start items-start gap-6 flex">
                        <div class="w-12 h-12 relative">
                            <Facebook />
                        </div>
                        <div
                            class="w-11 h-11 p-0.5 rounded-3xl border border-white border-opacity-25 justify-center items-center gap-2 flex">
                            <div class="w-5 h-5 relative">
                                <Instagram />
                            </div>
                        </div>
                        <div class="w-12 h-12 relative">
                            <Twitter />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <!-- End Footer -->
</template>

<script>
import { useI18n } from "vue-i18n";
import btn from '../components/baseComponents/btn.vue';
import menuBtn from '../components/baseComponents/menu.vue';
import Rapi2 from '../icons/Rapi2.vue';
import Ios from '../icons/Ios.vue';
import Playstore from '../icons/Playstore.vue';
import Facebook from '../icons/Facebook.vue';
import Instagram from '../icons/Instagram.vue';
import Twitter from '../icons/Twitter.vue';
export default {
    components: { btn, menuBtn, Rapi2, Ios, Playstore, Facebook, Instagram, Twitter },
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

<style scoped>
.header {
    display: flex;
    padding: 21px 250px;
    justify-content: space-between;
    align-items: center;
}

.layout {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.div-footer {
    display: flex;
    padding: 64px 250px 32px 250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 62px;
}
</style>