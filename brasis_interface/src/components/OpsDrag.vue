<template>
  <div>
    <transition name="fade">
      <p key="msg" v-if="displayMsg">Só que renda da família a gente não escolhe...</p>
      <div key="slider" v-else class="slider" :style="getStyle()" @mousedown="mousedown" @mouseup="mouseup">
        <img src="/static/image/slider.svg" class="image"/>
      </div>
    </transition>
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
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.image{
    pointer-events: none;
    width: 50%;
}
</style>
