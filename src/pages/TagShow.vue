<template>
  <v-container class=" tag-show">
      <Loading :state="loading"></Loading>
      これから作ります
  </v-container>
</template>

<script>

// import ContentfulAdapter from '../contentful.js'
import Loading from '../components/Loading.vue'
// import Tags from '../components/Tags.vue'

export default {
  components: { Loading},
//   components: { Loading, Tags, PublishedAt},
  props:{ enName: String },
  data:function(){
    return {
      loading:false,
    }
  },
  methods:{
    setData(){
      var vm = this;
      vm.loading =  true;
    //   ContentfulAdapter.getEntryById(this.id)
        // .then(function (entry) {
        //   vm.loading =  false;
        // })
      }
    },
    created :function(){
      this.setData();
    },
  }
  </script>

<style scoped>

.blog-show{
    text-align:left;
    max-width:680px;
}

</style>
