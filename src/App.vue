<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import home from './views/home/index.vue';
import loadsh from 'loadsh';

export default {
  name: 'index',

  data() {
    return {};
  },

  computed: {},

  mounted() {
    console.log(loadsh);
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.wrap {
  color: red;

  &-p {
    font-size: 25px;
    color: orange;
  }
}
</style>
>
