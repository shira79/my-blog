<template>
    <v-container class="page about-page">
      <h2>{{content.title}}</h2>
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
    created :function(){},
  }
</script>

<style scoped>
.about-page{
    max-width:800px;
    text-align:left;
}


</style>
