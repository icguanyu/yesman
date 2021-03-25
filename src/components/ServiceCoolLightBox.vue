<template>
  <div>
    <div class="images-wrapper">
      <el-row :gutter="5">
        <el-col :xs="8" :span="6" v-for="(image, imageIndex) in items" :key="imageIndex">
          <div class="image" :style="{ backgroundImage: 'url(' + image + ')' }" @click="index = imageIndex"></div>
        </el-col>
      </el-row>
    </div>
    <CoolLightBox :items="items" :index="index" :fullScreen="true" :useZoomBar="true"
      :enableScrollLock="enableScrollLock" @close="index = null">
    </CoolLightBox>
  </div>
</template>

<script>
  import CoolLightBox from "vue-cool-lightbox";
  import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
  export default {
    name: "MyCoolLightBox",
    props: ["items"],
    components: {
      CoolLightBox,
    },
    data() {
      return {
        enableScrollLock: window.innerWidth < 768 ? true : false,
        index: null,
      };
    },
    created() {
      window.addEventListener("resize", () => {
        this.enableScrollLock = window.innerWidth < 768 ? true : false;
      });
    },
  };
</script>

<style lang="scss" scoped>
  .images-wrapper {
    margin: 20px 0;
    .image {
      cursor: pointer;
      width: 100%;
      padding-bottom: 100%;
      background-size: cover;
      background-position: center center;
      margin-bottom: 5px;
    }
  }
</style>