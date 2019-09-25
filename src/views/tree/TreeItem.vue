<template>
  <li class="tree-item" :class="{expand: isExpand, 'no-child': !treeItemData.children || treeItemData.children.length  === 0}">
    <div class="tree-content" @click="_clickEvent">
      <div class="expand-arrow" @click.stop="expandTree()"></div>
      <div class="tree-label">{{treeItemData.text}}</div>
    </div>
    <ul class="sub-tree" v-if="treeItemData.children && treeItemData.children.length > 0">
      <!--TreeItem组件中调用TreeItem组件-->
      <TreeItem
        v-for="item in treeItemData.children"
        :tree-item-data="item"
        :key="uuid()"
        :tree-click-event="treeClickEvent"></TreeItem>
    </ul>
  </li>
</template>

<script>
  export default {
    name: "TreeItem",
    props: {
      treeItemData: {
        type: Object,
        default(){
          return {};
        }
      },
      // 节点点击事件
      treeClickEvent: {
        type: Function,
        default() {
          return function () {};
        }
      }
    },
    data(){
      return {
        // 节点是否展开
        isExpand: this.treeItemData.expand || false
      }
    },
    methods: {
      // 展开/收缩
      expandTree(flag){
        if(!this.treeItemData.children || this.treeItemData.children.length === 0){
          return;
        }
        if(typeof flag === 'undefined'){
          flag = !this.isExpand;
        }else{

          flag = !!flag;
        }
        this.isExpand = flag;
      },
      // 创建一个唯一id
      uuid(){
        let str = Math.random().toString(32);
        str = str.substr(2);
        return str;
      },
      // 节点点击事件
      _clickEvent(){
        // 如果有传递事件函数，则调用事件函数并传递当前节点数据及组件
        if(this.treeClickEvent && typeof this.treeClickEvent === 'function'){
          this.treeClickEvent(this.treeItemData, this);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.tree-item {
  padding-left: 20px;
}
</style>