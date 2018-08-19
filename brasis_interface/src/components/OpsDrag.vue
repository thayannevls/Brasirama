<template>
  <div>
    <div class="col">
      <img src="/static/image/tela_3_titulo_slider.svg" class="renda-top-text"/>
      <transition name="fade">
        <p key="msg" v-if="displayMsg" class="renda-ops-text">Só que a renda da família a gente não escolhe...</p>
        <div key="slider" v-else class="slider" :style="getStyle()" @mousedown="mousedown" @mouseup="mouseup">
          <img src="/static/image/slider.svg" class="slider-image"/>
        </div>
      </transition>
    </div>
    <img src="/static/image/tela_3_texto.svg" class="renda-right-text"/>
  </div>
</template>

<script>
export default {
  name: 'OpsDrag',
  data () {
    return {
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
}
.slider-image{
    pointer-events: none;
}
.col {
    max-width: 400px;
    display: inline-block;
    margin-top: 50px;
}
.renda-ops-text {
    max-width: 400px;
    font-weight: bold;
}
.renda-top-text {
    width: 400px;
}
.renda-right-text {
    display: inline-block;
    margin-left: 150px;
    margin-top: 50px;
    width: 400px;
}
</style>
