<template>
  <div>
    <div v-html="svg"/>
  </div>
</template>

<script>
export default {
  name: 'Woman',
  data () {
    return {
      svg: require('@/../static/image/tela_1_texto.svg')
    }
  }
}
</script>

<style>
</style>
