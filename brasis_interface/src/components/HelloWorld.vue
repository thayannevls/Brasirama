<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="app">
      <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation" />
      <div>
        <p>Speed: x{{animationSpeed}}</p>
        <input type="range" value="1" min="0" max="3" step="0.5" v-on:change="onSpeedChange" v-model="animationSpeed">
      </div>
      <button v-on:click="stop">stop</button>
      <button v-on:click="pause">pause</button>
      <button v-on:click="play">play</button>
    </div>
  </div>
</template>

<script>
import Lottie from '../lottie.vue'
import * as animationData from '../assets/pinjump.json'
export default {
  name: 'HelloWorld',
  components: {
    'lottie': Lottie
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      defaultOptions: {
        animationData: animationData,
        autoplay: false,
        loop: false
      },
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },

    stop: function () {
      this.anim.stop()
    },

    play: function () {
      this.anim.playSegments([0, 30], true)
    },

    pause: function () {
      this.anim.pause()
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
