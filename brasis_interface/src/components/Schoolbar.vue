<template>
  <div>
     <progress :value="counter" :max="100" show-progress animated></progress>
     <button @click="alterData()">
         Click me!
     </button>
  </div>
</template>

<script>
export default {
  name: 'Schoolbar',
  data () {
    return {
      counter: 45,
      max: 100
    }
  },
  methods: {
    alterData: function () {
      this.counter++
    }

  }
}
</script>

<style scoped>
</style>
