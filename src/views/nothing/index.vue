<template>
  <div class="wrap">
    <h1>404</h1>
    <van-button type="danger" @click="routerPush">危险按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';

export default {
  components: {
    [Button.name]: Button,
  },
  methods: {
    routerPush () {
      this.$router.push('/info');
    }
  }
}
</script>

<style lang="scss" scoped>

.wrap {
  width: 100%;
  background: pink;
  color: #dddddd;
}

</style>