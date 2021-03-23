<template>
  <div class="wrap">
    <div class="title">新生兒寫真到府拍攝 - <span>NT$6,000元</span></div>

    <el-row :gutter="20">
      <el-col :span="24">
        
        <el-card class="box-card" shadow="hover">
          <div class="service_intro">
            <ol>
              <li>專業團隊到府拍攝</li>
              <li>限定<b>35天</b>內新生兒</li>
              <li><b>1</b>位新生兒<b>4</b>個造型</li>
              <li><b>2</b>位大人入鏡（不含服裝造型）</li>
              <li class="note">依照地區酌收車馬費（車馬費費用請訊息詢問）</li>
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
              <li>同檔案電子檔全檔案 </li>
              <li>6x8 水晶相本一本</li>
              <li>自選其中30張入相本</li>
              <li>16G 木質USB *1</li>
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
    name: "service-b",
    components: { Others },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  @import "./service.scss";
</style>