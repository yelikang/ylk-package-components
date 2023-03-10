import Vue from 'vue'
import App from './App.vue'
// 引入antd组件库(自身组件库中有依赖)

// 1.组件开发阶段=全局引入(无需引入样式,存在于组件)
// import components from 'packages'
// Vue.use(components)

// 2.组件开发阶段=局部引入(开发阶段重点是组件功能测试，无需关心局部按需引入内容，按需引入主要针对打包后的文件)


//3.组件发布阶段=全量引入(需引入全局css)
// import components from 'lib'
// import 'lib/theme/index.css'
// Vue.use(components)

//4.组件发布阶段=按需引入(需引入个性css,或项目中结合babel-plugin-import做引入)
// 4-1 自行引入
// import {CInput} from 'lib'
// import 'lib/theme/style'
// 4-2 babel-plugin-import 引入(只需要引入对应的组件包即可，style由import插件引入)
// import {CInput} from 'lib'



new Vue({
    el: '#app',
    render: h => h(App)
})