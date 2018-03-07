<template>
    <swiper :options="options" :not-next-tick="options.notNextTick">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in items" :key="index">
            <img :src="item.src">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination" v-if="options.pagination"></div>
        <div class="swiper-button-prev" slot="button-prev" v-if="options.navigation"></div>
        <div class="swiper-button-next" slot="button-next" v-if="options.navigation"></div>
        <div class="swiper-scrollbar" slot="scrollbar" v-if="options.scrollBar"></div>
    </swiper>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          notNextTick:false
        };
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="css">
    .swiper-slide>img{
        width: 100%;
    }
</style>
