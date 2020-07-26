<template>
    <v-container class="page about-page">
      <v-col>{{content.title}}</v-col>
      <v-col v-html=compileMarkdown(content.body)></v-col>
    </v-container>
</template>

<script>

import marked from 'marked'

 export default {
    props:{
        content:{
            type: Object,
            required: true
        }
    },
    data:function(){
      return {}
    },
    methods:{
        compileMarkdown(text){
            return marked(text)
        }
    },
    created :function(){
      console.log(this.content);
    },
  }
</script>

<style scoped>
.about-page{
    text-align:left;
}


</style>
