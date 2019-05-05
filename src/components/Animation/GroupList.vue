<template>
  <transition-group name="list" mode="out-in" tag="div" class="span-group">
    <!--v-on:before-enter="beforeEnter"
    v-on:after-enter="afterEnter"-->
    <span class="span" v-for="item in list" :key="item">{{ item }}</span>
  </transition-group>
</template>
<script>
export default {
  props: {
    list: {
      type: String
    }
  },
  methods: {
    /* beforeEnter: function(el) {
      // ...
    },
    afterEnter: function(el) {
      // ...
    } */
  }
};
</script>
<style lang="scss" scoped>
.span-group {
  color: red;
  border: 1px solid red;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  .span {
    margin: 0 10px;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.4s;
}
.list-enter {
  opacity: 0;
  transform: translateX(-30px);
  color: blue;
}
.list-leave-to {
  color: black;
  opacity: 0;
  font-weight: 900;
  transform: translate(50px, -50px);
}
</style>
