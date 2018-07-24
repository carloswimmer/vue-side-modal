<template>
  <div class="side" :id="identidade">
    <slot></slot>
    <img src="@/assets/logo.png" style="margin: 40px">
    <input type="button" value="MAIS UM" class="btn btn-abre" 
      style="margin: 40px" @click="abreOutro ()" v-show="abreMaisUm">
    <input type="button" value="FECHA" class="btn btn-fecha" 
      @click="fecha (identidade)">
  </div>
</template>

<script>
export default {
  name: 'SideModal',

  props: {
    largura: {
      required: false,
      type: Number,
      value: 600
    },
    identidade: {
      required: true,
      type: String,
      value: ''
    },
    abreMaisUm: {
      required: false,
      type: Boolean,
      value: false
    }
  },
  methods: {
    largString (larg) {
      return larg + 'px'
    },
    largCalc (larg) {
    // soma para esconder o box-shadow
    const calc = larg + 30
    return '-' + calc + 'px'
    },
    abre (id) {
      document.querySelector('#' + id).style.left = '0px'
    },
    abreOutro () {
      this.$emit('abreFromChild')
    },
    fecha (id) {
      document.querySelector('#' + id).style.width = this.largString (this.largura)
      document.querySelector('#' + id).style.left = this.largCalc (this.largura)
      this.$emit('fechou')
    },
    fechaFromParent (id, larg) {
      document.querySelector('#' + id).style.left = this.largCalc (larg)
    },
    expande (id, larg) {
      document.querySelector('#' + id).style.width = this.largString (larg)
      this.abre(id)
    },
    contrai (id, larg) {
      document.querySelector('#' + id).style.width = this.largString (larg)
      this.$emit ('largura', larg)
    }
  },
  created () {
	  this.$parent.$on ('mostra', id => this.abre(id))
	  this.$parent.$on ('esconde', prop => this.fechaFromParent(prop.id, prop.larg))
	  this.$parent.$on ('mostraMais', prop => this.expande(prop.id, prop.larg))
	  this.$parent.$on ('escondeMais', prop => this.contrai(prop.id, prop.larg))
  },
  mounted () {
    document.querySelector('#' + this.identidade).style.width = this.largString (this.largura)
    document.querySelector('#' + this.identidade).style.left = this.largCalc (this.largura)
  }
}
</script>

<style scoped>
.side {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  width: 900px;
  height: 100vh;
  top: 0;
  left: -880px;
  background-color: cadetblue;
  box-shadow: 5px 2px 28px 0px rgba(0,0,0,0.55);
  transition: 2s;
}
.regua {
  border: 1px solid darkorange;
  width: 600px;
  height: 5px;
}
</style>
