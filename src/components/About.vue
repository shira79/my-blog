<template>
  <v-container>
    <v-row>
      <v-flex md4 xs12>
        <img src="../assets/profile1.png" alt="profile1" class="about-image">
        <span class="pt-4">this is my friend's illustration</span>
      </v-flex>
      <v-flex md8 xs12 class="pl-10 about-text">
          <div v-html="text"></div>
      </v-flex>
  </v-row>
  
</v-container>
</template>

<script>

import marked from 'marked'
import ContentfulAdapter from '../contentful.js'

 export default {
    data:function(){
      var text = "### ABOUT ME\nMy name is Shirakawa.  I am a web developer.  Now I study PHP,Laravel,AWS.\n#### Resume\n- 2020/04 join\n- 2020/05 test"
      return {
        text: marked(text),
      }
    },
    methods:{
      test(){
        ContentfulAdapter.getAllData()
          .then(function (entry) {
            console.log(entry);
          })
        ContentfulAdapter.getAbout()
        .then(function (entry) {
          console.log("aboutをとりたい");
            console.log(entry);
          })

          ContentfulAdapter.getProjects()
        .then(function (entry) {
          console.log("projectをとりたい");
            console.log(entry);
          })

      }
    },
    mounted() {
       this.test();
  },
  }
</script>

<style scoped>


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
