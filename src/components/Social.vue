<template>
  <div class="social-links">
    <a href="#">
      <img src="../assets/images/icons/fb-icon.png" alt="fb">
    </a>
    <a href="#">
      <img src="../assets/images/icons/instagram-icon.png" alt="instagram">
    </a>
    <a href="#">
      <img src="../assets/images/icons/line-icon.png" alt="line">
    </a>
    <a href="#">
      <img src="../assets/images/icons/messenger-icon.png" alt="messenger">
    </a>
  </div>
</template>

<script>
  export default {
    name: "social-links",
  };
</script>

<style lang="scss" scoped>
  .social-links {
    z-index: 99;
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    flex-direction: column;
    border-radius: 100px;
    a {
      box-sizing: border-box;
      margin-bottom: 15px;
      width: 25px;
      height: 25px;
      display: block;
      transition: all 0.2s;
      &:hover {
        width: 35px;
        height: 35px;
      }
      img {
        width: 100%;
      }
    }
  }
</style>
