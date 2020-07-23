import Vue from 'vue'
import VueRouter from 'vue-router'

import hello  from './components/HelloWorld.vue'
import test from './components/Test.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: hello },
    { path: '/test', component: test },
];

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: 'history',
    routes
});

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router