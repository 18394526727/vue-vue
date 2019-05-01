<template>
  <div>
    <dynamic-num :number="number"></dynamic-num>
  </div>
</template>
<script>
import { setInterval } from "timers";
export default {
  data() {
    return {
      number: 0
    };
  },
  mounted() {
    this.add();
  },
  methods: {
    add() {
      let timer = setInterval(() => {
        this.number += 100;
        if (this.number === 10000) {
          window.clearInterval(timer);
        }
      }, 3000);
    }
  }
};
</script>
<style lang="scss" scoped></style>
