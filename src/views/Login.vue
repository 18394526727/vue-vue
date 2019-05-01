<template>
  <div class="login-root">
    <div class="input-box">
      <div class="content">
        <el-form label-width="40px" class="login-box">
          <el-form-item label="账号">
            <el-input v-model="loginForm.accounts"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginForm.accounts"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        acoounts: "",
        password: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-root {
  width: 100vw;
  height: 100vh;
  background: #062021;
  z-index: -3;
  @include center;
  .input-box {
    width: 300px;
    height: 500px;
    @include center;
    position: relative;
    .content {
      background: #000;
      color: whitesmoke;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 2;
      box-sizing: border-box;
      padding: 20px;
      .el-form {
        border: 2px solid #ffffff;
        .el-form-item {
          // /deep/ .el-form-item__label{
          //   color: whitesmoke;
          // }
        }
      }
    }
    @mixin content($index, $bg) {
      content: "";
      display: block;
      background: $bg;
      position: absolute;
      top: -3px;
      bottom: -3px;
      left: -3px;
      right: -3px;
      // z-index: $index;
    }
    &::before {
      @include content(-1, #ffffff);
      background: linear-gradient(235deg, #ff0000, #062021, #00ff00);
    }
    &::after {
      @include content(-2, #ffffff);
      filter: blur(50px);
      background: linear-gradient(235deg, #ff0000, #062021, #00ff00);
    }
  }
}
</style>
