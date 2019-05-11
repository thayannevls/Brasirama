<template>
  <div class="flex-row">
    <div>
      <div v-html="svgTop"/>
      <div>
        <button :class="getClass()" v-on:click="hover(choices[0])">
          {{ !wasHovered(choices[0])?'Escola Privada':'Infelizmente você não está nos 25,5% de seu perfil que conseguiram estudo privado.' }}
        </button>
        
      </div>
      <button :class="getClass()" v-on:click="hover(choices[1])">
          {{ !wasHovered(choices[1])?'Escola Pública':'Você faz parte dos 74,5% de seu perfil que estão estudando na rede pública.' }}
        </button>
    </div>
    <div v-html="svg"/>
  </div>
</template>

<script>
import {isolate} from '@/utils'

export default {
  name: 'MultiChoice',
  data () {
    return {
      svg: isolate('s', require('@/../static/image/tela_4_frase.svg')),
      svgTop: isolate('t', require('@/../static/image/tela_4_titulo_bts.svg')),
      choices: ['Escola Privada', 'Escola Pública'],
      hovered: []
    }
  },
  methods: {
    getClass: function () {
      return { 'escola-disabled': this.wasHovered(this.choices[0]), 'escola-btn': true }
    },
    wasHovered: function (choice) {
      return this.hovered.indexOf(choice) !== -1
    },
    handleAnimation: function (anim) {
      this.anim = anim
    },
    hover: function (choice) {
      if (!this.wasHovered(choice)) {
        this.hovered.push(choice)
      }
    }
  }
}
</script>

<style>
* {
    user-select: none;
}
.escola-btn {
    margin: 10px;
    width: 300px;
    height: 75px;
    text-transform: uppercase;
    font-size: 10px;
    color: #201b53;
    padding: 15px;
    text-transform: uppercase;
    font-size: 14px;
    background: rgb(255, 163, 143);;
    border: solid 0px rgb(255, 163, 143);
    box-shadow: 0px 9px 0px #fd4d59;
}
.escola-disabled {
    pointer-events: none;
    padding-top:10px;
    background: #fd4d59;
    box-shadow: 0px 0px 0px #fd4d59;
}
</style>
