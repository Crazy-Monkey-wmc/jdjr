<template>
  <div class="new-recommend">
    <panel :title="'新品推荐'">
      <div class="content">
        <swiper :items="items" :options="options"></swiper>
      </div>
    </panel>
    <div class="more">更多尖货</div>
  </div>
</template>
<script>
import panel from "@/components/panel.vue";
import swiper from "@/components/swiper.vue";
export default {
  components: {
    panel,
    swiper
  },
  data() {
    return {
      options: {
        slidesPerView: 2.3,
        freeMode: true,
        spaceBetween: 24,
        notNextTick: false
      },
      items: [
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t16591/349/2066779042/42386/92c7a2f6/5a7d5b56N263586c8.jpg?width=335&height=421"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t16858/332/448124625/49189/717a1c58/5a7d5b8cNa734cd9f.jpg?width=335&height=421"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t19438/256/457591773/38627/1f0fb065/5a7d5bd0N656c015c.jpg?width=335&height=421"
        }
      ]
    };
  }
};
</script>

<style lang='css'>
.new-recommend .swiper-container {
  box-sizing: border-box;
  padding: 0 24px;
}
</style>

<style lang="scss" scoped>
.new-recommend {
  position: relative;
  .content {
  }
  .more {
    max-width: 40%;
    font-size: 28px;
    color: #999;
    height: 112px;
    line-height: 112px;
    padding: 0 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center
      right no-repeat;
    background-size: 18px 28px;
  }
}
</style>
