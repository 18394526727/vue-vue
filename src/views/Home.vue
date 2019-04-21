<template>
  <div class="home">
    <aside class="aside">
      <div class="head">
        <svg class="icon name" aria-hidden="true">
          <use xlink:href="#icon-qiang"></use>
        </svg>
        <svg class="icon car" aria-hidden="true">
          <use xlink:href="#icon-Bulldozer"></use>
        </svg>
      </div>
      <ul class="ul">
        <router-link
          tag="li"
          class="li"
          v-for="(item, index) in routers"
          :key="index"
          :to="item.url"
          >{{ item.name }}</router-link
        >
      </ul>
    </aside>
  </div>
</template>

<script>
// import Vue from "vue";

export default {
  name: "home",
  data() {
    return {
      routers: [{ url: "/about", name: "CSS" }, { url: "/drag", name: "DRAG" }]
    };
  },
  mounted() {
    console.log(this.$Math_);
  }
};
</script>
<style lang="scss" scoped>
.home {
  .aside {
    width: 200px;
    height: 100vh;
    box-sizing: border-box;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    .head {
      .name {
        width: 30px;
        color: red;
      }
    }
    .ul {
      box-sizing: border-box;
      padding: 5px 10px;
      color: white;
      background: rgb(145, 143, 238);
      .li {
        background: rgb(147, 195, 223);
        border-radius: 3px;
        box-sizing: border-box;
        margin: 5px 0;
        padding: 10px;
        transition: all 0.8s;
        cursor: pointer;
        &:hover {
          background: #ffffff;
          color: white;
          text-shadow: 1px 1px 3px #000;
        }
      }
    }
  }
}
</style>
