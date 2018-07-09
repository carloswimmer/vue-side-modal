<template>
  <div class="hello">
    <div class="col-sm-12 casa">
      <input type="button" value="ABRE" class="btn btn-abre" @click="abreSide(sides[0])">
    </div>
    <div class="col-sm-12 casa">
      <input type="button" value="FECHA" class="btn btn-fecha" @click="fechaSide(sides[0])" disabled>
    </div>
    <side-modal :largura="sides[0].larg" :identidade="sides[0].id" :abreMaisUm="true"
      @fechou="fechaFromChild(sides[0])" @abreFromChild="abreSide(sides[1])" @largura="minima" ></side-modal>
    <side-modal :largura="sides[1].larg" :identidade="sides[1].id" :abreMaisUm="true"
      @fechou="fechaFromChild(sides[1])" @abreFromChild="abreSide(sides[2])" @largura="minima" ></side-modal>
    <side-modal :largura="sides[2].larg" :identidade="sides[2].id" :abreMaisUm="true"
      @fechou="fechaFromChild(sides[2])" @abreFromChild="abreSide(sides[3])" @largura="minima" ></side-modal>
    <side-modal :largura="sides[3].larg" :identidade="sides[3].id" 
      @fechou="fechaFromChild(sides[3])" @largura="minima" ></side-modal>
  </div>
</template>

<script>
import SideModal from '@/components/side-modal.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      sides: [
        {
          larg: 200,
          id: 'UM',
          aberto: false
        },
        {
          larg: 400,
          id: 'DOIS',
          aberto: false
        },
        {
          larg: 600,
          id: 'TRES',
          aberto: false
        },
        {
          larg: 800,
          id: 'QUATRO',
          aberto: false
        },
      ],
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
      console.log(abertos[0].id + ':largura:' + (abertos[0].larg / 200))
      abertos.splice (0, 1)

      abertos.forEach (item => {
        largAtual = document.querySelector('#' + item.id).clientWidth

        if (item.larg !== largAtual && item.larg < largAtual) {
          this.largMinima > item.larg ? largResult = this.largMinima : largResult = item.larg
          let prop = {id: item.id, larg: largResult}
          this.$emit ('escondeMais', prop)
      // console.log(prop.id + ':larguraMinima:' + this.largMinima)
        } else {
          this.largMinima = item.larg + 50
        }
      })
    },
    abreSide (side) {
      const index = this.sides.indexOf (side)
      if ( index > 0) {
        this.comparaSidesAbre (side)
      }
      side.aberto = true
      console.log(side.id)
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
  }
};
</script>
