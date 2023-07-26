<template>
    
    <div class="layout body-font font-urbanist_regaular">
        <MainHeader />
        <div>
            <!-- Main content -->
            <main>
                <router-view />
            </main>
            <!-- End Main content -->
        </div>
    </div>
    <Footer />
    
</template>

<script>
import MainHeader from '../components/otherComponents/MainHeader.vue';
import Footer from '../components/otherComponents/Footer.vue';
export default {
    components: { MainHeader, Footer },
    setup() {
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
.layout {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>