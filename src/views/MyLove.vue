<template>
  <div class="my-love-root">
    <image-box
      v-for="(item, index) in imgs"
      :key="index"
      :text="item.text"
      :img="item.img"
    ></image-box>
    <stack-images :imgs="images"></stack-images>
    <div class="love-text-wrap">
      <p class="love-text">
        我要和杰丽宝宝在一起，永远不分离，当初的承诺，我仍清晰地记着：我要牵着你的手，一直走到最后
      </p>
      <p class="love-text-top">杰丽，我爱你，一直爱，一直&nbsp;深爱</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        {
          img: require("@/assets/images/20190607180856.jpg"),
          text:
            "我的杰丽是多么清纯的姑娘，脸上有可爱的婴儿肥，每每看到，都想亲我的杰丽的小脸蛋"
        }
      ],
      images: [
        require("@/assets/images/20190607180834.jpg"),
        require("@/assets/images/20190607180834.jpg"),
        require("@/assets/images/20190607180834.jpg"),
        require("@/assets/images/20190607180834.jpg")
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.my-love-root {
  box-sizing: border-box;
  padding: 20px 40px;
  display: flex;
  flex-wrap: wrap;
  .love-text-wrap {
    flex: 0 0 100%;
    position: relative;
    cursor: pointer;
    .love-text {
      background: linear-gradient(to right, red, blue);
      box-sizing: border-box;
      color: whitesmoke;
      padding: 10px 20px;
      border-radius: 8px;
    }
    .love-text-top {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: red;
      color: pink;
      text-align: center;
      border-radius: 8px;
      font-size: 20px;
      line-height: 40px;
      transition: all 0.8s;
      opacity: 0;
      z-index: -1;
      font-weight: 600;
    }
    &:hover {
      .love-text-top {
        transform: translateY(-100%);
        opacity: 1;
      }
    }
  }
}
</style>
