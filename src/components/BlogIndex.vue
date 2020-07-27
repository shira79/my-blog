<template>
  <v-container>
      <v-layout column>
        <v-col v-for="item in items" :key="item.title">
          <v-card>
            <router-link :to="item.sys.id">{{item.fields.title}}</router-link>
            {{item.fields.publishedAt}}
          </v-card>
        </v-col>
      </v-layout>
  </v-container>
</template>

<script>

import ContentfulAdapter from '../contentful.js'

export default {
    data:function(){
      return {
        items:[],
      }
    },
    methods:{
      setData(){
        var vm = this;
        ContentfulAdapter.getBlogs()
          .then(function (entry) {
            vm.items = entry.items;
          })
      }
    },
    created :function(){
      this.setData();
    },
  }
  </script>

<style scoped></style>
