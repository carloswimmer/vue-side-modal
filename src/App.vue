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
.btn:hover {
  color: rgba(255,255,255,0.6);
  filter: brightness(1.15);
  transition: 0.3s;
}
.btn-abre {
  color: aliceblue;
  background-color: darkorange;
}
.btn-fecha {
  color: aliceblue;
  background-color: #666666;
}
.btn-fecha:disabled {
  opacity: 0.5;
}
.btn-x {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 48px;
  margin-left: 50px;
  width: auto;
  height: auto;
  padding: 0;
  cursor: pointer;
}
</style>
