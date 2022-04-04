<template>
  <div class="service-display p-4">
    <span :class="service.icon"></span> {{ service.title }}
  </div>
</template>

<script>
  export default {
    props: ['service']
  }
</script>

<style scoped>
  .service-display {
    border: 1px solid white;
    border-radius: 20px;
    transition: 0.3s;
  }

  .service-display:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
</style>
