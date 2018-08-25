<template>
  <div>
    <div v-html="svg"/>
  </div>
</template>

<script>
export default {
  name: 'Crush',
  data () {
    return {
      svg: require('@/../static/image/tela_7_texto.svg')
    }
  }
}
</script>

<style>
</style>
