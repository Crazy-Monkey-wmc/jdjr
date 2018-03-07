<template>
    <div class="headline">
        <div class="logo"></div>
        <div class="content">
            <swiper :options="options" :not-next-tick="options.notNextTick">
                <swiper-slide v-for="(item,index) in news" :key="index">
                    <div class="title">{{item}}</div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      options: {
        direction: "vertical",
        autoplay: true,
        loop:true,
        allowTouchMove: false,
      },
      news: [
        "签到领流量，1元500M！",
        "百万白条券免费送，速来领取！！"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.headline {
  height: 72px;
  margin-top: 120px;
  overflow: hidden;
  background: #fff;
  .logo {
    float: left;
    width: 146px;
    height: 72px;
    background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) 0 0
      no-repeat;
    background-size: 146px 100%;
  }
  .content {
    padding: 0 64px 0 32px;
    overflow: hidden;
    height: 100%;
    line-height: 72px;
    font-family: PingFangSC-Medium;
    font-size: 28px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    .title{
        background: #fff;
    }
  }
}
</style>
