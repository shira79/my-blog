<template>
  <v-container class="blogindex">
    <Loading :state="loading"></Loading>
      <v-layout column>
        <v-col class="blog-item" v-for="item in items" :key="item.title">
            <h3><router-link class="blog-link" :to="item.sys.id">{{item.fields.title}}</router-link></h3>
            <div v-if="item.fields.publishedAt">{{formatPublishedAt(item.fields.publishedAt)}}</div>
            <div v-else> unknown</div>
        </v-col>
      </v-layout>
  </v-container>
</template>

<script>

import ContentfulAdapter from '../contentful.js'
import Loading from '../components/Loading.vue'

export default {
    components:{ Loading },
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
        ContentfulAdapter.getBlogs()
          .then(function (entry) {
            vm.items = entry.items;
            vm.loading = false;
          })
      },
      formatPublishedAt(date){
        var result = date.split( 'T' );
        return result[0]
        //todo blogShowでも使いたいから移動する
      }
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

.blog-item {
  border-bottom:thin solid #7f8c8d;
  text-align: left;
  color:#7f8c8d;
  margin-bottom: 50px;
}

.blog-link{
  color:black;
  text-decoration: none;
}

.blog-link:hover {
  color: #c1c1ff;
  text-decoration: underline;
}
</style>
