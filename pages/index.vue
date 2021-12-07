<template>
  <main>
    <section class="home">
      <Header />
      <div class="hero">
        <h2>Check out our movies session below</h2>
        <a href="#movie-grid"> Go to movies </a>
      </div>
      <div class="content">
        <div class="container">
          <div id="movie-grid" class="movie__grid">
            <div
              v-for="(movie, index) in getMovies.results"
              :key="index"
              class="movie"
            >
              <div class="movie-img">
                <img
                  :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                  :alt="movie.title"
                />
                  <p>{{ movie.vote_average }}</p>
                  <p>{{ movie.overview }}</p>
              </div>

              <div class="info">
                <p>
                  {{ movie.title.slice(0, 25) }}
                  <span v-if="movie.title.length > 25">...</span>
                </p>

                <p>
                  release date:
                  {{
                    new Date(movie.release_date).toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  }}
                </p>
                <nuxt-link
                  :to="{ name: 'movies-movieid', params: {movieid: movie.id} }"
                >
                  Get more info
                </nuxt-link>
              </div>
            </div>
          </div>
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

<style lang="scss" scoped>
@import '@/scss/globalColors.scss';
@import '@/scss/views/Home.scss';
</style>
