<template>
    <router-link class = "tag-link" :to="`/tag/${tag.fields.enName}`">
        #{{tag.fields.jaName}}<span v-if="showCount">({{count}})</span>
    </router-link>
</template>

<script>
import ContentfulAdapter from '../contentful.js'

export default {
    props: ['tag','showCount'],
    data:function(){
    return {
        count:0,
    }
  },
    methods:{
      setData(){
          var vm =  this;
        ContentfulAdapter.getBlogCountByTagId(this.tag.sys.id)
        .then(function (entry) {
            vm.count = entry.total;
          })
      },
    },
    created :function(){
        this.setData();
    }
}

</script>

