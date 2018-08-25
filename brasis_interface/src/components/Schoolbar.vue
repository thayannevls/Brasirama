<template>
  <div class="flex-row">
    <div class="text-center">

      <div v-html="svgTop" class="renda-top-text"/>

      <div class="cronometro">
        <div v-if="count > 0">
          Tempo restante:
          {{ count }}
        </div>
        <div v-else>
          O tempo de estudar acabou, hora de trabalhar...
        </div>
      </div>

      <div :style="{width: '100%', display: 'flex'}">
        <div class="escolaridade"><img src="static/image/escola_fundamental.svg"></div>
        <div class="escolaridade"><img src="static/image/escola_medio.svg"></div>
        <div class="escolaridade"><img src="static/image/escola_superior.svg"></div>
      </div>

      <div class="bar">
        <div class="graph">
          <div class="bar" :style="{width: progressGame + 'px'}"></div>
          <div style="align-items: left; margin-left: -58px">
            <lottie :options="defaultOptions" @animCreated="handleAnimation" />
          </div>
        </div>
      </div>

      <button v-if="count>0" class="btn-formar" @click="alterData()">
         Clique para se formar
      </button>

    </div>
    <div v-html="svg"/>
  </div>
</template>

<script>
import * as animationData from '../assets/corredor.json'
import {isolate} from '@/utils'

export default {
  name: 'Schoolbar',
  data () {
    return {
      svgTop: isolate('t', require('@/../static/image/tela_5_titulo_game.svg')),
      svg: isolate('s', require('@/../static/image/tela_5_texto.svg')),
      progressGame: 0,
      max: 100,
      count: 5,
      showButton: true,
      defaultOptions: {
        animationData: animationData,
        autoplay: true,
        loop: true
      },
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation: function () {
    },
    alterData: function () {
      this.progressGame += 5
    },
    run: function (time) {
      this.count--
    }
  },
  mounted: function () {
    this.cont = this.time
    setInterval(this.run, 1000)
  }
}
</script>

<style lang="scss">
.cronometro {
    color: #fd4d59;
    font-family: OpenSans-Extrabold;
}
.bar {
    height: 70px; /* Not 30px because the 1px top-border brings it up to 30px to match #graph */
    background: #26efe0;
    border-top: 1px solid #fff;
    margin-bottom: 30px;
    p { position: absolute; text-align: center; width: 100%; margin: 0; line-height: 30px; }
}

.graph {
    width: 100%; /* width and height are arbitrary, just make sure the #bar styles are changed accordingly */
    height: 70px;
    background: #e98155;
    border: 1px solid #fff;
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a8a8a8', endColorstr='#cccccc',GradientType=0 );
    position: relative;
    display: flex;
}

.escolaridade {
    width: 33%;
}

.btn-formar {
    padding:15px;
    margin: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-transform: uppercase;
    font-size: 14px;
    color: #201b53;

    font-family: OpenSans-Extrabold;
    transition:
        margin-top 0.3s ease,
        margin-left 0.3s ease,
        box-shadow 0.3s ease;
    background:#ff5732;
    border: 0;
    box-shadow: 0px 9px 0px #201b53;
    &:active {
        transition:
            margin-top 0.0s ease,
            box-shadow 0.0s ease;
        margin-top:10px;
        box-shadow: 0px 0px 0px #201b53;
    }
}
</style>
