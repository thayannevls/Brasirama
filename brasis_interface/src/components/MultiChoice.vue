<template>
  <div>
    <ul>
      <li :key="choice" v-for="choice in choices">
        <button :class="{ disabled: wasHovered(choice) }" v-on:mouseover="hover(choice)">
          {{ choice }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MultiChoice',
  data () {
    return {
      choices: ['Escola Publica', 'Escola Privada'],
      hovered: []
    }
  },
  methods: {
    wasHovered: function (choice) {
      return this.hovered.indexOf(choice) !== -1
    },
    handleAnimation: function (anim) {
      this.anim = anim
    },
    hover: function (choice) {
      if (!this.wasHovered(choice)) {
        this.hovered.push(choice)
      }
    }
  }
}
</script>

<style scoped>
.disabled{
  color: red;
}
</style>
