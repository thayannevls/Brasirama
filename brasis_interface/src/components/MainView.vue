<template>
  <div>
    <h1>{{ faseNum }} - {{ faseNome }}</h1>
    <div id="app">
      <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation" />
      <button v-on:click="nextFase">Próxima</button>
    </div>
    <h2>{{ msg }}</h2>
    <multichoice></multichoice>
  </div>
</template>

<script>
import Lottie from './lottie.vue'
import * as animationData from '../assets/pinjump.json'
import animRanges from '../assets/anims.json'
import MultiChoiceVue from './MultiChoice.vue'
export default {
  name: 'MainView',
  components: {
    'lottie': Lottie,
    'multichoice': MultiChoiceVue
  },
  data () {
    return {
      faseNum: 0,
      fases: ['intro', 'local', 'sexo'],
      msg: 'Você nasceu em ...',
      defaultOptions: {
        animationData: animationData,
        autoplay: false,
        loop: false
      },
      animationSpeed: 1
    }
  },
  computed: {
    faseNome: function () {
      return this.fases[this.faseNum]
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
    nextFase: function (anim) {
      this.faseNum += 1
      this.anim.playSegments(animRanges[this.faseNome], true)
    }
  }
}
</script>

<style scoped>
</style>
