<template>
  <div>
    <v-container class="aboutme" xs=10>
      <h1>ABOUT</h1>
        <v-col>{{name}}   {{ronaName}}</v-col>
        <v-col>
          <a v-for="link in links" :key=link.name :href="link.fields.url" target = "_blank">
            <v-icon>mdi-{{link.fields.fontAwesomeIcon}}</v-icon>
          </a></v-col>
        <v-col v-html=description></v-col>
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


.aboutme{
  min-height:100vh;
  max-width:800px;
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
