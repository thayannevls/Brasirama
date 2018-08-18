<template>
  <div>
    <h1>{{ faseNum }} - {{ fase.name }}</h1>
    <div id="app">
      <lottie :options="defaultOptions" @animCreated="handleAnimation" />
      <button @click="nextFase">Próxima</button>
    </div>
    <h2 v-if="fase.msg">{{ fase.msg }}</h2>
    <component v-if="fase.component" :is="fase.component"/>
  </div>
</template>

<script>
import OpsDrag from './OpsDrag.vue'
import * as animationData from '../assets/mulher.json'
import animRanges from '../assets/anims.json'
import MultiChoiceVue from './MultiChoice.vue'
import Schoolbar from './Schoolbar.vue'

export default {
  name: 'MainView',
  components: {
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
