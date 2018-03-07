<template>
    <div class="select-financing">
        <panel :title="'白条福利'">
            <div class="content">
                <div class="item">
                    <div class="image"><img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120"></div>
                    <div class="more">立即开通</div>
                    <div class="title">开通白条</div>
                    <div class="desc">送188元礼包</div>
                </div>
                <div class="item">
                    <div class="image"><img src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120"></div>
                    <div class="more">随机立减</div>
                    <div class="title">白条闪付</div>
                    <div class="desc">新手享158元礼包</div>
                </div>
                <div class="item">
                    <div class="image"><img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120"></div>
                    <div class="more">去提额</div>
                    <div class="title">白条提额</div>
                    <div class="desc">金融app专享提额礼包</div>
                </div>
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
@import "../../css/base.scss";
.select-financing {
  .content {
    @include list(column);
    .item {
      height: 140px;
      overflow: hidden;
      &::before {
        content: " ";
        width: 100%;
        height: 2px;
        background: #eee;
        display: block;
        transform: scale(.5)
      }
      .image {
        float: left;
        height: 88px;
        width: 88px;
        margin: 26px 32px 0;
        text-align: center;
        background: #fff;
        img{
            width: 100%;
            height: 100%;
        }
      }
      .more {
        float: right;
        font-size: 28px;
        max-width: 39%;
        height: 88px;
        line-height: 88px;
        margin-top: 26px;
        padding-right: 36px;
        box-sizing: border-box;
        color: #ff801a;
        background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png)
          center right no-repeat;
        background-size: 18px 30px;
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .title {
        font-size: 32px;
        margin-top: 36px;
        color: #333;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .desc {
        font-size: 24px;
        margin-top: 12px;
        color: #999;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
