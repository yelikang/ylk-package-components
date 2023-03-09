import Vue from 'vue'
import App from './App.vue'
// 引入antd组件库(自身组件库中有依赖)

// 1.组件开发阶段=全局引入(无需引入样式,存在于组件)
import components from 'packages'
Vue.use(components)

// 2.组件开发阶段=局部引入


//3.组件发布阶段=全量引入(需引入全局css)
import components from 'lib'
import 'lib/style'

//4.组件发布阶段=按需引入(需引入个性css,或结合babel-plugin-import做引入)
// import {CInput} from 'lib'
// import 'lib/c-input/style'


new Vue({
    el: '#app',
    render: h => h(App)
})