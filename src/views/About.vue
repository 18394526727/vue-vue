<template>
  <div class="about">
    <div class="top-main">
      <router-link to="/">
        <h1>This is an about page</h1>
      </router-link>
      <a class="a" target="_blank" href="https://www.zhangxinxu.com/wordpress/"
        >张鑫旭的博客</a
      >
      <br />
      <router-link to="/overturn" class="overturn">翻转效果</router-link>
      <div class="attr">
        <h6>线性渐变（指定方向，颜色(位置)）</h6>
        <h5>重复的线性渐变（指定方向，颜色(位置),渐变的距离）</h5>
        <p title="CSS ATTR（函数:attr返回对应元素的attr属性值）">attr：</p>
        <div class="rectangle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="text-shadow">白色文本的阴影效果</p>
        <HelloWorld></HelloWorld>
      </div>
      <ul class="ul">
        <img src="@/assets/images/logo.png" />
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="bottom">main</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@keyframes bgmove {
  from {
    background: #000;
  }
  to {
    background: red;
  }
}
.about {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  .top-main {
    height: calc(100vh - 100px);
    overflow-y: auto;
    .a {
      background: repeating-linear-gradient(
        45deg,
        red 5%,
        blue 10%,
        yellow 15%,
        red 20%
      );
      transition: all 0.6s;
      color: whitesmoke;
      &:after {
        content: "(" attr(href) ")";
      }
      &:hover {
        animation: bgmove 5s 3 cubic-bezier(0.09, 0.82, 0.45, 0.94);
      }
    }
    .attr {
      p {
        background: #000;
        color: whitesmoke;
        background: radial-gradient(circle, red, blue);
        &::after {
          /* attr返回对应元素的attr属性值 */
          content: "(" attr(title) ")";
        }
      }
      h6 {
        /* 线性渐变（指定方向，颜色(位置)） */
        background: linear-gradient(to right, red 5%, yellow 10%, blue);
        &::before {
          content: "\2724";
        }
      }
      h5 {
        background: repeating-linear-gradient(
          to right,
          red,
          yellow 7%,
          green 14%,
          red 20%
        );
        color: whitesmoke;
      }
      .rectangle {
        display: flex;
        > div {
          margin: 5px;
          width: 100px;
          height: 100px;
          border: 1px solid red;
        }
        div:nth-child(1) {
          background: radial-gradient(circle, red, #fff);
        }
      }
      .text-shadow {
        background: #fff;
        color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        line-height: 30px;
      }
    }
    .ul {
      display: flex;
      flex-wrap: wrap;
      width: 200px;
      height: 200px;
      border: 4px solid blue;
      border-radius: 5px;
      position: relative;
      cursor: pointer;
      img {
        position: absolute;
        width: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
      }
      &:hover {
        li {
          transform: scale(1);
        }
      }
      li {
        width: 50px;
        height: 50px;
        box-sizing: border-box;
        background: linear-gradient(45deg, red, yellow);
        border-radius: 5px;
        transform: scale(0);
        transition: all 0.6s cubic-bezier(0.27, 0.45, 0.45, 0.94) 0.1s;
      }
    }
    .overturn {
      background: #cecece;
      transition: all 0.6s;
      &:hover {
        background: rgb(120, 129, 120);
        color: whitesmoke;
      }
    }
  }
  .bottom {
    height: 100px;
    width: 100%;
    background: blue;
  }
}
</style>
