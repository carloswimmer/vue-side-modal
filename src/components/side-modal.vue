<template>
  <div class="side" :id="id">
    <div class="btn btn-x" @click="close (id)">&times;</div>
    <slot></slot>
    <input type="button" value="ANOTHER" class="btn btn-open" 
      style="margin: 40px" @click="openAnother ()" v-show="openOneMore">
  </div>
</template>

<script>
export default {
  name: 'SideModal',

  props: {
    divWidth: {
      required: false,
      type: Number,
      value: 600
    },
    id: {
      required: true,
      type: String,
      value: ''
    },
    openOneMore: {
      required: false,
      type: Boolean,
      value: false
    }
  },
  methods: {
    sideWidthString (sideWidth) {
      return sideWidth + 'px'
    },
    sideWidthCalc (sideWidth) {
    // Calculate to hide box-shadow
    const calc = sideWidth + 30
    return '-' + calc + 'px'
    },
    open (id) {
      document.querySelector('#' + id).style.left = '0px'
    },
    openAnother () {
      this.$emit('openFromChild')
    },
    close (id) {
      document.querySelector('#' + id).style.width = this.sideWidthString (this.divWidth)
      document.querySelector('#' + id).style.left = this.sideWidthCalc (this.divWidth)
      this.$emit('fechou')
    },
    closeFromParent (id, sideWidth) {
      document.querySelector('#' + id).style.left = this.sideWidthCalc (sideWidth)
    },
    expand (id, sideWidth) {
      document.querySelector('#' + id).style.width = this.sideWidthString (sideWidth)
      this.open(id)
    },
    contract (id, sideWidth) {
      document.querySelector('#' + id).style.width = this.sideWidthString (sideWidth)
      this.$emit ('divWidth', sideWidth)
    }
  },
  created () {
	  this.$parent.$on ('show', id => this.open(id))
	  this.$parent.$on ('hide', prop => this.closeFromParent(prop.identity, prop.sideWidth))
	  this.$parent.$on ('showMore', prop => this.expand(prop.id, prop.sideWidth))
	  this.$parent.$on ('hideMore', prop => this.contract(prop.identity, prop.sideWidth))
  },
  mounted () {
    document.querySelector('#' + this.id).style.width = this.sideWidthString (this.divWidth)
    document.querySelector('#' + this.id).style.left = this.sideWidthCalc (this.divWidth)
  }
}
</script>

<style scoped>
.side {
  background-image: url('../assets/logo.png');
  background-repeat: no-repeat;
  background-position: center;
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
</style>
