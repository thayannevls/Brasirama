<template>
  <div>
    <div v-html="svg"/>
  </div>
</template>

<script>

export default {
  name: 'Location',
  data () {
    return {
      svg: require('@/../static/image/tela_0_texto.svg')
    }
  }
}
</script>

<style>
</style>
