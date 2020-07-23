<template>
    <v-container>
        <v-layout>
            <v-tab @click="pushTop">Top</v-tab>
            <v-spacer></v-spacer>
            <v-tab @click="pushAbout">about</v-tab>
            <v-tab @click="pushBlog">blog</v-tab>
            <v-tab @click="pushContact">contact</v-tab>
        </v-layout>
    </v-container>
</template>


<style>
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
                this.$router.push('/blog');
            },
            pushContact(){
                this.$router.push('/contact');
            },
        },
    }

</script>

