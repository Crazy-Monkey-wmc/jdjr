<template>
    <div class="sign-in">
        <panel :title="'每日签到'">
            <div class="content">
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
                </div>
                <div class="more">不抢白不抢</div>
            </div>
        </panel>
    </div>
</template>
<script>
import panel from "@/components/panel.vue";
export default {
  components: {
    panel
  }
};
</script>
<style lang="scss" scoped>
.sign-in {
    position: relative;
  .content {
    font-size: 0;
    padding-bottom: 40px;
    .item {
      width: 50%;
      display: inline-block;
      img{
          width: 100%;
      }
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
    }
  }
}
</style>