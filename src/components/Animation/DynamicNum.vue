<template>
  <span>
    {{ animatedNumber }}
  </span>
</template>
<script>
import { TweenLite } from "gsap/TweenMax";
export default {
  props: {
    number: { type: Number, default: 0 }
  },
  data() {
    return { tweenedNumber: 0 };
  },
  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    number: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  }
};
</script>
