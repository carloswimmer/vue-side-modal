<template>
  <div class="home">
    <side-modal v-for="side in sides" :key="side.identity" 
      :divWidth="side.sideWidth" 
      :id="side.identity" 
      :openOneMore="side.openNext"
      @fechou="closeFromChild(side)" 
      @openFromChild="openSide(sides[sides.indexOf(side) + 1])" 
      @divWidth="minima" >
      <slot :name="side.identity"></slot>
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
          sideWidth: 600,
          identity: '',
          openNext: false,
          opened: false
        }
      ]
    }
  },
  data () {
    return {
      sideWidthMinima: 0
    }
  },
  components: {
    'side-modal': SideModal
  },
  methods: {
    minima(sideWidth) {
      this.sideWidthMinima = sideWidth + 50
    },
    compareSidesOpen (side) {
      let sideWidthMinima = side.sideWidth
      let sideWidthAtual = 0
      
      this.sides.reverse ()
      this.sides.forEach (item => {
        sideWidthAtual = document.querySelector('#' + item.identity).clientWidth
        if (item.opened && sideWidthAtual <= sideWidthMinima) {
          sideWidthMinima += 50
          let prop = {id: item.identity, sideWidth: sideWidthMinima}
          this.$emit('showMore', prop)
        }
      })
      this.sides.reverse() 
    },
    compareSidesClose (side) {
      let sideWidthAtual = 0
      let sideWidthResult = 0

      let openeds = this.sides.filter (item => item.opened === true)
      openeds.reverse ()
      this.$emit('hideMore', openeds[0])
      openeds.splice (0, 1)

      openeds.forEach (item => {
        sideWidthAtual = document.querySelector('#' + item.identity).clientWidth

        if (item.sideWidth !== sideWidthAtual && item.sideWidth < sideWidthAtual) {
          this.sideWidthMinima > item.sideWidth ? sideWidthResult = this.sideWidthMinima : sideWidthResult = item.sideWidth
          let prop = {id: item.identity, sideWidth: sideWidthResult}
          this.$emit ('hideMore', prop)
        } else {
          this.sideWidthMinima = item.sideWidth + 50
        }
      })
    },
    openSide (side) {
      const index = this.sides.indexOf (side)
      if ( index > 0 ) {
        this.compareSidesOpen (side)
      }
      side.opened = true
      this.$emit ('show', side.identity)
    },
    closeSide (side) {
      this.closeFromChild (side)
      this.$emit ('hide', side)
    },
    closeFromChild (side) {
      side.opened = false
      const index = this.sides.indexOf (side)
      if ( index > 0) {
        this.compareSidesClose (side)
      }
    }
  },
  created () {
    this.$parent.$on('openHome', identity => {
      const index = this.sides.findIndex(item => item.identity === identity)
      this.openSide(this.sides[index])
      })
    this.$parent.$on('closeHome', identity => {
      const index = this.sides.findIndex(item => item.identity === identity)
      this.closeSide(this.sides[index])
      })
  }
}
</script>
