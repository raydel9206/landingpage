<template>
  <o-carousel v-bind="settings">
    <o-carousel-item v-for="(carousel, i) in images" :key="i">
      <section class="ex-slide " :style="{ 'background-color': carousel.color }">
        <!-- <img :src="carousel.image" /> -->
      </section>
    </o-carousel-item>
  </o-carousel>
</template>

<script>
export default {
  name: "carousels",
  props: {
    images: {
      default: [],
    },
    settings: {
      type: Object,
      default: {}
    },
    classSection: {
      type: String,
      default: "",
    },
    classBody: {
      type: String,
      default: "",
    }
  },

  computed: {
    getClassSection() {
      return `${this.classSection} ${this.classBody}`;
    },
  },
};
</script>
<style scoped>
.ex-slide {
  display: flex;
  width: 100%;
  height: 796px;
  padding-left: 0px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}
</style>