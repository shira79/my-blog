<template>
  <div>
    <v-container class="about" xs=10>
      <h1>ABOUT</h1>
      <Loading :state="loading"></Loading>
        <v-col>{{name}}   {{ronaName}}</v-col>
        <v-col>
          <a v-for="link in links" :key=link.name :href="link.fields.url" target = "_blank">
            <v-icon>mdi-{{link.fields.fontAwesomeIcon}}</v-icon>
          </a></v-col>
        <v-col class="markdown-body" v-html=description></v-col>
        <v-col
        v-for="page in pages"
        :key="page.fields.title"
        class="markdown-body"
        v-html="compileMarkdown(page.fields.body)"></v-col>
      </v-container>
  </div>
</template>

<script>

import marked from 'marked'
import ContentfulAdapter from '../contentful.js'
import Loading from './Loading.vue'

 export default {
    components:{ Loading },
    data:function(){
      return {
        loading:false,
        name :"",
        ronaName:"",
        description:"",
        links:[],
        pages:[],
      }
    },
    methods:{
      setData(){
        var vm = this;
        vm.loading =  true;
        ContentfulAdapter.getAboutMe()
          .then(function (entry) {
            vm.name        =  entry.fields.name;
            vm.ronaName    =  entry.fields.romaName;
            vm.description = vm.compileMarkdown(entry.fields.description);
            vm.links       =  entry.fields.links;
            vm.pages    =  entry.fields.pages;
            vm.loading =  false;
          })
      },
      compileMarkdown(text){
            return marked(text)
        }
    },
    created :function(){
      this.setData();
    },
  }
</script>

<style scoped>

.about{
  max-width:680px;
  text-align:left;
}

.about-image {
  width:100%;
}

.about-text {
  text-align:left;
  font-size: 20px;
  white-space: pre-wrap;
}

@media screen and (max-width: 480px) {
  .about-image {
    width:100%;
  }
}

</style>
