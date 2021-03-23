<template>
  <div class="photo-grid"></div>
</template>

<script>
  export default {
    name: "photo-grid",
  };
</script>

<style lang="scss" scoped>
  .photo-grid {
    width: 100%;
    margin: 15px 0;
    height: 480px;
    //background-size: contain;
    background-repeat: repeat-x;
    background-size: 200% 100%;
    background-image: url("https://unsplash.com/assets/api/api-photo-grid-6a8a9f9bd814cc5fd67b18bd91eace0f5e1b542a848d47ed074364bbd7597418.jpg");
    animation: scroll-grid 40s linear infinite;
  }
  @keyframes scroll-grid {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  @media (max-width: 768px) {
    .photo-grid {
      animation: scroll-grid 20s linear infinite;
      height: 250px;
    }
  }
</style>