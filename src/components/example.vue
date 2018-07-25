<template>
  <div>
    <div class="col-sm-12 casa">
      <input type="button" value="ABRE" class="btn btn-abre" @click="abre()">
    </div>
    <side-home :sides="navs">
      <template :slot="navs[0].id">
        <!-- Aqui vai o conteúdo do modal -->
        <h1>ABRE UM</h1>
      </template>
      <template :slot="navs[1].id">
        <!-- Aqui vai o conteúdo do modal -->
        <h1>ABRE DOIS</h1>
      </template>
    </side-home>
  </div>
</template>

<script>
import SideHome from '@/components/side-home.vue'

export default {
  name: 'Example',

  data () {
    return {
      navs: [
        {
          larg: 200,
          id: 'quadrado',
          abreProximo: true,
          aberto: false
        },
        {
          larg: 400,
          id: 'circulo',
          abreProximo: false,
          aberto: false
        },
      ]
    }
  },
  methods: {
    abre () {
      this.$emit('abreHome')
    }
  },
  components: {
    'side-home': SideHome
  }
}
</script>

