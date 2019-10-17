<template>
  <div>
    <h2>我是详情页面</h2>
    <!-- <component :is="show" />
    <h3 @click="test">点这里</h3>
    <van-button type="danger" @click="routerPush">危险按钮</van-button>

    <p class="wrap-p">1231</p> -->
  </div>
</template>

<script>
import loadsh from 'loadsh';
import { Button } from 'vant';

export default {
  components: {
    [Button.name]: Button
  },
  data() {
    return {
      show: ''
    };
  },
  created() {
    console.log(loadsh, 666);
  },
  methods: {
    test() {
      // let loadsh = import('loadsh');
      this.show = 'info';
    },
    routerPush() {
      this.$router.push('/info');
    }
  }
};
</script>

<style lang="scss" scoped></style>
