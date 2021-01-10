import Vue from 'vue'
import VueRouter from 'vue-router'

import Top  from './pages/Top.vue'
import About from './pages/About.vue'
import BlogIndex from './pages/BlogIndex.vue'
import BlogShow from './pages/BlogShow.vue'
import TagShow from './pages/TagShow.vue'
import Kojiki from './pages/Kojiki.vue'
import Arigato from './pages/Arigato.vue'
import NotFound from './pages/NotFound.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Top },
    { path: '/about', component: About },
    { path: '/blogs', component: BlogIndex },
    ///blog/:idでgithubに貼っちゃったからこのまま残すw
    { path: '/blog/:id', component: BlogShow, props: true },
    { path: '/blogs/:id', component: BlogShow, props: true },
    { path: '/tag/:enName', component: TagShow, props: true },
    { path: '/kojiki', component: Kojiki },
    { path: '/arigato', component: Arigato },
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