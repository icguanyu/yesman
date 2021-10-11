<template>
  <div class="wrap">
    <div class="title">新生兒寫真到「府」拍攝 - <span>NT$10,800元</span></div>
    <!--8800 改 10800-->
    <div class="active">使用五倍券 打九折</div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card" shadow="hover">
          <div class="service_intro">
            <ol>
              <li>專業團隊到府拍攝</li>
              <li>限定<b>35天</b>內新生兒</li>
              <li><b>1</b>位新生兒<b>8</b>個造型（如果寶貝配合會盡量多拍）</li>
              <li><b>2</b>位大人入鏡（不含服裝造型）</li>
              <li class="note">依照地區酌收車馬費（車馬費費用請訊息詢問）</li>
              <li class="note">若樓層高於三樓 沒有電梯 會酌收$200搬運費</li>
            </ol>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="24">
        <el-divider content-position="left">方案內容</el-divider>
        <el-card class="box-card" shadow="hover">
          <div class="service_content">
            <ol>
              <li>精修照片全檔案（70張以上）</li>
              <li>同檔案電子檔全檔案</li>
              <li>6x8 精裝相本一本</li>
              <li>自選其中30張入相本</li>
              <li>16G 木質USB *1</li>
              <li>8x10相框 *1（同檔案製作）</li>
              <li>30秒側錄影片（攝影師挑選）</li>
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
  name: "service-a",
  components: { Others },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    let r = require.context(
      "@/assets/images/新生兒寫真到府拍攝8800",
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
