<template>
    <div class="panel">
        <h4 class="title" v-if='title'>-{{title}}-</h4>
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../css/base.scss";
.panel {
  @include panel;
}
</style>
