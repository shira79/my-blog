<template>
  <v-container class = "top-box">
    <div class="text">
      <v-col class = "greeting">HELLO, MY FRIEND.</v-col>
    <v-col class = "message">This is Shirakawa's website made by vue.js & vuetify & vue-router & netlify</v-col>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Top',
}
</script>

<style>
.top-box {
  height: calc(100vh - 80px);
  text-align: center;

   position: relative;
}

.text {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 50vh;
}

.greeting {
  font-size: 60px;
  font-weight: bold;
}

.message {
  font-size: 20px;
}
</style>
