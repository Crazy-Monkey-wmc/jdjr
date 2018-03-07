<template>
    <div class="more-service">
        <panel :title="'更多服务'">
            <div class="content">
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t4330/133/678123946/5169/caa95df0/58b7dc5bN18e35d4c.png?width=120&height=119">
                    <div class="title">小白理财</div>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3649/359/1635382237/5435/20453a2e/582c3666Ne77dec97.png?width=120&height=120">
                    <div class="title">钢镚</div>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3571/19/1630706642/1939/c4a48e76/582c359cN20a00758.png?width=135&height=135">
                    <div class="title">小白信用</div>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3400/21/1585015214/1646/8f5ad15f/582c35b9N8cd168a5.png?width=135&height=135">
                    <div class="title">存工资</div>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3385/44/1019888807/5770/d74683d1/58198963N4211803c.png?width=132&height=132">
                    <div class="title">保障险</div>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3751/361/989855936/1252/520512c7/58198a78N1b268658.png?width=132&height=132">
                    <div class="title">惠加油</div>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135">
                    <div class="title">Go返利</div>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3370/161/1008561930/1190/34c5e736/58198b1aNa12c45fa.png?width=132&height=132">
                    <div class="title">定期还款</div>
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
.more-service {
  .content {
    @include list(row);
    .item {
      width: 25%;
      text-align: center;
      padding-bottom: 40px;
      img {
        width: 90px;
        height: 90px;
      }
      .title {
        font-size: 26px;
        display: block;
        color: #666;
        margin-top: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
