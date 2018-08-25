<template>
  <div>
    <div class="col">
      <div>
        <button :class="getClass()" v-on:mouseover="hover(choices[0])">
          {{ !wasHovered(choices[0])?'Escola Privada':'Infelizmente você não está nos 25,5% de seu perfil que conseguiram estudo privado' }}
        </button>
        <button class="escola-btn">
          Escola Pública
        </button>
      </div>
    </div>
    <div v-html="svg" class="col-right-text"/>
  </div>
</template>

<script>
export default {
  name: 'MultiChoice',
  data () {
    return {
      svg: require('@/../static/image/tela_4_frase.svg'),
      choices: ['Escola Privada'],
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
    background: rgb(255, 163, 143);
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
