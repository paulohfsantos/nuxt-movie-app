<template>
  <div class="pagination">
    <ul>
      <li class="pagination-item">
        <button type="button" :disabled="firstPage" @click="onClickFirstPage">
          <icon name="left-arrow" variant="dark"></icon>
        </button>
      </li>

      <li class="pagination-item">
        <button
          type="button"
          :disabled="firstPage"
          @click="onClickPreviousPage"
        >
          <icon name="left-arrow" variant="dark"></icon>
        </button>
      </li>

      <li v-for="page in pages" :key="page.name" class="pagination-item">
        <button
          type="button"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
          @click="onClickPage(page.name)"
        >
          {{ page.name }}
        </button>
      </li>

      <li class="pagination-item">
        <button type="button" :disabled="lastPage" @click="onClickNextPage">
          <icon name="right-arrow" variant="dark"></icon>
        </button>
      </li>

      <li class="pagination-item">
        <button type="button" :disabled="lastPage" @click="onClickLastPage">
          <icon name="right-arrow" variant="dark"></icon>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 6,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    // total: {
    //   type: Number,
    //   required: true,
    // },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },

  computed: {
    startPage() {
      // first page
      if (this.currentPage === 1) {
        return 1
      }

      // last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1
      }

      // when is between
      return this.currentPage - 1
    },

    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      )
    },

    pages() {
      const range = []

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        })
      }

      return range
    },
    firstPage() {
      return this.currentPage === 1
    },
    lastPage() {
      return this.currentPage === this.totalPages
    },
  },

  methods: {
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
    isPageActive(pg) {
      return this.currentPage === pg
    },
    onClickFirstPage() {
      this.$emit('pagechanged', 1)
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
