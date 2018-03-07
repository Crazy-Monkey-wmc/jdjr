<template>
  <div>
    <slider :items="sliderItems"></slider>
    <welfare></welfare>
    <service></service>
    <single-pic :pic="singleImg"></single-pic>
    <myfooter></myfooter>
  </div>
</template>
<script>
import Slider from "@/components/slider.vue";
import Welfare from "./welfare";
import Service from "./more_service";
import SinglePic from "@/components/single_pic.vue";
import Myfooter from "@/components/footer"

export default {
  data() {
    return {
      sliderItems: [
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320"
        }
      ],
      singleImg:
        "//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252"
    };
  },
  components: {
    Slider,
    Welfare,
    Service,
    SinglePic,
    Myfooter
  }
};
</script>
<style lang="scss" scoped>

</style>
