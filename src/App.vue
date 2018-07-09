<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
.casa {
  text-align: right;
  padding-right: 20px;
  margin-bottom: 20px;
}
.btn {
  width: 98px;
  padding: 10px 10px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
}
.btn-abre {
  color: aliceblue;
  background-color: darkorange;
}
.btn-abre:hover {
  opacity: 0.8;
  transition: 0.5s;
}
.btn-fecha {
  color: aliceblue;
  background-color: #666666;
}
.btn-fecha:hover {
  opacity: 0.8;
  transition: 0.5s;
}
.btn-fecha:disabled {
  opacity: 0.5;
}
</style>
