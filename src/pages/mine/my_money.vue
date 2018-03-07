<template>
    <div class="my-money">
        <div class="total">
            <p class="title">总资产(元)</p>
            <p class="count">0.00</p>
            <p class="profit">今日收益
                <span>0元</span>
            </p>
        </div>
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
.my-money {
  margin-top: 120px;
  .total {
    padding: 0 32px;
    .title {
      font-size: 28px;
      height: 40px;
      line-height: 40px;
      margin-top: 40px;
      color: #999;
    }
    .count {
      font-family: Sanfranciscodisplay;
      font-size: 66px;
      height: 80px;
      line-height: 80px;
      color: #424954;
    }
    .profit {
      font-size: 28px;
      height: 40px;
      line-height: 40px;
      color: #ff801a;
    }
  }
}
</style>