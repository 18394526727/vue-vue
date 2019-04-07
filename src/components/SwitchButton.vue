<template>
  <div class="button-root" @click="$emit('input', !value)">
    <div
      style="background:green"
      class="dot"
      :class="{ 'dot-active': value }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@mixin dot-pos($left) {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.4s;
  position: absolute;
  top: 0;
  left: $left;
}
.button-root {
  cursor: pointer;
  width: 35px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #cdcdcd;
  background: #cdcdcd;
  position: relative;
  .dot {
    @include dot-pos(0px);
  }
  .dot-active {
    @include dot-pos(15px);
  }
}
</style>
