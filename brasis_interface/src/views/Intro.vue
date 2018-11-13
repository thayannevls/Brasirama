<template>
  <div class="fullscreen">
    <transition name="fade">
      <button v-if="showButton" class="play-button" @click="play">Começar</button>
    </transition>
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
      }
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

<style lang="scss">
* {
    user-select: none;
}
.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    color: #201b53;
    z-index: 100;
    transition: all 0.3s ease;
    background: #ffa38f;
    border: none;
    outline: none;
    box-shadow: 0px 9px 0px #fd4d59;
    &:active {
        margin-top: 10px;
        box-shadow: 0px 0px 0px #fd4d59;
    }
}
.fullscreen {
    background-color: black;
    position: fixed;
    /* height: 100vh; */
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
}
</style>
