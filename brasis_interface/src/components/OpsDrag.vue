<template>
  <div>
    <h2>{{ msg }}</h2>
    <div>
      <p class="slider" :style="getStyle()" @mousedown="mousedown" @mouseup="mouseup">.----o----.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpsDrag',
  data () {
    return {
      msg: 'Escolha a renda',
      moveSlider: false,
      x: 0,
      y: 0,
      x0: 0,
      y0: 0
    }
  },
  mounted: function () {
    var mouseUpdate = (ev) => {
      console.log(this.moveSlider)
      if (this.moveSlider) {
        this.x = ev.pageX - this.x0
        this.y = ev.pageY - this.y0
      }
    }
    document.onmousemove = mouseUpdate
  },
  methods: {
    drag: function () {
    },
    mousedown: function (ev) {
      this.x0 = ev.pageX
      this.y0 = ev.pageY
      this.moveSlider = true
    },
    mouseup: function (ev) {
      this.moveSlider = false
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

<style scoped>
  .slider {
      position: relative;
  }
</style>
