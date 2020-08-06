<template>
  <v-container class="blogindex">
    <Loading :state="loading"></Loading>
      <Blogs :blogs="items"></Blogs>
  </v-container>
</template>

<script>

import ContentfulAdapter from '../contentful.js'
import Loading from '../components/Loading.vue'
import Blogs from '../components/Blogs.vue'

export default {
    components:{ Loading, Blogs },
    data:function(){
      return {
        loading:false,
        items:[],
      }
    },
    methods:{
      setData(){
        var vm = this;
        vm.loading = true;
        ContentfulAdapter.getBlogList()
          .then(function (entry) {
            vm.items = entry.items;
            console.log(vm.items[0]);
            vm.loading = false;
          })
      },
    },
    created :function(){
      this.setData();
    },
  }
  </script>

<style scoped>
.blogindex {
  max-width: 680px;
}
</style>
