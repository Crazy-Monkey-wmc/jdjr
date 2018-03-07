<template>
  <div class="slider">
    <swiper :items='items'></swiper>
  </div>
</template>
<script>
import Swiper from "@/components/swiper.vue";
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            src:
              "//img12.360buyimg.com/jrpmobile/jfs/t14275/242/2256013850/40801/a62fbbe2/5a821f55Nac6fba86.jpg?width=750&height=320"
          },
          {
            src:
              "//img12.360buyimg.com/jrpmobile/jfs/t16786/174/454992385/41156/19dfbee1/5a821e8aN78f1be4b.jpg?width=750&height=320"
          },
          {
            src:
              "//img12.360buyimg.com/jrpmobile/jfs/t16591/340/2132021931/44857/c60d5e2/5a821f13N94c29e9c.jpg?width=750&height=320"
          },
          {
            src:
              "//img12.360buyimg.com/jrpmobile/jfs/t17452/319/455097225/48188/290049ec/5a821f9eN24bf1385.jpg?width=750&height=320"
          }
        ];
      }
    }
  },
  components: {
    Swiper
  }
};
</script>
<style lang="scss" scoped>
.slider {
  margin-top: 120px;
}
</style>

