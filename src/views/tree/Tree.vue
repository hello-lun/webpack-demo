<template>
  <ul class="vue-tree">
    <TreeItem
        v-for="(item, index) in treeData"
        :key="index"
        :treeItemData="item"
        :tree-click-event="treeClickEvent"></TreeItem>
  </ul>
</template>

<script>
import TreeItem from './TreeItem.vue';
export default {
  name: 'VueTreeMenu',
  components: {
    TreeItem
  },
  props: {
    // 树形控件数据
    treeData: {
      type: Array,
      default(){
        return [];
      }
    },
    // 节点点击事件
    treeClickEvent: {
      type: Function,
      default() {
        return function () {};
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.vue-tree{
  list-style: none;
  padding: 0;
  margin: 0;
  .tree-item{
    cursor: pointer;
    transition: background-color .2s;
    .tree-content{
      position: relative;
      padding-left: 28px;
      &:hover{
        background-color: #f0f7ff;
      }
    }
    .expand-arrow{
      position: absolute;
      top: 0;
      left: 0;
      width: 28px;
      height: 28px;
      cursor: pointer;
      &::after{
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        content: ' ';
        border-width: 5px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #ccc;
        margin: -5px 0 0 -2.5px;
        transition: all .2s;
      }
    }
    &.expand{
      &>.tree-content{
        background-color: #f0f7ff;
        &>.expand-arrow{
          &::after{
            transform: rotate(90deg);
            margin: -2.5px 0 0 -5px;
          }
        }
      }
    }
    .tree-label{
      height: 28px;
      line-height: 28px;
      font-size: 14px;
    }
    .sub-tree{
      display: none;
      list-style: none;
      padding: 0 0 0 28px;
      margin: 0;
    }
    &.expand>.sub-tree{
      display: block;
    }
    &.no-child{
      &>.tree-content{
        /*padding-left: 0;*/
        &>.expand-arrow{
          display: none;
        }
      }
    }
  }
}
</style>