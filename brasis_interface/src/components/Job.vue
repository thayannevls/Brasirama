<template>
  <div>
    <div v-html="svg"/>
  </div>
</template>

<script>
export default {
  name: 'Job',
  data () {
    return {
      svg: require('@/../static/image/tela_6_texto.svg')
    }
  }
}
</script>
