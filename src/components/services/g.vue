<template>
  <div class="wrap">
    <div class="title">孕婦到棚「棚」攝 - <span>NT$6,800元</span></div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card" shadow="hover">
          <div class="service_intro">
            <ol>
              <li><b>1</b>位孕媽咪<b>2</b>套服裝<b>2</b>種造型</li>
              <li>
                <b>1</b>位爸爸<b>1</b>套服裝加<b>1</b>套自備便服
                <b>2</b>種造型(男生服裝僅提供黑色西裝)
              </li>
            </ol>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="12">
        <el-divider content-position="left">方案內容</el-divider>
        <el-card class="box-card" shadow="hover">
          <div class="service_content">
            <ol>
              <li>精修照片10張</li>
              <li>6x8 精裝相本一本</li>
              <li>同檔案10張入相本</li>
              <li>8x10相框一個（同檔案製作）</li>
            </ol>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="12">
        <!-- <el-divider content-position="left">好禮二選一</el-divider>
        <el-card class="box-card" shadow="hover">
          <div class="servie_bonuse">
            <ol>
              <li>8x10相框一個</li>
            </ol>
          </div>
        </el-card> -->
      </el-col>
    </el-row>
    <ServiceCoolLightBox :items="items" />
    <Others />
  </div>
</template>

<script>
import Others from "@/components/services/others";
export default {
  name: "service-g",
  components: { Others },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    let r = require.context("@/assets/images/孕婦到棚拍攝", true, /\.jpg$/);
    var imgs = [];
    r.keys().forEach((key, idx) => (imgs[idx] = r(key)));
    this.items = imgs;
  },
};
</script>

<style lang="scss" scoped>
@import "./service.scss";
</style>
