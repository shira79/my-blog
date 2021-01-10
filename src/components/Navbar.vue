<template>
    <v-container class="nav">
        <v-layout class="tabs">
            <v-tab @click="pushTop">Top</v-tab>
            <v-spacer></v-spacer>
            <v-tab @click="pushAbout">about</v-tab>
            <v-tab @click="pushBlog">blog</v-tab>
            <v-tab @click="pushKojiki">kojiki</v-tab>
        </v-layout>
    </v-container>
</template>


<style>
.nav {
    height:80px;
}

.tabs {
    height:100%;
}
</style>

<script>
export default {
    methods:{
        pushTop(){
            this.$router.push('/');
        },
        pushAbout(){
            this.$router.push('/about');
        },
        pushBlog(){
            this.$router.push('/blogs');
        },
        pushKojiki(){
            this.$router.push('/kojiki');
        },
    },
}

</script>

