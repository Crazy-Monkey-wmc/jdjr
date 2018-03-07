<template>
  <div>
    <money></money>
    <service></service>
    <myfooter></myfooter>
  </div>
</template>
<script>
import Service from "./more_service";
import Money from "./my_money";
import Myfooter from "@/components/footer"

export default {
  components: {
    Service,
    Money,
    Myfooter
  }
};
</script>


