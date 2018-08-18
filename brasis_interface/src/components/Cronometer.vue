<template>
<div>
  <div v-if="cont > 0">
    {{ cont }}
  </div>
  <div v-else>
    O TEMPO ACABOU
  </div>
</div>
</template>

<script>
export default {
  name: 'Cronometer',
  props: ['time'],
  data () {
    return {
      cont: 0
    }
  },
  methods: {
    run: function (time) {
      this.cont--
    }
  },
  mounted: function () {
    this.cont = this.time
    setInterval(this.run, 1000)
  }
}
</script>

<style scoped>
</style>
