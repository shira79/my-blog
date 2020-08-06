<template>
  <v-container class="tag-show">
      <Loading :state="loading"></Loading>
      <h2>#{{tag.fields.jaName}}</h2>
      <Blogs :blogs="bloglist"></Blogs>
      <h3>全部のタグ</h3>
      <Tags :tags="tagList"></Tags>
  </v-container>
</template>

<script>

import ContentfulAdapter from '../contentful.js'
import Loading from '../components/Loading.vue'
import Blogs from '../components/Blogs.vue'
import Tags from '../components/Tags.vue'

export default {
  components: { Loading, Blogs, Tags},
  props:{ enName: String },
  data:function(){
    return {
        tagList:[],
        tag:[],
        bloglist:[],
        loading:false,
    }
  },
  methods:{
    setData(){
        var vm = this;
        vm.loading =  true;
        ContentfulAdapter.getTagList()
        .then(function (entry) {
            vm.tagList = entry.items;
        })
        //これは非同期でいい

        ContentfulAdapter.getTagByEnName(vm.enName)
        .then(function (entry) {
            vm.tag = entry.items[0];

            ContentfulAdapter.getBlogByTagId(vm.tag.sys.id)
            .then(function (entry) {
                console.log(entry.items);
                vm.bloglist = entry.items;
                vm.loading =  false;
            })
        })
      }
    },
    created :function(){
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

.tag-show{
    text-align:left;
    max-width:680px;
}

</style>
