<template>
  <div id="app" class="app">
    <VueTree :tree-data="treeData2" :tree-click-event="treeClickEvent" />
  </div>
</template>

<script>
import VueTree from './Tree.vue';

export default {
  name: 'app',
  components: {
    VueTree
  },
  data() {
    return {
      treeData2: [
        {
          text: '一级', // 显示的文字
          expand: false, // 默认是否展开
          children: [
            {
              text: '二级-1',
              expand: false
            },
            {
              text: '二级-2',
              expand: false,
              children: [
                {
                  text: '三级-1',
                  expand: false
                },
                {
                  text: '三级-2',
                  expand: false,
                  children: [
                    {
                      text: '四级-1',
                      expand: false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          text: '一级-2',
          expand: false
        }
      ]
    };
  },
  methods: {
    treeClickEvent(item, treeItem) {
      // console.log(item, treeItem);
    }
  }
};
</script>
