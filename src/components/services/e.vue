<template>
  <div class="wrap">
    <div class="title">兒童寫真到「棚」拍攝 - <span>NT$6,000元</span></div>
    <!--5000 改 6000-->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card" shadow="hover">
          <div class="service_intro">
            <ol>
              <li>限定<b>六個月至十二歲</b>兒童</li>
              <li><b>1</b>位小朋友<b>2</b>套服裝搭配<b>2</b>種造型</li>
              <li><b>2</b>位大人入鏡（不含服裝造型）</li>
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
              <li>木質USB *1</li>
              <li>8x12無框畫 *1（同檔案製作）</li>
            </ol>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="12">
        <el-divider content-position="left">好禮三選一</el-divider>
        <el-card class="box-card" shadow="hover">
          <div class="servie_bonuse">
            <ol>
              <li>精美鑰匙圈一個＋手機支架一個（同檔案製作）</li>
              <li>兩位大人（一男一女）各一種淡妝髮</li>
              <li>造型大象相框一個（同檔案製作）</li>
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
  name: "service-e",
  components: { Others },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    let r = require.context(
      "@/assets/images/兒童寫真到棚拍攝5000",
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
