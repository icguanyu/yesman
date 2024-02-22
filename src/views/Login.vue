<template>
  <div class="login">
    <el-card>
      <h2>登入後台</h2>
      <el-form
        ref="form"
        label-position="left"
        label-width="80px"
        :model="form"
      >
        <el-form-item label="帳號" prop="email">
          <el-input
            type="text"
            v-model.trim="form.email"
            placeholder="輸入信箱"
          ></el-input>
        </el-form-item>
        <el-form-item label="密碼" prop="password">
          <el-input
            type="password"
            placeholder="輸入密碼"
            v-model.trim="form.password"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            :disabled="loading"
            @click="login"
            >登入</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import firebase from "@/utils/firebase";
import "firebase/compat/auth";
export default {
  name: "login",
  data() {
    return {
      loading: false,
      form: {
        email: "icguanyu@gmail.com",
        password: "000000",
      },
    };
  },
  mounted() {},
  methods: {
    async login() {
      const { email, password } = this.form;
      this.loading = true;
      try {
        const res = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);

        console.log("res", res);
      } catch (error) {
        console.log("catch", error);
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100ch;
  .el-card {
    width: 450px;
    h2 {
      font-weight: 500;
      text-align: center;
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
}
</style>
