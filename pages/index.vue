<template>
  <main>
    <section class="home">
      <Header />
      <div class="content">
        <div
          v-for="(movie, index) in getMovies.results"
          :key="index"
          class="movie__grid"
        >
          <span>{{ movie.title }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',

  computed: {
    ...mapGetters(['getMovies']),
  },

  mounted() {
    Promise.all([
      this.$store.commit('resetMovies'),
      this.$store.dispatch('getMovies'),
    ])
  },
}
</script>

<style></style>
