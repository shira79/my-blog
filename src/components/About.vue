<template>
  <v-container>
    <v-row>
      <v-flex md4 xs12>
        <img src="../assets/profile1.png" alt="profile1" class="about-image">
        <span class="pt-4">this is my friend's illustration</span>
      </v-flex>
      <v-flex md8 xs12 class="pl-10 about-text">
        <v-col>##ABOUT ME</v-col>
        {{text}}
      </v-flex>
  </v-row>
</v-container>
</template>

<script>
 export default {
    data:function(){
      return {
        text: "The Autumn SongSummer time is gone I miss it so mucMy board lies in my garageWaiting for the snowy seasonAnd again I would slide\nFriends are alright There's nothing so sadAnd foods are good todayIt looks like thing are going rightBut I feel I'm all alone"
      }
    },
  }
</script>

<style scoped>


.about-image {
  width:100%;
}

.about-text {
  text-align:left;
  font-size: 20px;
  white-space: pre-wrap;
}

@media screen and (max-width: 480px) {
.about-image {
  width:100%;
}
}

</style>
