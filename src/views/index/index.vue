<script>
import { Button } from 'vant';
import jquery from 'jquery';

export default {
  components: {
    [Button.name]: Button
  },
  methods: {
    routerPush() {
      console.log(jquery);
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
        '我是render函数',
        h('img', {
          attrs: {
            src: '/dist/static/img/816.jpg'
          },
          style: {
            width: '200px',
            height: '150px'
          }
        })
      ]
    );
  }
};
</script>

<style lang="scss" scoped></style>
