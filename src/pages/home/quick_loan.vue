<template>
    <div class="quick-loan">
        <panel :title="'极速借贷'">
            <div class="content">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
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
    .quick-loan{
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>
