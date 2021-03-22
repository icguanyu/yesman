<template>
  <div class="photo-grid">
    <div class="photo">
      <img
        src="https://unsplash.com/assets/api/api-photo-grid-6a8a9f9bd814cc5fd67b18bd91eace0f5e1b542a848d47ed074364bbd7597418.jpg"
        alt="">
      <img
        src="https://unsplash.com/assets/api/api-photo-grid-6a8a9f9bd814cc5fd67b18bd91eace0f5e1b542a848d47ed074364bbd7597418.jpg"
        alt="">
    </div>
  </div>
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
    overflow: hidden;
    .photo {
      width: 200%;
      animation: scroll-grid 20s linear infinite;
      img {
        width: 50%;
      }
    }
  }
  @keyframes scroll-grid {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  @media (max-width: 768px) {
    .photo-grid {
      display: none;
    }
  }
</style>