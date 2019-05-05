<template>
  <div>
    <dynamic-num class="number" :number="number"></dynamic-num>
    <div class="buttons">
      <button class="increase" @click="add">+</button>
      <button class="sub" @click="sub">-</button>
    </div>
    <group-list :list="list"></group-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 0,
      list: []
    };
  },
  mounted() {
    this.increase();
  },
  methods: {
    increase() {
      let timer = window.setInterval(() => {
        this.number += 200;
        if (this.number === 1000) {
          window.clearInterval(timer);
          timer = null;
        }
      }, 3000);
    },
    add() {
      this.list.push((Math.random() * 100).toFixed(2));
    },
    sub() {
      this.list.splice(this.randomIndex(), 1);
    },
    randomIndex: function() {
      return Math.floor(Math.random() * this.list.length);
    }
  }
};
</script>
<style lang="scss" scoped>
.number {
  font-size: 30px;
  color: blue;
  filter: brightness(80);
}
</style>
