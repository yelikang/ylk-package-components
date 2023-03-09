// 全量打包主入口
const pkg = require('../package.json')

import CInput from './c-input'
import CSelect from './c-select'
const components = {
    CInput,
    CSelect
}


export default {
    version: pkg.version,
    install(Vue, opts) {
        Object.keys(components).forEach(key => {
            Vue.component(key, components[key])
        })
    },
    ...components
}
