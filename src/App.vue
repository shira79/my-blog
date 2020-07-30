<template>
    <v-app>
        <Navbar></Navbar>
        <router-view></router-view>
    </v-app>
</template>

<script>


import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
@import "../node_modules/github-markdown-css/github-markdown.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

.v-container {
  max-width: 680px;
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 680px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

.markdown-body .highlight pre,
  .markdown-body pre{
    background-color: #364649;
}

.markdown-body code {
  color:white!important;
}

</style>

