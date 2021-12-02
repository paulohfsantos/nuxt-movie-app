<template>
  <main>
    <section class="home">
      <Header />
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',

  mounted() {
    Promise.all([
      this.$store.commit('resetMovies'),
      this.$store.dispatch('getMovies'),
    ])
  }
}
</script>

<style>
</style>
