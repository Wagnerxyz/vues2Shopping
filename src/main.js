import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Mint from 'mint-ui'
//import { Header } from "mint-ui";
import 'mint-ui/lib/style.css'

import router from './router.js'
import moment from  'moment'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'
// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
//Vue.component(Header.name, Header)
//Vue.use(VueRouter)
// 设置请求的根路径
Vue.http.options.root = 'http://localhost:45719/actionapi/vuemall';
Vue.use(Mint);

Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
  })

var vm = new Vue({
    el: '#app',
    render: x => x(App),
    router,
})