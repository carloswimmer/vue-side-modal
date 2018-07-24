<template>
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
</template>

<script>
import SideHome from '@/components/side-home.vue'

export default {
  name: 'Example',

  data() {
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
  components: {
    'side-home': SideHome
  }
  
}
</script>

