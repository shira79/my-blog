<template>
  <v-container>
      <Kora image="aza.jpeg"></Kora>
  </v-container>
</template>

<script>
import utils from '../Mixins/utils'
import Kora from '../components/Kora.vue'

export default {
  mixins: [utils],
  components:{ Kora },
  created :function(){
    this.setTitleDesc('Arigato','説明')
  }
}
</script>
