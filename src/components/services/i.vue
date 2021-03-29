<template>
  <div class="wrap">
    <div class="title">形象照 - <span>NT$2,400元</span></div>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card" shadow="hover">
          <div class="service_intro">
            <ol>
              <li>素背景一套，未化妝。<b>NT$2,400</b></li>
              <li>素背景一套，含化妝。<b>NT$3,000</b></li>
              <li>衣服加一套 <b>+NT$800</b> </li>
              <li>精修照片加一張 <b>+NT$700</b></li>
              <li>證件照加一張電子檔 <b> NT$500</b> </li>
            </ol>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="12">
        <el-divider content-position="left">方案內容</el-divider>
        <el-card class="box-card" shadow="hover">
          <div class="service_content">
            <ol>
              <li>精修照片三張</li>
            </ol>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="12">
        <el-divider content-position="left">好禮二選一</el-divider>
        <el-card class="box-card" shadow="hover">
          <div class="servie_bonuse">
            <ol>
              <li>30秒側錄影片</li>
              <li>人像似顏繪一張（選擇一張照片）</li>
            </ol>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <ServiceCoolLightBox :items="items" />
    <Others />
  </div>
</template>

<script>
  import Others from "@/components/services/others";
  export default {
    name: "service-i",
    components: { Others },
    data() {
      return {
        items: [],
      };
    },
    mounted() {
      let r = require.context("@/assets/images/形象照", true, /\.jpg$/);
      var imgs = [];
      r.keys().forEach((key, idx) => (imgs[idx] = r(key)));
      this.items = imgs;
    },
  };
</script>

<style lang="scss" scoped>
  @import "./service.scss";
</style>