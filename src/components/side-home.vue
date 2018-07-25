<template>
  <div class="home">
    <side-modal v-for="side in sides" :key="side.id" 
      :largura="side.larg" 
      :identidade="side.id" 
      :abreMaisUm="side.abreProximo"
      @fechou="fechaFromChild(side)" 
      @abreFromChild="abreSide(sides[sides.indexOf(side) + 1])" 
      @largura="minima" >
      <slot :name="side.id"></slot>
    </side-modal>
  </div>
</template>

<script>
import SideModal from '@/components/side-modal.vue'

export default {
  name: 'SideHome',

  props: {
    sides: {
      required: true,
      type: Array,
      default: [
        {
          larg: 600,
          id: '',
          abreProximo: false,
          aberto: false
        }
      ]
    }
  },
  data () {
    return {
      largMinima: 0
    }
  },
  components: {
    'side-modal': SideModal
  },
  methods: {
    minima(larg) {
      this.largMinima = larg + 50
    },
    comparaSidesAbre (side) {
      let largMinima = side.larg
      let largAtual = 0
      
      this.sides.reverse ()
      this.sides.forEach (item => {
        largAtual = document.querySelector('#' + item.id).clientWidth
        if (item.aberto && largAtual <= largMinima) {
          largMinima += 50
          let prop = {id: item.id, larg: largMinima}
          this.$emit('mostraMais', prop)
        }
      })
      this.sides.reverse() 
    },
    comparaSidesFecha (side) {
      let largAtual = 0
      let largResult = 0

      let abertos = this.sides.filter (item => item.aberto === true)
      abertos.reverse ()
      this.$emit('escondeMais', abertos[0])
      abertos.splice (0, 1)

      abertos.forEach (item => {
        largAtual = document.querySelector('#' + item.id).clientWidth

        if (item.larg !== largAtual && item.larg < largAtual) {
          this.largMinima > item.larg ? largResult = this.largMinima : largResult = item.larg
          let prop = {id: item.id, larg: largResult}
          this.$emit ('escondeMais', prop)
        } else {
          this.largMinima = item.larg + 50
        }
      })
    },
    abreSide (side) {
      const index = this.sides.indexOf (side)
      if ( index > 0 ) {
        this.comparaSidesAbre (side)
      }
      side.aberto = true
      this.$emit ('mostra', side.id)
    },
    fechaSide (side) {
      const index = this.sides.indexOf (side)
      if ( index > 0) {
        this.comparaSidesFecha (side)
      }
      side.aberto = false
      this.$emit ('esconde', side)
    },
    fechaFromChild (side) {
      side.aberto = false
      const index = this.sides.indexOf (side)
      if ( index > 0) {
        this.comparaSidesFecha (side)
      }
    }
  },
  created () {
    this.$parent.$on('abreHome', () => this.abreSide(this.sides[0]))
  }
}
</script>
