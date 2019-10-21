<template>
  <div class="wrap">
    <h1 style="color: blue;">404</h1>
    <h1 style="color: blue;">版本2</h1>
    <!-- <van-button type="danger" @click="routerPush">危险按钮</van-button>
    <func info="name" age="23" @clikcInfo="clikcInfo" @input.native="clikcInfo">
      <strong slot="strong" style="color: pink;">强壮</strong>
    </func> -->
  </div>
</template>

<script>
import { Button } from 'vant';
import func from './funcional';

export default {
  components: {
    [Button.name]: Button,
    func
  },
  methods: {
    clikcInfo() {
      console.log(4444);
    },
    routerPush() {
      this.$router.push('/info');
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  color: #dddddd;
}
</style>
