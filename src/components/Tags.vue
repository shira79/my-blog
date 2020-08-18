<template>
    <v-layout>
        <div class = "tag-box" v-for="tag in tags" :key="tag.enName">
          <Tag :tag=tag :showCount=showCount></Tag>
        </div>
    </v-layout>
</template>


<script>
import Tag from '../components/Tag.vue'

export default {
    components: {Tag},
    props: ['tags','showCount'],
}
</script>

<style>

.tag-link{
  color:#7f8d8e!important;
  text-decoration: none;
}

.tag-link:hover {
  color: #c1c1ff!important;
  text-decoration: underline;
}

</style>