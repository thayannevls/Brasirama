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
    <div class="bar" id="barra" v-if="count > 0">
      <progress :value="progressGame" :max="100" show-progress animated></progress>
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
      progressGame: 45,
      max: 100,
      count: 10
    }
  },
  methods: {
    alterData: function () {
      this.progressGame++
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
  .bar{
    background-color: antiquewhite;
  }
  .bar progress {
  }
</style>
