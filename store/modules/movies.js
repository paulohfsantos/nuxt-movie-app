import axios from 'axios'
import { apiKey, baseUrl } from '@/api/keys'

const state = () => ({
  movies: [],
  pagination: {
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
  searchedMovies: {
    search: '',
  },
  adult: false,
})

const getters = {
  getMovies: (state) => state.movies,
  getPagination: (state) => state.pagination,
  getAllSearchedMovies: (state) => state.searchedMovies,
  getAdult: (state) => state.adult,
}

const mutations = {
  setMovies: (state, movies) => {
    state.movies = movies
  },
  resetMovies: (state) => {
    state.movies = []
  },
  setPagination: (state, pagination) => {
    state.pagination.page = pagination.page
    state.pagination.totalPages = pagination.totalPages
    state.pagination.totalResults = pagination.totalResults
  },
  setSearchedMovies: (state, searchedMovies) => {
    state.searchedMovies = searchedMovies
  },
  resetSearchedMovies: (state) => {
    state.searchedMovies.search = ''
  },
}

const actions = {
  async getMovies({ state, commit }) {
    const { data } = await axios.get(
      `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=${state.pagination.page}`
    )
    commit('setMovies', data)
    // eslint-disable-next-line no-console
    console.log(data)
  },
  async getMoviesSearched({ state, commit }, query) {
    // let { search } = state.searchedMovies
    // let
    const { data } = await axios.get(
      `${baseUrl}/search/movie?
        api_key=${apiKey}
        &language=en-US
        &query=${query}
        &page=${state.pagination.page}
        &include_adult=${state.adult}`
    )
    commit('setMovies', data)
    // eslint-disable-next-line no-console
    // console.log(query)
    // console.log(data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
