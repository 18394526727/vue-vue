<template>
  <div v-drag-and-drop:options="option">
    <vue-draggable-group
      v-for="(group, index) in groups"
      v-model="group.items"
      :groups="groups"
      :key="index"
      :data-id="group.id"
      @change="onGroupsChange"
    >
      <ul class="ul">
        <li
          class="li"
          v-for="(item, index_) in group.items"
          :key="index_"
          :data-id="item.id"
        >
          <label v-text="item.name"></label>
        </li>
      </ul>
    </vue-draggable-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        {
          id: 11,
          items: [
            { name: "打钩", id: 1 },
            { name: "二钩", id: 2 },
            { name: "三钩", id: 3 },
            { name: "四钩", id: 4 }
          ]
        },
        {
          id: 11,
          items: [
            { name: "打钩", id: 1 },
            { name: "二钩", id: 2 },
            { name: "三钩", id: 3 },
            { name: "四钩", id: 4 }
          ]
        },
        {
          id: 11,
          items: [
            { name: "打钩", id: 1 },
            { name: "二钩", id: 2 },
            { name: "三钩", id: 3 },
            { name: "四钩", id: 4 }
          ]
        }
      ],
      option: {
        dropzoneSelector: "ul",
        draggableSelector: "li",
        handlerSelector: null,
        reactivityEnabled: true,
        multipleDropzonesItemsDraggingEnabled: true,
        showDropzoneAreas: true
        /* onDrop: function(event) {},
        onDragstart: function(event) {},
        onDragend: function(event) {} */
      }
    };
  },
  methods: {
    onGroupsChange(data) {
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.ul {
  border: 1px solid red;
  margin: 15px;
  .li {
    border: 1px solid blue;
    margin: 5px;
    background: #00f000;
  }
}
</style>
