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
@import "../node_modules/highlight.js/styles/github-gist.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

.markdown-body code {
  background-color: transparent !important;
}


.v-container {
  max-width: 1100px;
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

.markdown-body code {
  color: #24292E!important;
  font-weight: lighter!important;
}

.markdown-body a {
  color: #c1c1ff!important;
}

</style>

