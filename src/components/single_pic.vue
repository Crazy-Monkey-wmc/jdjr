<template>
    <div class="single-pic">
        <panel>
            <div class="content">
                <img :src="pic">
            </div>
        </panel>
    </div>
</template>
<script>
import panel from "@/components/panel.vue";

export default {
  props: {
    pic: {
      type: String,
      default: ""
    }
  },
  components: {
    panel
  }
};
</script>

<style lang="scss" scoped>
.single-pic {
  img {
    width: 100%;
  }
}
</style>
