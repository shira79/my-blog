<template>
  <div>
    <v-container class="about" xs=10>
      <h1>ABOUT</h1>
      <img height="160" width="160" src="@/assets/icon.gif">
      <img height="160" width="160" src="@/assets/icon.gif">
      <img height="160" width="160" src="@/assets/icon.gif">
      <img height="160" width="160" src="@/assets/icon.gif">
      <Loading :state="loading"></Loading>
      <!-- <v-col>{{name}}</v-col> -->
      <v-col class="markdown-body" v-html=description></v-col>
      <v-col
        v-for="page in pages"
        :key="page.fields.title"
        class="markdown-body"
        v-html="compileMarkdown(page.fields.body)"></v-col>
        <Socials></Socials>

    </v-container>
  </div>
</template>

<script>

import marked from 'marked'
import ContentfulAdapter from '../contentful.js'
import Loading from '../components/Loading.vue'
import Socials from '../components/Socials.vue'
import utils from '../Mixins/utils'

 export default {
    components:{ Loading,Socials },
    mixins: [utils],
    data:function(){
      return {
        loading:false,
        name :"",
        description:"",
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
            vm.description = marked(entry.fields.description);
            vm.pages    =  entry.fields.pages;
            vm.loading =  false;
          })
      },
    },
    created :function(){
      this.setTitleDesc('About','HELLO, MY FRIEND.')
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
