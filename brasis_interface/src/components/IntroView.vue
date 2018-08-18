<template>
  <div class="fullscreen">
    <button v-if="showButton" class="play-button" @click="play">começar</button>
    <lottie :options="defaultOptions" @animCreated="handleAnimation" />
  </div>
</template>

<script>
import router from '@/router'
import * as animationData from '../assets/intro.json'

export default {
  name: 'IntroView',
  data () {
    return {
      showButton: true,
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
      this.anim.addEventListener('complete', function () {
        router.push({name: 'main'})
      })
    },
    play: function () {
      this.anim.play()
      this.showButton = false
    }
  }
}
</script>

<style scoped>
.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
}
.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
}
</style>
