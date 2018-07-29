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
}
h1, h2 {
  font-weight: normal;
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
.btn-open {
  color: aliceblue;
  background-color: darkorange;
}
.btn-close {
  color: aliceblue;
  background-color: #666666;
}
.btn-close:disabled {
  opacity: 0.5;
}
.btn-x {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 32px;
  margin-left: 50px;
  width: auto;
  height: auto;
  padding: 0;
  cursor: pointer;
}
</style>
