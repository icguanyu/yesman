<template>
  <div class="wrap">
    <div class="title">新生兒寫真到「棚」拍攝 - <span>NT$3,880元</span></div>
    <div class="active">使用五倍券 贈送粉藍三合一相框</div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card" shadow="hover">
          <div class="service_intro">
            <ol>
              <li>限定<b>兩個月</b>內新生兒</li>
              <li><b>1</b>位新生兒<b>5</b>個造型</li>
              <!-- <li><b>2</b>位大人入鏡（不含服裝造型）</li> -->
            </ol>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="12">
        <el-divider content-position="left">方案內容</el-divider>
        <el-card class="box-card" shadow="hover">
          <div class="service_content">
            <ol>
              <li>精修照片8張</li>
              <li>同檔案電子檔8張</li>
              <!-- <li>4x6 精裝相本一本</li>
              <li>同檔案8張入相本</li> -->
              <li>16G 木質USB *1</li>
            </ol>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="12">
        <el-divider content-position="left">好禮三選一</el-divider>
        <el-card class="box-card" shadow="hover">
          <div class="servie_bonuse">
            <ol>
              <li>手機支架一個</li>
              <li>造型鑰匙圈一個</li>
              <li>珪藻土杯墊一個</li>
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
  name: "service-d",
  components: { Others },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    let r = require.context(
      "@/assets/images/新生兒寫真到棚拍攝3880",
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
