<template>
  <div class="login-root">
    <div class="input-box">
      <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, omnis amet
        tempore exercitationem laborum explicabo, harum repellendus repudiandae
        sed, corrupti quod autem dignissimos vel necessitatibus adipisci maxime
        numquam praesentium temporibus!
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
    &::before,
    &::after {
    }
  }
}
</style>
