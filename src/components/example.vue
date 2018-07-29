<template>
  <div>
    <div class="col-sm-12 casa">
      <input type="button" value="OPEN" class="btn btn-open" @click="open('square')">
    </div>
    <side-home :sides="navs">
      <template :slot="navs[0].identity">
        <!-- Here comes modal content -->
        <h1>Side-Nav Square</h1>
        <div>
          <input type="button" value="OPEN" class="btn btn-open" @click="open('circle')">
        </div>
        <div style="margin-top: 20px">
          <input type="button" value="CLOSE" class="btn btn-close" @click="close('square')">
        </div>
      </template>
      <template :slot="navs[1].identity">
        <!-- Here comes modal content -->
        <h1>Side-Nav Circle</h1>
        <div>
          <input type="button" value="CLOSE" class="btn btn-close" @click="close('circle')">
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
          sideWidth: 400,
          identity: 'square',
          openNext: false,
          opened: false
        },
        {
          sideWidth: 600,
          identity: 'circle',
          openNext: false,
          opened: false
        },
      ]
    }
  },
  methods: {
    open (identity) {
      this.$emit('openHome', identity)
    },
    close (identity) {
      this.$emit('closeHome', identity)
    }
  },
  components: {
    'side-home': SideHome
  }
}
</script>

