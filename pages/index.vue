<template>
  <main>
    <section class="home">
      <Header />
      <div class="hero">
        <h2>Now Streaming...</h2>
        <a href="#movie-grid"> Go to movies </a>
      </div>
      <div class="content">
        <div class="search-container">
          <Search
            v-model="queryString"
            :show="queryString !== '' ? true : false"
            placeholder="search your movie below..."
            @search="searchMovies"
            @clear="queryString = ''"
          />
        </div>
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
                <p :title="movie.title">
                  {{ movie.title.slice(0, 25) }}
                  <span v-if="movie.title.length > 25">...</span>
                </p>

                <p>
                  release date:
                  <span>{{ releaseDate(movie.release_date) }}</span>
                </p>
                <nuxt-link
                  :to="{
                    name: 'movies-movieid',
                    params: { movieid: movie.id },
                  }"
                >
                  Get more info
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="pagination">
            <Pagination
              :current-page="getPagination.page"
              :total-pages="getTotalPages"
              :per-page="15"
              @pagechanged="pageChanged"
            />
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

  data: () => ({
    currentPage: 1,
    queryString: '',
  }),

  computed: {
    ...mapGetters(['getMovies', 'getPagination', 'getAllSearchedMovies']),

    getTotalPages() {
      if (this.$store.getters.getMovies.total_pages !== undefined) {
        return this.$store.getters.getMovies.total_pages
      } else {
        return 1
      }
    },
  },

  mounted() {
    Promise.all([
      this.$store.commit('resetMovies'),
    ]).then(() => {
      if (this.queryString === '') {
        this.$store.dispatch('getMovies')
        return
      }

      this.searchMovies()
    })
  },

  methods: {
    releaseDate(movie) {
      return new Date(movie).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
    pageChanged(page) {
      this.$store.commit('setPagination', {
        page,
      })
      this.$store.dispatch('getMovies')
    },
    searchMovies() {
      // console.log(query);
      // this.$store.commit('setSearchedMovies', query)
      // console.log('search', query);
      // this.$store.dispatch('getMoviesSearched', query);
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/globalColors.scss';
@import '@/scss/views/Home.scss';
</style>
