<template>
  <div>
    <div v-html="svg"/>
  </div>
</template>

<script>
export default {
  name: 'SkinColor',
  data () {
    return {
      svg: require('@/../static/image/tela_2_texto.svg')
    }
  }
}
</script>

<style>
</style>
