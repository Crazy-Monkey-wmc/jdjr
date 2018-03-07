<template>
    <div class="more-welfare">
        <panel :title="'更多福利'">
            <div class="content">
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
                </div>
            </div>
        </panel>
        <div class="more">专享福利</div>
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
.more-welfare {
    position: relative;
  .content {
    @include list(row);
    .item {
      flex: 1;
      text-align: center;
      img {
        width: 100%;
      }
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
</style>