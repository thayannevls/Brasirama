<template>
  <div>
    <h1>{{ faseNum }} - {{ faseNome }}</h1>
    <div id="app">
      <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation" />
      <button v-on:click="nextFase">Próxima</button>
    </div>
    <h2>{{ msg }}</h2>
    <ops-drag/>
    <multichoice></multichoice>
    <cronometer v-bind:time= "time"></cronometer>
    <schoolbar></schoolbar>
  </div>
</template>

<script>
import Lottie from './lottie.vue'
import OpsDrag from './OpsDrag.vue'
import * as animationData from '../assets/pinjump.json'
import animRanges from '../assets/anims.json'
import MultiChoiceVue from './MultiChoice.vue'
import CronometerVue from './Cronometer.vue'
import Schoolbar from './Schoolbar.vue'

export default {
  name: 'MainView',
  components: {
    'lottie': Lottie,
    'ops-drag': OpsDrag,
    'multichoice': MultiChoiceVue,
    'cronometer': CronometerVue,
    'schoolbar': Schoolbar
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
      animationSpeed: 1,
      time: 10
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
      var animFase = animRanges[this.faseNome]
      this.faseNum += 1
      this.anim.playSegments(animFase.interval, true)
      this.anim.loop = animFase.loop
    }
  }
}
</script>

<style scoped>
</style>
