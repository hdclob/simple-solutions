<template>
  <div class="team-member-display text-center">
    <img class="team-member-image mb-1" :src="member.image"/>
    <h3>{{ member.name }}</h3>
    <p>{{ member.role }}</p>
  </div>
</template>

<script>
  export default {
    props: ['member']
  }
</script>

<style scoped>

  .team-member-image {
    height: 100px;
  }
</style>
