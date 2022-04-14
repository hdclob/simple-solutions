<template>
  <div>
    <Header title="Cookies<br/>Policy" class="section" />
    <Contact class="section" />
  </div>
</template>

<script>
  export default {
    async asyncData({ store }) {
      store.commit('setShowMenu', false)
    }
  }
</script>

<style scoped>

</style>
