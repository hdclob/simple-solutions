<template>
  <div>
    <Header title="Elegant Solutions<br/>to Complex Problems" class="section" />
    <About class="section" />
    <Services class="section" />
    <Team class="section" />
    <Contact class="section" />
  </div>
</template>

<script>
  export default {
    async asyncData({ store }) {
      store.commit('setShowMenu', true)
    }
  }
</script>

<style scoped>

</style>
