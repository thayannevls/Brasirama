<template>
  <div>
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
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
import Lottie from './lottie.vue'
import * as animationData from '../assets/pinjump.json'
export default {
  name: 'MainView',
  components: {
    'lottie': Lottie
  },
  data () {
    return {
      msg: 'Você nasceu em ...',
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

<style scoped>
</style>
