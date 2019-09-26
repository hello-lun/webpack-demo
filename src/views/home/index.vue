<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <img src="../../assets/img/123.jpg" style="width: 100px;height: 100px;" @click="dialog" />
  </div>
</template>

<script>
import { DropdownMenu, DropdownItem, Dialog } from 'vant';
import axios from 'axios';

export default {
  components: {
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
        { text: '活动商品', value: 2 }
      ],
      option2: [{ text: '默认排序', value: 'a' }, { text: '好评排序', value: 'b' }, { text: '销量排序', value: 'c' }]
    };
  },
  created() {
    let dinglun = () =>
      import('loadsh').then(res => {
        console.log(res, '我爱你啊啊啊啊啊啊啊');
      });

    dinglun();
  },
  methods: {
    dialog() {
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      })
        .then(() => {
          console.log(123654);
          axios
            .get('/user?ID=12345')
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });
          // on confirm
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
