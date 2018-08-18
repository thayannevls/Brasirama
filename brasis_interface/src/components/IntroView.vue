<template>
  <div class="fullscreen">
    <button v-if="showButton" class="play-button mybutton" @click="play">Começar</button>
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
button {
    padding:15px;
    margin: 0;
    width:150px;
    height: 150px;
    border-radius: 50%;
    text-transform: uppercase;
    font-size: 20px;
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

    background:#e98155;
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
