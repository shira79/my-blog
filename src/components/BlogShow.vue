<template>
  <v-container class="blog">
      <v-layout column>
          <h1>{{title}}</h1>
          <v-col v-html=text></v-col>
      </v-layout>
  </v-container>
</template>

<script>

import ContentfulAdapter from '../contentful.js'
import marked from 'marked'

export default {
    props:{ id: String },
    data:function(){
      return {
        title:"",
        text:"",
        slug:"",
        publishedAt:"",
      }
    },
    methods:{
      setData(){
        var vm = this;
        ContentfulAdapter.getBlog(this.id)
          .then(function (entry) {
            vm.title =  entry.fields.title;
            vm.text =  marked(entry.fields.text);
            vm.slug =  entry.fields.slug;
            vm.publishedAt =  entry.fields.publishedAt;
          })
      }
    },
    created :function(){
      this.setData();
    },
  }
  </script>

<style scoped>
.blog{
    text-align:left;
}

</style>
