/* 
  该文件是整个项目的入口文件
*/
import Vue from 'vue' // 引入vue
import App from './App.vue' // 引入App组件，它是所有组件的父组件(一人之下万人之上)

Vue.config.productionTip = false // 关闭生产提示

/* 
  引入精简版的vue.js文件，没有模板解析器，只能用render函数替代好处是省点空间(企业开发常用，Vue默认写法)
  render -> vDom(虚拟dom) -> UI界面
*/
new Vue({
  render: h => h(App),
}).$mount('#app');

/* 
  需要引入完整版的vue.js,有模板解析器，render函数，或者template属性的方式都可，浪费了一点空间
  template -> ats(抽象语法树) -> render -> vDom(虚拟dom) -> UI界面
*/
new Vue({
  el:'#app',
  template: '<App/>',
  components:{
    App
  }
})