<template>
  <div class="image-box-root">
    <img class="img" :src="img" alt />
    <p class="text">{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    img: [Object, String]
  }
};
</script>
<style lang="scss" scoped>
.image-box-root {
  height: 480px;
  position: relative;
  width: 270px;
  overflow: hidden;
  cursor: pointer;
  .img {
    height: 100%;
    display: block;
    opacity: 1;
    transition: all 5s;
  }
  .text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    background: pink;
    // -webkit-background-clip: text;
    color: white;
    font-size: 20px;
    opacity: 0;
    transition: all 5s;
  }
  &:hover {
    .img {
      opacity: 0;
    }
    .text {
      opacity: 1;
    }
  }
}
</style>
