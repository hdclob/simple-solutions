<template>
  <b-navbar ref="customNavbar" toggleable="lg" class="navbar-bg" type="dark" variant="dark" sticky>
    <b-navbar-brand @click="scrollToLink('#home')" href="javascript:;"><img class="logo" src="~/assets/images/SIMPLE SOLUTIONS-02.png" /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="javascript:;" @click="scrollToLink('#about')">About</b-nav-item>
        <b-nav-item href="javascript:;" @click="scrollToLink('#services')">Our Services</b-nav-item>
        <b-nav-item href="javascript:;" @click="scrollToLink('#team')">Meet the Team</b-nav-item>
        <b-nav-item href="javascript:;" @click="scrollToLink('#contact')">Contact us</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    methods: {
      scrollToLink: function(anchor) {
        let section = document.querySelector(anchor);
        if (!section) {
          return;
        }

        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: section.offsetTop - this.$refs.customNavbar.$el.offsetHeight, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, section.offsetTop)
        }
      }
    }
  }
</script>

<style scoped>
  .bg-dark {
    background-color: black !important;
	}
  .navbar-dark .navbar-nav .nav-link {
    color: white;
  }
	.logo {
    width: 10rem;
	}
</style>
