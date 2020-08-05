<template>
  <v-container class="blogindex">
    <Loading :state="loading"></Loading>
    <v-layout column>
      <v-col class="blog-item" v-for="item in items" :key="item.title">
          <h3><router-link class="blog-link" :to="item.sys.id">{{item.fields.title}}</router-link></h3>
          <Tags :tags="item.fields.tags"></Tags>
          <PublishedAt :publishedAt="item.fields.publishedAt"></PublishedAt>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>

import ContentfulAdapter from '../contentful.js'
import Loading from '../components/Loading.vue'
import Tags from '../components/Tags.vue'
import PublishedAt from '../components/PublishedAt.vue'

export default {
    components:{ Loading, Tags, PublishedAt },
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
  padding-top: 20px;
  margin-bottom: 30px;
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
