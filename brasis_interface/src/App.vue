<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

html {
    background-color: #ffebe7;
}

#app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

button:active {
    outline: none;
}
button:focus {
    outline: 0;
}
button::-moz-focus-inner {
    border: 0;
}

button {
    font-family: 'Open Sans', sans-serif;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
