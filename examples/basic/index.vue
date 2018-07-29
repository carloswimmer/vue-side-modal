<template>
  <div class="content-example">
    <!-- This is the content of the page -->
    <div class="text-example">
      <div class="img-example">
        <img src="@/assets/logo.png">
      </div>
      <h1>This is a page with 2 side-modals.<br/>
      Click to see its effect.</h1>
      <div class="btn-example">
        <input type="button" value="OPEN" class="btn btn-open" @click="open('first')">
      </div>
    </div>

    <!-- Here comes the group of side-modals -->
    <side-home :sides="navs">

      <!-- This is the first side-modal -->
      <template :slot="navs[0].identity">

        <!-- Here comes modal content -->
        <h1>First SideModal</h1>
        <div>
          <input type="button" value="OPEN" class="btn btn-open" @click="open('second')">
        </div>
        <div style="margin-top: 20px">
          <input type="button" value="CLOSE" class="btn btn-close" @click="close('first')">
        </div>

      </template>

      <!-- This is the second side-modal -->
      <template :slot="navs[1].identity">

        <!-- Here comes modal content -->
        <h1>Second SideModal</h1>
        <div>
          <input type="button" value="CLOSE" class="btn btn-close" @click="close('second')">
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
          identity: 'first',
          openNext: false,
          opened: false
        },
        {
          sideWidth: 600,
          identity: 'second',
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
.content-example {
  height: 100vh;
}
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
</style>
