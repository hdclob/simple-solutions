<template>
  <div id="services" class="container-fluid">
    <div class="container py-4">
      <h2 class="text-center">Our Services</h2>
      <div class="row">
        <div class="col-md-6 my-2" v-for="service in services" :key="service.id">
          <ServiceDisplay
            :service="service"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       services: [
         {
           id: 1,
           icon: 'fa-solid fa-gamepad fa-fw',
           title: 'Game Development'
         },
         {
           id: 2,
           icon: 'fa-solid fa-cloud fa-fw',
           title: 'Web Application Development'
         },
         {
           id: 3,
           icon: 'fa-solid fa-mobile-screen fa-fw',
           title: 'Mobile Application Development'
         },
         {
           id: 4,
           icon: 'fa-solid fa-database fa-fw',
           title: 'API Development'
         },
         {
           id: 5,
           icon: 'fa-solid fa-desktop fa-fw',
           title: 'Desktop Application Development'
         },
         {
           id: 6,
           icon: 'fa-solid fa-shield fa-fw',
           title: 'Security Testing'
         },
       ]
      }
    }
  }
</script>

<style scoped>
  #services {
    background-color: black;
  }
  #services > .container {
    color: white;
  }
</style>
