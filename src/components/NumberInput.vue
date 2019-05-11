<template>
  <div>
    <el-input
      :value="value"
      v-model="val"
      @input="$emit('input', val)"
    ></el-input>
  </div>
</template>
<script>
export default {
  props: {
    value: [String, Number]
  },
  data() {
    return {
      val: ""
    };
  }
};
</script>
<style lang="scss" scoped></style>
