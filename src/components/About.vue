<template>
<div>
  <v-container class="page">
      <v-col>{{name}}</v-col>
      <v-col>{{ronaName}}</v-col>
      <v-col v-html=description></v-col>
      <v-layout v-for="link in links" :key=link.name>
        {{link.fields.fontAwesomeIcon}}
        {{link.fields.url}}
      </v-layout>
  </v-container>
  <Aboutpage
    v-for="page in pages"
    :key="page.fields.title"
    :content="page.fields">
  </Aboutpage>

</div>

</template>

<script>

import marked from 'marked'
import ContentfulAdapter from '../contentful.js'
import Aboutpage from './AboutPage'

 export default {
    components: { Aboutpage },
    data:function(){
      return {
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
        ContentfulAdapter.getAboutMe()
          .then(function (entry) {
            vm.name        =  entry.fields.name;
            vm.ronaName    =  entry.fields.romaName;
            vm.description = marked(entry.fields.description);
            vm.links       =  entry.fields.links;
            vm.pages    =  entry.fields.pages;
          })
      }
    },
    created :function(){
      this.setData();
    },
  }
</script>

<style scoped>


.page {
  height:100vh;
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
