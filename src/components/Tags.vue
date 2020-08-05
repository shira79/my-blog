<template>
    <v-layout>
        <div class = "tag-box" v-for="tag in tags" :key="tag.enName">
          <router-link class = "tag-link" :to="`/tag/${tag.fields.enName}`">
            #{{tag.fields.jaName}}
          </router-link>
        </div>
    </v-layout>
</template>


<script>
export default {
    props: ['tags'],
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