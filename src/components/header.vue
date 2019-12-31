<template>
    <div class="header-navbar fixed-top one-edge-shadow">
        <b-navbar id="navbar" toggleable="lg" type="light" variant="light">
        <b-navbar-toggle class="ml-auto navbar-light" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="navbar-nav ml-auto text-center">
            <b-nav-item :href="getPathOfEnv()">About</b-nav-item>
            <!--<b-nav-item :href="getPathOfEnv()">Projects</b-nav-item>-->
            <b-nav-item href="https://github.com/osandvold302/personal-website/blob/master/olivia_sandvold_resume.pdf">Resume</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import Vue from 'vue'
import { NavbarPlugin } from 'bootstrap-vue'
Vue.use(NavbarPlugin)

export default {
  name: 'header-component',
  components: {},
  methods: {
    getPathOfEnv () {
      return process.env.NODE_ENV === 'production' ? '/' : '/test'
    }
  }
}
</script>

<style scoped>
.bg-light{
  background-color: #fffcfe !important;
}

.navbar-light .navbar-nav .nav-link{
  position: relative;
  top: 0;
  transition: top ease 0.2s;
  color: #4b535e !important;
}

.navbar-light .navbar-nav .nav-link:hover{
  top: -2px;
  color: #17191c !important;
}

.b-nav-item {
  color:#737992;
}

</style>
