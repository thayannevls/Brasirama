<template>
  <div>
    <div v-html="svg"/>
  </div>
</template>

<script>
export default {
  name: 'Trabalho',
  data () {
    return {
      svg: require('@/../static/image/tela_6_texto.svg')
    }
  }
}
</script>
