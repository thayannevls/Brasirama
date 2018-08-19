<template>
  <div>
    <p class="end-text">Você pode jogar outra vida, mas continuará em Brasirama.</p>
    <button class="end-btn">JOGAR NOVAMENTE</button>
  </div>
</template>

<script>
export default {
  name: 'EndView'
}
</script>

<style lang="scss">
.end-text {
    text-align: center;
}
.end-btn {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: #201b53;
    background: #ffa38f;
    width: auto;
    height: auto;
    border: none;
    padding: 15px;
    text-weight: bold;
    box-shadow: 0px 5px 0px #201b53;
  }
</style>
