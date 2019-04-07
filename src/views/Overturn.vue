<template>
  <div class="stage">
    <div class="container">
      <div class="front">前面</div>
      <div class="back">背面</div>
    </div>
    <div
      @click="buttonActive = !buttonActive"
      :class="buttonActive ? ['button', 'button-button'] : ['button']"
    >
      <div class="button-top">BUTTON-TOP</div>
      <div class="button-front">BUTTON-FRONT</div>
      <div class="button-left">LEFT</div>
      <div class="button-right">RIGHT</div>
    </div>
    <div class="switch">
      <h3>开关:</h3>
      <switch-button v-model="switchActive"></switch-button>
    </div>
    <div class="open-box">
      <h3>打开一个盒子</h3>
      <open-box v-model="boxOpen"></open-box>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonActive: false,
      switchActive: false,
      boxOpen: false
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}
@mixin full {
  width: 100%;
  height: 100%;
}
.stage {
  width: 100vw;
  height: 100vh;
  perspective: 800;
  .container {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    position: relative;
    cursor: pointer;
    transition: 1s;
    transform-style: preserve-3d;
    &:hover {
      transform: rotateY(180deg);
    }
    .front,
    .back {
      //   @include center;
      @include full;
      position: absolute;
      top: 0;
      left: 0;
      color: whitesmoke;
      font-size: 40px;
      font-weight: 600;
      backface-visibility: hidden; /* 可以防止元素翻转时露出背面 */
      border-radius: 20px;
    }
    .front {
      background: #990000;
      z-index: 2;
    }
    .back {
      background: #009900;
      transform: rotateY(-180deg);
    }
  }
  .button {
    margin: 50px;
    width: 160px;
    height: 64px;
    color: whitesmoke;
    font-weight: 600;
    position: relative;
    transition: all 0.6s ease-in-out;
    transform-style: preserve-3d;
    cursor: pointer;
    &:hover {
      // transform: rotateX(-90deg);
    }
    .button-front,
    .button-top {
      @include center;
      @include full;
      position: absolute;
      top: 0;
      left: 0;
    }
    .button-top {
      transform: translateY(-64px) rotateX(90deg);
      transform-origin: 0 100%;
      background: #bbbbbb;
      background: linear-gradient(to bottom, blue, red);
    }
    .button-front {
      background: linear-gradient(to bottom, red, blue);
    }
    .button-left {
      width: 64px;
      height: 64px;
      background: #990000;
      position: absolute;
      top: 0;
      left: 0;
      transform: rotateY(90deg);
      transform-origin: 0;
    }
    .button-right {
      width: 64px;
      height: 64px;
      background: yellowgreen;
      position: absolute;
      top: 0;
      right: 0;
      transform: rotateY(-90deg);
      transform-origin: 100%;
    }
  }
  .button-button {
    transform: rotateX(-90deg);
  }
  .switch {
    box-sizing: border-box;
    padding: 15px;
  }
}
</style>
