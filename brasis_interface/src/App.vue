<template>
  <div id="app">
    <div class="cabecalho">
      <img class="logo" src="static/image/logo_brasirama.svg"/>
    </div>
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
html, body, #app {
    margin: 0;
    padding: 0;
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
.cabecalho{
    width: 100vw;
    height: 50px;
    background: #201b53;
    padding: 5px;
}
.logo {
    width: 200px;
    margin: auto;
    display: block;
}



button {
    font-family: 'Open Sans', sans-serif;
    padding:15px;
    margin: 0;
    width:150px;
    height: 60px;
    text-transform: uppercase;
    font-size: 20px;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
