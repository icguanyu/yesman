<template>
  <div class="wrap">
    <div class="title">韓式證件照</div>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card" shadow="hover">
          <div class="service_intro">
            <ol>
              <li>不含妝髮。<b>NT$350</b></li>
              <li>含妝髮。<b>NT$580</b></li>
              <li>七歲以下。<b>NT$450</b></li>
            </ol>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-divider content-position="left">方案內容(以下三選一)</el-divider>
        <el-card class="box-card" shadow="hover">
          <div class="service_content">
            <ol>
              <li>2吋照片 12張</li>
              <li>1吋照片 12張</li>
              <li>2吋與1吋照片 各6張</li>
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
    name: "service-h",
    components: { Others },
    data() {
      return {
        items: [],
      };
    },
    mounted() {
      let r = require.context("@/assets/images/韓式證件照", true, /\.jpg$/);
      var imgs = [];
      r.keys().forEach((key, idx) => (imgs[idx] = r(key)));
      this.items = imgs;
    },
  };
</script>

<style lang="scss" scoped>
  @import "./service.scss";
</style>