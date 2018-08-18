<template>
  <div>
    <h1>{{ faseNum }} - {{ fase.name }}</h1>
    <div id="app">
      <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation" />
      <button v-on:click="nextFase">Próxima</button>
    </div>
    <h2 v-if="fase.msg">{{ fase.msg }}</h2>
    <component v-if="fase.component" :is="fase.component"/>
  </div>
</template>

<script>
import Lottie from './lottie.vue'
import OpsDrag from './OpsDrag.vue'
import * as animationData from '../assets/pinjump.json'
import animRanges from '../assets/anims.json'
import MultiChoiceVue from './MultiChoice.vue'
import Schoolbar from './Schoolbar.vue'

export default {
  name: 'MainView',
  components: {
    'lottie': Lottie,
    'ops-drag': OpsDrag,
    'multichoice': MultiChoiceVue,
    'schoolbar': Schoolbar
  },
  data () {
    return {
      faseNum: 0,
      fases: [
        {name: 'intro', msg: 'lá vem você...'},
        {name: 'local', msg: 'nasceu em João Pessoa'},
        {name: 'sexo', msg: 'mulher'},
        {name: 'cor', msg: 'de cor negra'},
        {name: 'renda', msg: 'quanto você quer que sua família receba?', component: OpsDrag},
        {name: 'escola', component: Schoolbar},
        {name: 'trabalho', component: MultiChoiceVue}
      ],
      defaultOptions: {
        animationData: animationData,
        autoplay: false,
        loop: false
      },
      animationSpeed: 1
    }
  },
  computed: {
    fase: function () {
      return this.fases[this.faseNum]
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
    nextFase: function (anim) {
      this.faseNum += 1
      var animFase = animRanges[this.fase.name]
      this.anim.playSegments(animFase.interval, true)
      this.anim.loop = animFase.loop
    }
  }
}
</script>

<style scoped>
</style>
