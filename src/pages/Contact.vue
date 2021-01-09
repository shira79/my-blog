<template>
  <div>
      this is contact
  </div>
</template>

<script>
import utils from '../Mixins/utils'

export default {
  mixins: [utils],
  created :function(){
    this.setTitleDesc('Contact','KANE KURE')
  },
}
</script>

<style scoped></style>
