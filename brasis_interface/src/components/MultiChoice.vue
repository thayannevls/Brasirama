<template>
  <div>
    <ul style="list-style: none;">
      <li :key="choice" v-for="choice in choices">
        <button :class="{ disabled: wasHovered(choice), mybutton:!wasHovered(choice) }" v-on:mouseover="hover(choice)">
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
  * {
    user-select: none;
  }
  .disabled{
    pointer-events: none;
    box-shadow:
      0px 0px 0px #fd4d59,0px 0px 0px #fd4d59,
      0px 0px 0px #fd4d59,0px 0px 0px #fd4d59;
  }
  button {
      padding:15px;
      margin: 0;
      width:75px;
      height: 75px;
      border-radius: 50%;
      text-transform: uppercase;
      font-size: 10px;
      color: #201b53;
  }
  ul li{margin-bottom:10px;}
  button:active {
    outline: none;
  }
  button:focus {
    outline: 0;
  }
  .mybutton {

    background:rgb(255, 163, 143);
    border: solid 1px rgb(255, 163, 143);
    box-shadow:
        0px 0px 0px #fd4d59, 0px 1px 0px #fd4d59,
        0px 1px 0px #fd4d59,0px 2px 0px #fd4d59,
        0px 2px 0px #fd4d59,0px 3px 0px #fd4d59,
        0px 3px 0px #fd4d59,0px 4px 0px #fd4d59,
        0px 4px 0px #fd4d59,0px 5px 0px #fd4d59,
        0px 5px 0px #fd4d59,0px 6px 0px #fd4d59,
        0px 6px 0px #fd4d59,0px 7px 0px #fd4d59,
        0px 7px 0px #fd4d59,0px 8px 0px #fd4d59,
        0px 8px 0px #fd4d59,0px 9px 0px #fd4d59;
  }
  .mybutton:hover {
    box-shadow:
      0px 0px 0px #fd4d59,0px 0px 0px #fd4d59,
      0px 0px 0px #fd4d59,0px 0px 0px #fd4d59;
  }
</style>
