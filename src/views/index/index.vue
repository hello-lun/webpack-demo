<script>
import { Button } from 'vant';

export default {
  components: {
    [Button.name]: Button,
  },
  render (h) {
    return h('h1', {
      style: {color: 'red'},
      on: {
        click: this.routerPush,
      },
    }, [
      '我是render函数'
    ])
  },
  methods: {
    routerPush () {
      this.$router.push('/info');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>