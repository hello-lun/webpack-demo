module.exports = {
  //一旦配置了root，ESlint停止在父级目录中查找配置文件
  root: true,
  //想要支持的JS语言选项
  parserOptions: {
    //解析器
    parser: 'babel-eslint',
    //启用ES6语法支持(如果支持es6的全局变量{env: {es6: true}}，则默认启用ES6语法支持)
    //此处也可以使用年份命名的版本号：2015
    ecmaVersion: 6,
    //默认为script
    sourceType: 'module',
    //支持其他的语言特性
    ecmaFeatures: {
      legacyDecorators: true,// 支持typescript的装饰器
    }
  },
  //代码运行的环境，每个环境都会有一套预定义的全局对象，不同环境可以组合使用
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    jquery: true,
    node: true, //配置这个，项目不会报__dirname,require is undefined的错误
  },
  //访问当前源文件中未定义的变量时，no-undef会报警告。
  //如果这些全局变量是合规的，可以在globals中配置，避免这些全局变量发出警告
  globals: {
    //配置给全局变量的布尔值，是用来控制该全局变量是否允许被重写
    test_param: true
  },
  //支持第三方插件的规则，插件以eslint-plugin-作为前缀，配置时该前缀可省略
  //检查vue文件需要eslint-plugin-vue插件 // 校验.vue文件的template需要prettier
  plugins: ['vue', 'prettier'],
  //集成推荐的规则
  extends: ['plugin:vue/recommended', 'prettier', 'prettier/vue'],
  //启用额外的规则或者覆盖默认的规则
  //规则级别分别：为'off'(0)关闭、'warn'(1)警告、'error'(2)错误--error触发时，程序退出
  rules: {
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore',
        semi: true, // 是否需要分号
        singleQuote: true, // 是否使用单引号
        printWidth: 120, // 一行代码超过140个字符就换行
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ],
    'no-unused-vars': 'error',
    'vue/no-use-v-if-with-v-for': ['off'],
    'vue/component-name-in-template-casing': ['off'],
    'vue/name-property-casing': ['off'],
    'vue/no-unused-components': ['off'],
    //关闭“禁用console”规则
    'no-console': 'off',
    //定义字符串不规范错误，要求字符串使用双引号
    quotes: ['error', 'single'],
    //....
    //更多规则可查看http://eslint.cn/docs/rules/
  }
}