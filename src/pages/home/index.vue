<template>
  <div>
    <slider></slider>
    <mymenu>
    </Mymenu>
    <novice></novice>
    <loan></loan>
    <manage-money></manage-money>
    <recommend></recommend>
    <life></life>
    <SinglePic :pic="singleImg"></SinglePic>
    <myfooter></myfooter>
  </div>
</template>
<script>
import Slider from "@/components/slider.vue";
import Mymenu from "./menu_under_slider.vue";
import Novice from "./novice_privilege.vue";
import Loan from "./quick_loan.vue";
import ManageMoney from "./manage_money.vue";
import Recommend from "./new_recommend.vue";
import Life from "./life_service.vue";
import SinglePic from "@/components/single_pic.vue";
import Myfooter from "@/components/footer"

export default {
  data() {
    return {
      singleImg:
        "//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252"
    };
  },
  components: {
    Slider,
    Mymenu,
    Novice,
    Loan,
    ManageMoney,
    Recommend,
    Life,
    SinglePic,
    Myfooter
  }
};
</script>
<style lang="scss" scoped>

</style>
