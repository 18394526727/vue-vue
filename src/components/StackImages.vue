<template>
  <div class="stack-images-root">
    <div class="img-stage">
      <img
        class="img"
        v-for="(img, index) in imgs"
        :key="index"
        :src="img"
        alt
      />
      <p class="text-love">
        牵你手&nbsp;跟着我走
        <br />风再大又怎样&nbsp;你有了我 <br />再也不会迷路方向<br />
        陪你去看流星雨落在这地球上
        <br />让你的泪落在我肩膀 <br />要你相信我的爱只肯为你勇敢
        <br />你会看见&nbsp;幸福的所在
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgs: [Array]
  }
};
</script>
<style lang="scss" scoped>
.stack-images-root {
  margin: 100px 100px;
  .img-stage {
    position: relative;
    width: 300px;
    height: 500px;
    transform: rotate(-30deg) skew(25deg) scale(0.8) translateX(100px);
    .img,
    .text-love {
      width: 100%;
      display: block;
      position: absolute;
      transition: all 0.5s;
      top: 0;
      left: 0;
    }
    .text-love {
      opacity: 0;
      font-weight: 600;
      font-size: 20px;
      box-sizing: border-box;
      padding: 20px;
      color: pink;
      background: rgba($color: #b93434, $alpha: 0.1);
    }
    &:hover {
      .img:nth-child(1) {
        opacity: 0.4;
      }
      .img:nth-child(2) {
        transform: translate(40px, -40px);
        opacity: 0.6;
      }
      .img:nth-child(3) {
        transform: translate(80px, -80px);
        opacity: 0.8;
      }
      .img:nth-child(4) {
        transform: translate(120px, -120px);
        opacity: 1;
      }
      .text-love {
        opacity: 1;
        transform: translate(160px, -160px);
      }
    }
  }
}
</style>
