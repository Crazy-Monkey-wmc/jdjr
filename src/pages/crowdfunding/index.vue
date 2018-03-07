<template>
  <div>
    <headline></headline>
    <sign-in></sign-in>
    <recommend></recommend>
    <welfare></welfare>
    <myfooter></myfooter>
  </div>
</template>
<script>
import Headline from "./headline";
import SignIn from "./sign_in";
import Recommend from "./recommend";
import Welfare from "./more_welfare";
import Myfooter from "@/components/footer"
export default {
  components: {
    Headline,
    SignIn,
    Recommend,
    Welfare,
    Myfooter
  }
};
</script>
<style lang="scss" scoped>

</style>
