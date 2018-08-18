<template>
  <div>
    <ul>
      <li :key="choice" v-for="choice in choices">
        {{ choice }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MultiChoice',
  data () {
    return {
      choices: ['Escola Publica', 'Escola Privada']
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    }
  }
}
</script>

<style scoped>
</style>
