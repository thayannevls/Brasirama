<template>
  <div class="flex-row">
    <div>
      <div v-html="svgTop"/>
      <transition name="fade" mode="out-in">
        <p key="msg" v-if="displayMsg" class="renda-ops-text">
          Só que a renda da família onde nascemos a gente não escolhe...
        </p>
        <div key="slider" v-else class="slider"
             :style="getStyle()" @mousedown="mousedown" @mouseup="mouseup">
          <div v-html="svgSlider" class="slider-image"/>
        </div>
      </transition>
    </div>
    <div v-html="svg"/>
  </div>
</template>

<script>
import {isolate} from '@/utils'

export default {
  name: 'OpsDrag',
  data () {
    return {
      svgTop: isolate('t', require('@/../static/image/tela_3_titulo_slider.svg')),
      svg: isolate('r', require('@/../static/image/tela_3_texto.svg')),
      svgSlider: isolate('s', require('@/../static/image/slider.svg')),
      moveSlider: false,
      disabled: false,
      displayMsg: false,
      x: 0,
      y: 0,
      x0: 0,
      y0: 0
    }
  },
  mounted: function () {
    var mouseUpdate = (ev) => {
      if (this.moveSlider) {
        this.x = ev.pageX - this.x0
        this.y = ev.pageY - this.y0
      }
    }
    document.onmousemove = mouseUpdate
  },
  methods: {
    mousedown: function (ev) {
      this.x0 = ev.pageX
      this.y0 = ev.pageY
      this.moveSlider = true
      setTimeout(this.disableDrag, 1000)
    },
    mouseup: function (ev) {
      this.moveSlider = false
    },
    disableDrag: function () {
      this.disabled = true
      this.displayMsg = true
      document.onmousemove = null
    },
    getStyle: function () {
      return {
        left: this.x + 'px',
        top: this.y + 'px'
      }
    }
  }
}
</script>

<style>
.slider {
    position: relative;
    max-width: 400px;
}
.slider-image{
    pointer-events: none;
}
.renda-ops-text {
    max-width: 400px;
    font-family: OpenSans-Extrabold;
}
.top-text {
    max-width: 400px;
}
</style>
