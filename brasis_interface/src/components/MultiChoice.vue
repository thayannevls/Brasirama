<template>
  <div style="display: inline-block">
    <div>
      <div style="display: inline-block">
        <button>
          Escola Pública
        </button>
        <button :class="{ disabled: wasHovered(choices[0]), mybutton:!wasHovered(choices[0]) }" v-on:mouseover="hover(choices[0])">
          {{ !wasHovered(choices[0])?'Escola Privada':'Infelizmente você não está nos 25,5% de seu perfil que conseguiram estudo privado' }}

        </button>
      </div>
    </div>
    <img src="/static/image/tela_4_frase.svg" class="col-right-text"/>
  </div>
</template>

<script>
export default {
  name: 'MultiChoice',
  data () {
    return {
      choices: ['Escola Privada'],
      hovered: []
    }
  },
  methods: {
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

<style scoped>
* {
  user-select: none;
}
.disabled {
  pointer-events: none;
  padding-top:10px;
  background: #fd4d59 ;
  box-shadow:
      0px 0px 0px #fd4d59,0px 0px 0px #fd4d59,
      0px 0px 0px #fd4d59,0px 0px 0px #fd4d59;
}
button {
  padding: 15px;
  margin: 0;
  text-transform: uppercase;
  font-size: 14px;
  background: rgb(255, 163, 143);
  border: solid 1px rgb(255, 163, 143);
  box-shadow: 0px 0px 0px #fd4d59, 0px 1px 0px #fd4d59, 0px 1px 0px #fd4d59,
    0px 2px 0px #fd4d59, 0px 2px 0px #fd4d59, 0px 3px 0px #fd4d59,
    0px 3px 0px #fd4d59, 0px 4px 0px #fd4d59, 0px 4px 0px #fd4d59,
    0px 5px 0px #fd4d59, 0px 5px 0px #fd4d59, 0px 6px 0px #fd4d59,
    0px 6px 0px #fd4d59, 0px 7px 0px #fd4d59, 0px 7px 0px #fd4d59,
    0px 8px 0px #fd4d59, 0px 8px 0px #fd4d59, 0px 9px 0px #fd4d59;
}
ul li {
  margin-bottom: 10px;
}
button:active {
  outline: none;
}
button:focus {
  outline: 0;
}
.mybutton {

}
.mybutton:hover {
  box-shadow: 0px 0px 0px #e98155 , 0px 0px 0px #e98155 , 0px 0px 0px #e98155 ,
    0px 0px 0px #e98155 ;
}
</style>
