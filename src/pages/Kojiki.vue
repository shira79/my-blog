<template>
  <v-container>
    <v-col>
        <Kora  v-show="!loading" image="kojiki.jpeg"></Kora>
        <Kora  v-show="loading" image="wait.jpeg"></Kora>
    </v-col>
    <div>
      <v-btn v-show="!loading" @click="redirectQrPage" dark depressed color="#42B2C1">
      paypayで100円送る(今はテストモード)
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'
import utils from '../Mixins/utils'
import Kora from '../components/Kora.vue'

export default {
  mixins: [utils],
  components:{ Kora },
  data: function(){
        return {
            url:[],
            loading : false,
        }
    },
  created :function(){
    this.setTitleDesc('Kojiki','KANE KURE')
  },
  methods:{
    redirectQrPage(){
      var url = 'https://lhrmszf70k.execute-api.ap-northeast-1.amazonaws.com/paypay_qr_blog';
      var vm = this;
      vm.loading =  true;
      axios.get(url)
        .then(function (response){
          vm.url = response.data.data.url;
          setTimeout(function(){
            window.location.href = response.data.data.url;
          }, 2*1000);
        })
        .catch(function (error) {
            console.log(error);
            alert("エラー起きました、もう一度読み込んでください");
        });
    },
  }
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
