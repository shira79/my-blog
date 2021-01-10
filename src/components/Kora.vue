<template>
    <v-col>
        <img :src="require('@/assets/' + this.image)">
    </v-col>
</template>

<script>
export default {
    props:{ image: String, },
    data: function(){
        return {}
    },
}
</script>


<style scoped>
img{
    width:400px;
    height: auto;
}
@media (max-width: 400px) {
  img{
    width: 100%;
    height: auto;
    }
}
</style>
