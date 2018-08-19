<template>
  <div>
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

    <div class="bar" id="barra" v-if="count > 0">
      <div id="progress" class="graph">
        <div id="bar" :style="{width: progressGame + 'px'}"><p>{{progressGame}}%</p></div></div>
    </div>
    <div>
<!--      <progress :value="progressGame" :max="100" show-progress animated></progress> -->
      <button @click="alterData()">
         Click me!
     </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Schoolbar',
  data () {
    return {
      progressGame: 0,
      max: 100,
      count: 10
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
    height: 29px; /* Not 30px because the 1px top-border brings it up to 30px to match #graph */
    background: #26efe0;
    border-top: 1px solid #fceabb;
  }
  #bar p { position: absolute; text-align: center; width: 100%; margin: 0; line-height: 30px; }
  .error {
    /* These styles are arbitrary */
    background-color: #fceabb;
    padding: 1em;
    font-weight: bold;
    color: red;
    border: 1px solid red;
  }
  .graph{
    width: 50%; /* width and height are arbitrary, just make sure the #bar styles are changed accordingly */
    height: 30px;
    background: #e98155;
    border: 1px solid #888;
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a8a8a8', endColorstr='#cccccc',GradientType=0 );
    position: relative;
  }
  .escolaridade{
    width: 33%;
  }

</style>
