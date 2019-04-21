import Vue from "vue";

const Math_ = {
  getSquare(num) {
    return Math.pow(num, 2);
  }
};

Vue.prototype.$Math_ = Math_;
