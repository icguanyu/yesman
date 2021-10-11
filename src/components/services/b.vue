<template>
  <div class="wrap">
    <div class="title">新生兒寫真到「府」拍攝 - <span>NT$7,000元</span></div>
    <!--6000 改 7000-->
    <div class="active">使用五倍券 打九折</div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card" shadow="hover">
          <div class="service_intro">
            <ol>
              <li>專業團隊到府拍攝</li>
              <li>限定<b>35天</b>內新生兒</li>
              <li><b>1</b>位新生兒<b>4</b>個造型</li>
              <li class="note">依照地區酌收車馬費（車馬費費用請訊息詢問）</li>
              <li class="note">若樓層高於三樓 沒有電梯 會酌收$200搬運費</li>
            </ol>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-divider content-position="left">方案內容</el-divider>
        <el-card class="box-card" shadow="hover">
          <div class="service_content">
            <ol>
              <li>精修照片全檔案（35張以上）</li>
              <li>同檔案電子檔全檔案</li>
              <li>4x6 精裝相本一本</li>
              <li>自選其中20張入相本</li>
              <li>16G 木質USB *1</li>
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
  name: "service-b",
  components: { Others },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    let r = require.context(
      "@/assets/images/新生兒寫真到府拍攝6000",
      true,
      /\.jpg$/
    );
    var imgs = [];
    r.keys().forEach((key, idx) => (imgs[idx] = r(key)));
    this.items = imgs;
  },
};
</script>

<style lang="scss" scoped>
@import "./service.scss";
</style>
