<script>
import { Button } from 'vant';
import tscom from '../ts/index';

export default {
  components: {
    [Button.name]: Button,
    tscom
  },
  methods: {
    routerPush() {
      console.log(jQuery, 11189);
      this.$router.push('/info');
    }
  },
  render(h) {
    return h(
      'h1',
      {
        style: { color: 'orange' },
        on: {
          click: this.routerPush
        }
      },
      [
        '我是首页',
        // h(tscom)
      ]
    );
  }
};
</script>

<style lang="scss" scoped></style>
