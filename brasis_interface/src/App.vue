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

<style lang="scss">
@font-face {
    font-family: "Open Sans";
    src: url("./assets/fonts/OpenSans-Regular.ttf") format("truetype");
}
@font-face {
    font-family: "OpenSans-Extrabold";
    src: url("./assets/fonts/OpenSans-ExtraBold.ttf") format("truetype");
}
@font-face {
    font-family: "OpenSans-Semibold";
    src: url("./assets/fonts/OpenSans-SemiBold.ttf") format("truetype");
}

html {
    background-color: #ffebe7;
    color: #201b53;
}
html, body, #app {
    margin: 0;
    padding: 0;
}

svg > * {
    font-weight: normal !important;
}

#app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1 {
    font-family: OpenSans-Extrabold, Open Sans;
    font-weight:700;
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

.flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 50px;
    div {
        max-width: 400px;
    }
}

.text-center {
    text-align: center;
}
</style>
