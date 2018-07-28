<template>
  <div>
    <div class="col-sm-12 casa">
      <input type="button" value="ABRE" class="btn btn-abre" @click="abre('quadrado')">
    </div>
    <side-home :sides="navs">
      <template :slot="navs[0].id">
        <!-- Aqui vai o conteúdo do modal -->
        <h1>Side-Nav Quadrado</h1>
        <div>
          <input type="button" value="ABRE" class="btn btn-abre" @click="abre('circulo')">
        </div>
        <div style="margin-top: 20px">
          <input type="button" value="FECHA" class="btn btn-fecha" @click="fecha('quadrado')">
        </div>
      </template>
      <template :slot="navs[1].id">
        <!-- Aqui vai o conteúdo do modal -->
        <h1>Side-Nav Círculo</h1>
        <div>
          <input type="button" value="FECHA" class="btn btn-fecha" @click="fecha('circulo')">
        </div>
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
          larg: 400,
          id: 'quadrado',
          abreProximo: false,
          aberto: false
        },
        {
          larg: 600,
          id: 'circulo',
          abreProximo: false,
          aberto: false
        },
      ]
    }
  },
  methods: {
    abre (id) {
      this.$emit('abreHome', id)
    },
    fecha (id) {
      this.$emit('fechaHome', id)
    }
  },
  components: {
    'side-home': SideHome
  }
}
</script>

