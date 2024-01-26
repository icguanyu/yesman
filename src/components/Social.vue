<template>
  <div class="social-links">
    <a href="https://www.facebook.com/YesManphotographyStudio" target="_blank">
      <img src="../assets/images/icons/b_fb-icon.png" alt="fb" />
    </a>
    <a href="https://www.instagram.com/yes_man_photography/" target="_blank">
      <img src="../assets/images/icons/b_instagram-icon.png" alt="instagram" />
    </a>
    <a href="https://lin.ee/nScZxpE" target="_blank">
      <img src="../assets/images/icons/b_line-icon.png" alt="line" />
    </a>
    <a href="tel:02-22988017">
      <img src="../assets/images/icons/b_tel-icon.png" alt="tel" />
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
  z-index: 5;
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
    width: 40px;
    height: 40px;
    display: block;
    transition: all 0.2s;
    &:hover {
      width: 50px;
      height: 50px;
    }
    img {
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .social-links {
    right: 5px;
    top: 30%;
    a {
      width: 30px;
      height: 30px;
      &:hover {
        width: 35px;
        height: 35px;
      }
    }
  }
}
</style>
