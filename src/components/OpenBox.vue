<template>
  <div class="window">
    <div
      class="open-box-root open-box-root-style"
      :class="{ 'open-box-root-active': value }"
    >
      <div class="box-back">
        <button class="button" @click="$emit('input', !value)">关闭盒子</button>
      </div>
      <!-- <div class="box-front" v-if="!value">
        <button class="button" @click="$emit('input',!value)">打开盒子</button>
      </div> -->
      <div class="box-left">左</div>
      <div class="box-right">右</div>
      <div class="box-top">上</div>
      <div class="box-bottom">下</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenBox",
  props: {
    value: Boolean
  }
};
</script>

<style lang="scss" scoped>
.window {
  width: 100vw;
  display: flex;
  justify-content: center;
  //   transform-style: preserve-3d;
}
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin full {
  width: 100%;
  height: 100%;
}
@mixin w-h-full {
  width: 90px;
  height: 90px;
}
.open-box-root {
  width: 150px;
  height: 90px;
  margin: 80px;
  transition: all 0.6s;
  position: relative;
  > div {
    position: absolute;
    @include center;
    color: whitesmoke;
    font-weight: 900;
    transition: all 0.6s;
  }
  .box-front {
    @include full;
    background: #0033ff;
  }
  .box-back {
    @include full;
    background: #006600;
  }
  .box-left {
    @include w-h-full;
    background: #00ff00;
  }
  .box-right {
    @include w-h-full;
    background: #00ffff;
    right: 0;
  }
  .box-top {
    @include full;
    background: #cc6699;
  }
  .box-bottom {
    @include full;
    background: #cc6600;
  }
}
.open-box-root-style {
  .box-front {
    transform: translateZ(90px);
  }
  .box-back {
  }
  .box-left {
    transform: rotateY(-90deg);
    transform-origin: 0;
  }
  .box-right {
    transform: rotateY(90deg);
    transform-origin: 100% 0%;
  }
  .box-top {
    transform: rotateX(90deg);
    transform-origin: 0 0;
  }
  .box-bottom {
    transform: rotateX(-90deg);
    transform-origin: 0 100%;
  }
}
.open-box-root-active {
  .box-front {
    transform: translateZ(90px);
  }
  .box-back {
  }
  .box-left {
    transform: rotateY(-180deg);
    transform-origin: 0;
  }
  .box-right {
    transform: rotateY(180deg);
    transform-origin: 100% 0%;
  }
  .box-top {
    transform: rotateX(180deg);
    transform-origin: 0 0;
  }
  .box-bottom {
    transform: rotateX(-180deg);
    transform-origin: 0 100%;
  }
}
.button {
  color: blueviolet;
  font-weight: 600;
  border: 10px;
  height: 20px;
  border-radius: 10px;
  transition: all 0.6s;
  cursor: pointer;
  &:hover {
    background: #0033ff;
    color: whitesmoke;
  }
}
</style>
