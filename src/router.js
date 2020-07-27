import Vue from 'vue'
import VueRouter from 'vue-router'

import Top  from './components/Top.vue'
import About from './components/About.vue'
import BlogIndex from './components/BlogIndex.vue'
import BlogShow from './components/BlogShow.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Top },
    { path: '/about', component: About },
    { path: '/blog/index', component: BlogIndex },
    { path: '/blog/:id', component: BlogShow, props: true },
    { path: '/contact', component: Contact },
    { path: '*', component: NotFound }
];

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: 'history',
    routes
});

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router