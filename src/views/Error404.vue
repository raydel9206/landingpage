<template>
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
            <p class="text-base font-semibold text-indigo-600"> Error 404</p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no encontrda</h1>
            <p class="mt-6 text-base leading-7 text-gray-600">Lo sentimos, no pudimos encontrar la página que estás
                buscando.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <span aria-hidden="true">&rarr;</span>
                <btn :label="$t('back_home')" :inverted="true" @click="$router.push({ name: 'home' })"></btn>
            </div>
        </div>
    </main>
</template>

<script>
import btn from '../components/baseComponents/btn.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: { btn },
    name: 'Error404',

})
</script>