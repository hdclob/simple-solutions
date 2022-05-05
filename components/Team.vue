<template>
  <div id="team" class="container my-4">
    <h2 class="text-center">Meet the Team</h2>
    <div class="row">
      <div class="col-md-4" v-for="member in members" :key="member.id">
        <TeamMember :member="member"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        members: [
          {
            id: 1,
            name: 'Hugo Braga',
            image: require('@/assets/images/team/hugo.png'),
            role: 'Web Developer'
          },
          {
            id: 2,
            name: 'Jack Moorhouse',
            image: require('@/assets/images/team/jack.png'),
            role: 'Lead Designer'
          },
          {
            id: 3,
            name: 'Markus Simpson',
            image: require('@/assets/images/team/markus.png'),
            role: 'Web Developer'
          },
          {
            id: 4,
            name: 'Joshua Emmanuel',
            image: require('@/assets/images/team/joshua.png'),
            role: 'Sound Engineer'
          },
          {
            id: 5,
            name: 'Filipe Cavaleiro',
            image: require('@/assets/images/team/filipe-charis.png'),
            role: 'Game Developer'
          },
          {
            id: 6,
            name: 'Charis Christodoulakis',
            image: require('@/assets/images/team/filipe-charis.png'),
            role: 'Game Developer'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
