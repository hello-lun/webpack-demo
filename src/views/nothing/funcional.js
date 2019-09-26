import home from '../home/index.vue';
export default {
  functional: true,
  props: {
    info: {
      type: String,
      default: ''
    },
    age: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    console.log(context.slots(), 'listeners');
    return h('div', null, [
      h(
        'h2',
        {
          style: { color: 'blue' },
          on: {
            click: context.listeners.clikcInfo
          }
        },
        [context.props.age, context.props.info, context.slots().strong]
      ),
      h(home)
    ]);
  }
};
