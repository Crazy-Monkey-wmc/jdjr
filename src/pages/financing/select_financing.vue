<template>
    <div class="select-financing">
        <panel :title="'理财精选'">
            <div class="content">
                <div class="item">
                    <div class="image"><img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76"></div>
                    <div class="more">去赚钱</div>
                    <div class="title">月度理财</div>
                    <div class="desc">预期年化收益率4.50%</div>
                </div>
                <div class="item">
                    <div class="image"><img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76"></div>
                    <div class="more">去赚钱</div>
                    <div class="title">季度理财</div>
                    <div class="desc">历史年化回报率5.50%</div>
                </div>
                <div class="item">
                    <div class="image"><img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76"></div>
                    <div class="more">去赚钱</div>
                    <div class="title">一年理财</div>
                    <div class="desc">历史年化回报率5.80%</div>
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
        color: #ff3232;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
