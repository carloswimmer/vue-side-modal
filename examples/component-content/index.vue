<template>
  <div style="height: 100vh">
    <!-- This is the content of the page -->
    <div class="text-example">
      <div class="img-example">
        <img src="@/assets/logo.png">
      </div>
      <h1>The first modal has already been done,<br/>
      just click to see it.</h1>
      <div class="btn-example">
        <input type="button" value="OPEN" class="btn btn-open" @click="open('square')">
      </div>
    </div>

    <!-- Here comes the group of side-modals -->
    <side-home :sides="navs">

      <!-- This is the first side-modal -->
      <template :slot="navs[0].identity">

        <!-- Here comes modal content -->
        <h1>Square SideNav</h1>
        <div class="pseudo-logo"></div>
        <div>
          <input type="button" value="OPEN" class="btn btn-open" @click="open('circle')"
            style="margin-right: 15px">
          <input type="button" value="CLOSE" class="btn btn-close" @click="close('square')">
        </div>

      </template>

      <!-- This is the second side-modal -->
      <template :slot="navs[1].identity">

        <!-- Here comes modal content -->
        <h1>Circle SideNav</h1>
        <div class="pseudo-logo"></div>
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
  },
  mounted () {
    setTimeout(() => {
      document.querySelector('.img-example').style.width = '200px'
    }, 1000)
  }
}
</script>

<style scoped>
.img-example {
  width: 0;
  overflow: hidden;
  transition: 2s;
}
.btn-example {
  text-align: right;
  margin-bottom: 20px;
}
.text-example {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.pseudo-logo {
  height: 200px;
  width: 200px;
  margin: 25px;
}
</style>
