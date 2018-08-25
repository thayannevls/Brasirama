<template>
  <div id="main-view">
    <div id="top-row">
      <transition name="fade">
        <img v-if="showButton" @click="nextFase" class="next-button" src="static/image/btn_proxima.svg"/>
      </transition>
      <lottie :options="defaultOptions" @animCreated="handleAnimation" />
    </div>
    <transition name="fade" mode="out-in">
      <component v-if="fase.component" :is="fase.component"/>
    </transition>
  </div>
</template>

<script>
import OpsDrag from './OpsDrag.vue'
import * as animationData from '../assets/mulher.json'
import animRanges from '../assets/anims.json'
import MultiChoice from './MultiChoice.vue'
import Schoolbar from './Schoolbar.vue'
import Location from './Location.vue'
import Cor from './Cor.vue'
import Mulher from './Mulher.vue'
import EndView from './EndView.vue'
import Trabalho from './Trabalho.vue'
import Crush from './Crush.vue'

export default {
  name: 'MainView',
  data () {
    return {
      faseNum: 0,
      fases: [
        {name: 'local', msg: 'nasceu em João Pessoa', component: Location},
        {name: 'sexo', msg: 'mulher', anim: 'mulher-aparece', component: Mulher, walkOut: true},
        {name: 'cor', msg: 'de cor negra', anim: 'aceno', component: Cor, walkOut: true},
        {name: 'renda', msg: 'quanto você quer que sua família receba?', component: OpsDrag, walkOut: true},
        {name: 'escolaridade-rede', anim: 'escolaridade', component: MultiChoice},
        {name: 'escolaridade-corre', anim: 'escolaridade', component: Schoolbar, walkOut: true},
        {name: 'trabalho', component: Trabalho, walkOut: true},
        {name: 'crush', msg: '<3', component: Crush, walkOut: true},
        {name: 'fim', msg: '<3', anim: 'caminhando', component: EndView}
      ],
      defaultOptions: {
        animationData: animationData,
        autoplay: false,
        loop: false
      },
      animationSpeed: 1,
      showButton: false
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
      this.playAnim()
    },
    nextFase: function (anim) {
      var change = () => {
        this.faseNum += 1
        this.playAnim()
      }
      if (this.fase.walkOut) {
        this.playAnim('caminhando')
        setTimeout(change, 2000)
      } else {
        change()
      }
    },
    playAnim: function (name) {
      var animName = name
      if (!animName) animName = this.fase.anim
      if (!animName) animName = this.fase.name
      var animFase = animRanges[animName]
      this.showButton = false
      this.anim.playSegments(animFase.interval, true)
      this.anim.loop = animFase.loop
      var animPlayed = () => {
        this.showButton = !(this.faseNum >= (this.fases.length - 1))
      }
      this.anim.addEventListener('complete', animPlayed)
      this.anim.addEventListener('loopComplete', animPlayed)
    }
  }
}
</script>

<style>
#main-view {
    margin: auto;
    display: block;
    max-width: 1000px;
}

#top-row {
    /* border-bottom: 1px solid #b8a9ae; */
    position: relative;
    margin-top: 100px;
}
.next-button {
    height: 80px;
    position:absolute;
    top: 50%;
    right: 0;
    z-index: 100;
    transform: translate(0%, -50%);
}
.imagem{
    width: 20%;
}
</style>
