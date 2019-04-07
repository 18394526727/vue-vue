<template>
  <div>
    <!-- <button @click="changeRouter">切换</button> -->
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import "@/assets/css/base.css";
export default {
  methods: {
    changeRouter() {
      var path = this.$router.currentRoute.fullPath.split("/").pop();
      this.$router.push(path ? "/" : "/about");
    }
  }
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  // transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter,
.slide-fade-leave-to {
  // transform: translateX(10px);
  opacity: 0;
  transform: translateY(10px) /* rotateZ(10deg) */ scale(0.98);
  background: rgba(0, 0, 0, 0.3);
}
</style>
