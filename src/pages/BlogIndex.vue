<template>
  <v-container class="blogindex">
    <Loading :state="loading"></Loading>
    <div v-if="!loading">
      <Blogs :blogs="items"></Blogs>
      <Pagination :current_page=page :last_page=last_page></Pagination>
    </div>
  </v-container>
</template>

<script>

import ContentfulAdapter from '../contentful.js'
import Loading from '../components/Loading.vue'
import Blogs from '../components/Blogs.vue'
import Pagination from '../components/Pagination.vue'
import utils from '../Mixins/utils'

export default {
    components:{ Loading, Blogs, Pagination },
    mixins: [utils],
    data:function(){
      return {
        loading:false,
        items:[],
        last_page:0,
      }
    },
    computed: {
      page: function () {
        var default_page = 1;
        return (this.$route.query.page === undefined ? default_page : Number(this.$route.query.page));
      }
    },
    methods:{
      setData(){
        var vm = this;

        vm.loading = true;
        ContentfulAdapter.getBlogList(vm.page)
          .then(function (entry) {
            vm.items = entry.items;
            vm.last_page = ContentfulAdapter.getLastPage(entry.total);
            vm.loading = false;
          })
          .catch(function(){
            alert("記事一覧が取得できませんでした");
          })
      },
    },
    created :function(){
      this.setData();
      this.setTitleDesc('ブログ一覧','説明文')
    },
    watch: {
      $route () {
        this.setData();
      }
    },
  }
  </script>

<style scoped>
.blogindex {
  max-width: 680px;
}
</style>
