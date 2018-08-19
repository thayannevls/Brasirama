<template>
  <div>
    <div class="col">
      <img src="/static/image/tela_5_titulo_game.svg" class="renda-top-text"/>
      <div id="cronometro">
        <div v-if="count > 0">
          {{ count }}
        </div>
        <div v-else>
          O TEMPO ACABOU
        </div>
      </div>
      <div :style="{width: '50%', height: '', display: 'flex'}">
        <div class="escolaridade"><img src="/static/image/escola_fundamental.svg"></div>
        <div class="escolaridade"><img src="/static/image/escola_medio.svg"></div>
        <div class="escolaridade"><img src="/static/image/escola_superior.svg"></div>
      </div>

      <div class="bar" id="barra">
        <div class="graph">
          <div id="bar" :style="{width: progressGame + 'px'}"></div>
          <div style="align-items: left; margin-left: -58px">
            <lottie :options="defaultOptions" @animCreated="handleAnimation" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <button v-if="count>0" class="play-button mybutton" @click="alterData()">
         Click me!
     </button>
    </div>

    <img src="/static/image/tela_5_texto.svg" class="col-right-text"/>

  </div>
</template>

<script>
import * as animationData from '../assets/corredor.json'

export default {
  name: 'Schoolbar',
  data () {
    return {
      progressGame: 0,
      max: 100,
      count: 10,
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

<style scoped>
  #bar{
    height: 70px; /* Not 30px because the 1px top-border brings it up to 30px to match #graph */
    background: #26efe0;
    border-top: 1px solid #fff;
  }
  #bar p { position: absolute; text-align: center; width: 100%; margin: 0; line-height: 30px; }
  .error {
    /* These styles are arbitrary */
    background-color: #fceabb;
    padding: 1em;
    font-weight: bold;
    color: red;
    border: 1px solid fff;
  }
  .graph{
    width: 100%; /* width and height are arbitrary, just make sure the #bar styles are changed accordingly */
    height: 70px;
    background: #e98155;
    border: 1px solid #fff;
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a8a8a8', endColorstr='#cccccc',GradientType=0 );
    position: relative;
    display: flex;
  }
  .escolaridade{
    width: 33%;
  }

  button{
    padding:15px;
    margin: 0;
    width:75px;
    height: 75px;
    border-radius: 50%;
    text-transform: uppercase;
    font-size: 14px;
    color: #201b53;
}
  button:active {
    outline: none;
  }
  button:focus {
    outline: 0;
  }

  .mybutton {
    transition:
      margin-top 0.3s ease,
      margin-left 0.3s ease,
      box-shadow 0.3s ease;

    background:#Ffa38f;
    border: solid 1px #e98155;
    box-shadow:
      0px 0px 0px #fd4d59, 0px 1px 0px #fd4d59,
      0px 1px 0px #fd4d59,0px 2px 0px #fd4d59,
      0px 2px 0px #fd4d59,0px 3px 0px #fd4d59,
      0px 3px 0px #fd4d59,0px 4px 0px #fd4d59,
      0px 4px 0px #fd4d59,0px 5px 0px #fd4d59,
      0px 5px 0px #fd4d59,0px 6px 0px #fd4d59,
      0px 6px 0px #fd4d59,0px 7px 0px #fd4d59,
      0px 7px 0px #fd4d59,0px 8px 0px #fd4d59,
      0px 8px 0px #fd4d59,0px 9px 0px #fd4d59;
  }
  .mybutton:active {
    transition:
      margin-top 0.0s ease,
      box-shadow 0.0s ease;
    margin-top:10px;
    box-shadow:
      0px 0px 0px #fd4d59,0px 0px 0px #fd4d59,
      0px 0px 0px #fd4d59,0px 0px 0px #fd4d59;
  }

</style>
