<template>
  <div class="wrap">
    <div class="title">孕婦到棚拍攝 - <span>NT$6,800元</span></div>

    <el-row :gutter="20">
      <el-col :span="24">
        
        <el-card class="box-card" shadow="hover">
          <div class="service_intro">
            <ol>
              <li><b>1</b>位孕媽咪<b>2</b>套服裝<b>2</b>種造型</li>
              <li><b>1</b>位爸爸<b>2</b>套服裝<b>2</b>種造型</li>
              <li class="note">男生服裝僅提供黑色西裝，可自備</li>
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
              <li>同檔案電子檔10張 </li>
              <li>6x8 水晶相本一本</li>
              <li>同檔案10張入相本</li>
              <li>16G 木質USB *1</li>
              <li>8x10相框*1（同檔案製作）</li>
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
    <Others />
  </div>
</template>

<script>
  import Others from "@/components/services/others";
  export default {
    name: "service-g",
    components: { Others },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  @import "./service.scss";
</style>