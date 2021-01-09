<template>
 <div class = "404-box">
    <div class="text">
      <v-col class = "emoji">😩</v-col>
    <v-col class = "message">The specified URL could not be found.</v-col>
    </div>
  </div>
</template>

<script>
import utils from '../Mixins/utils'

export default {
  mixins: [utils],
  created :function(){
    this.setTitleDesc('404','説明文')
  },
}
</script>

<style scope>

.emoji {
  font-size: 140px;
}

</style>