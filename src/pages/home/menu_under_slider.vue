<template>
    <div class="menu">
        <panel>
            <div class="content">
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132">
                    <div class="desc">优惠券</div>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132">
                    <div class="desc">领红包</div>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132">
                    <div class="desc">抢钢镚</div>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135">
                    <div class="desc">白条提额</div>
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
.menu {
  .panel {
    margin-top: 0;
    padding-top: 20px;
  }
  .content {
    @include list(row);
    .item {
      min-height: 135px;
      text-align: center;
      flex: 1;
      &:nth-child(3) .desc {
        color: red;
      }
      > img {
        width: 90px;
        height: 90px;
      }
      .desc {
        font-size: 26px;
        text-align: center;
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
