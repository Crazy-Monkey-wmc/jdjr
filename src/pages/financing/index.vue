<template>
    <div>
        <slider :items="sliderItems"></slider>
        <pic :pic="'//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270'"></pic>
        <select-recommend></select-recommend>
        <pic :pic="'//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240'"></pic>        
        <select-financing></select-financing>
        <pic :pic="'//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120'"></pic>
        <myfooter></myfooter>
    </div>
</template>
<script>
import Slider from "@/components/slider.vue";
import Pic from "@/components/single_pic.vue";
import SelectRecommend from "./select_recommend.vue";
import SelectFinancing from "./select_financing.vue";
import Myfooter from "@/components/footer"

export default {
  data() {
    return {
      sliderItems: [
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t10405/120/2592801005/36022/d8f57852/59f97c14Nfb960073.png?width=750&height=400"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400"
        }
      ]
    };
  },
  components: {
    Slider,
    Pic,
    SelectRecommend,
    SelectFinancing,
    Myfooter
  }
};
</script>
<style lang="scss" scoped>

</style>
