<template>
  <div class="wrap">
    <div class="title">韓式證件照 - <span>NT$280/580元</span></div>

    <el-row :gutter="20">
      <el-col :span="24">
        
        <el-card class="box-card" shadow="hover">
          <div class="service_intro">
            <ol>
              <li>不需化妝直接拍攝。<b>NT$280</b></li>
              <li>底妝、眼妝（不含假睫毛）唇妝、頭髮自然整理。<b>NT$580</b></li>
            </ol>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-divider content-position="left">方案內容</el-divider>
        <el-card class="box-card" shadow="hover">
          <div class="service_content">
            <ol>
              <li>4x6照片兩張（排版）</li>
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