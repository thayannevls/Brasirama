<template>
  <div>
    <div class="cabecalho">
      <img class="imagem" src="/static/image/logo_brasirama.svg"/>
    </div>
    <div id="top-row">
      <transition name="fade">
        <img v-if="showButton" @click="nextFase" class="next-button" src="/static/image/btn_proxima.svg"/>
      </transition>
      <lottie :options="defaultOptions" @animCreated="handleAnimation" />
    </div>
    <transition name="fade">
      <component v-if="fase.component" :is="fase.component"/>
    </transition>
  </div>
</template>

<script>
import OpsDrag from './OpsDrag.vue'
import * as animationData from '../assets/mulher.json'
import animRanges from '../assets/anims.json'
import MultiChoiceVue from './MultiChoice.vue'
import Schoolbar from './Schoolbar.vue'
import Location from './Location.vue'
import Mulher from './Mulher.vue'

export default {
  name: 'MainView',
  data () {
    return {
      faseNum: 0,
      fases: [
        {name: 'local', msg: 'nasceu em João Pessoa', component: Location},
        {name: 'sexo', msg: 'mulher', anim: 'mulher-aparece', component: Mulher, walkOut: true},
        {name: 'cor', msg: 'de cor negra', anim: 'aceno', walkOut: true},
        {name: 'renda', msg: 'quanto você quer que sua família receba?', component: OpsDrag, walkOut: true},
        {name: 'escolaridade', component: Schoolbar, walkOut: true},
        {name: 'trabalho', component: MultiChoiceVue, walkOut: true},
        {name: 'crush', msg: '<3', walkOut: true}
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
      console.log(this.faseNum)
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
        this.showButton = true
      }
      this.anim.addEventListener('complete', animPlayed)
      this.anim.addEventListener('loopComplete', animPlayed)
    }
  }
}
</script>

<style scoped>
* {
    user-select: none;
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
.cabecalho{
    width: 100%;
    height: 10%;
    background: #201b53;
    margin-top: 0%;
}

.imagem{
    width: 20%;
}

button {
    padding:15px;
    margin: 0;
    width:150px;
    height: 150px;
    border-radius: 50%;
    text-transform: uppercase;
    font-size: 20px;
}
button:active {
    outline: none;
}
button:focus {
    outline: 0;
}
.mybutton {
    transition: all 0.3s ease;

    background:#ff0000;
    border: solid 1px #ff0000;
    box-shadow:
        0px 0px 0px #201b53, 0px 1px 0px #201b53,
        0px 1px 0px #201b53,0px 2px 0px #201b53,
        0px 2px 0px #201b53,0px 3px 0px #201b53,
        0px 3px 0px #201b53,0px 4px 0px #201b53,
        0px 4px 0px #201b53,0px 5px 0px #201b53,
        0px 5px 0px #201b53,0px 6px 0px #201b53,
        0px 6px 0px #201b53,0px 7px 0px #201b53,
        0px 7px 0px #201b53,0px 8px 0px #201b53,
        0px 8px 0px #201b53,0px 9px 0px #201b53;
  }
  .mybutton:active {
    transition: all 0.0s ease;
    margin-top: 10px;
    box-shadow:
      0px 0px 0px #201b53,0px 0px 0px #201b53,
      0px 0px 0px #201b53,0px 0px 0px #201b53;
  }
</style>
