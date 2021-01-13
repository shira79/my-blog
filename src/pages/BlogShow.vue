<template>
  <v-container class="blog-show">
      <Loading :state="loading"></Loading>
      <v-layout column v-if="!loading">
        <h1>{{title}}</h1>
        <Tags :tags="tags"></Tags>
        <PublishedAt :publishedAt="publishedAt"></PublishedAt>
        <v-col class="markdown markdown-body" v-html=text></v-col>
      </v-layout>
      <Socials></Socials>

  </v-container>
</template>

<script>

import ContentfulAdapter from '../contentful.js'
import marked from 'marked'
import hljs from 'highlight.js'
import Loading from '../components/Loading.vue'
import Tags from '../components/Tags.vue'
import PublishedAt from '../components/PublishedAt.vue'
import Socials from '../components/Socials.vue'
import utils from '../Mixins/utils'

export default {
  components: { Loading, Tags, PublishedAt, Socials},
  mixins: [utils],
  props:{ id: String },
  data:function(){
    return {
      loading:false,
      title:"",
      text:"",
      slug:"",
      tags:"",
      publishedAt:"",
    }
  },
  methods:{
    setData(){
      var vm = this;
      vm.loading =  true;
      ContentfulAdapter.getEntryById(this.id)
        .then(function (entry) {
          vm.title =  entry.fields.title;
          vm.text =  marked(entry.fields.text);
          vm.slug =  entry.fields.slug;
          vm.publishedAt =  entry.fields.publishedAt;
          vm.tags =  entry.fields.tags;
          vm.loading =  false;
          vm.setTitleDesc(vm.title,'説明文')
        })
        .catch(function(){
          alert("記事が取得できませんでした");
        })
      }
    },
    created :function(){
      marked.setOptions({
        langPrefix: '',
        breaks:true,
        highlight: function(code, lang) {
          return hljs.highlightAuto(code, [lang]).value
        }
      });

      this.setData();
    },
    watch: {
      $route () {
        this.setData();
      }
    },
  }
  </script>

<style scoped>

.blog-show{
    text-align:left;
    /* width:70%; */
    max-width:870px;
}

</style>
