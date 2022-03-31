<template>
  <b-navbar toggleable="lg" class="navbar-bg" type="dark" variant="dark" sticky>
    <b-navbar-brand to="/"><img class="logo" src="~/assets/images/SIMPLE SOLUTIONS-02.png" /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="#about">About</b-nav-item>
        <b-nav-item to="#services">Our Services</b-nav-item>
        <b-nav-item to="#team">Meet the Team</b-nav-item>
        <b-nav-item to="#contact">Contact us</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {

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
