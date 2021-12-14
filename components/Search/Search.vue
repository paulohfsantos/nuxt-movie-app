<template>
  <div class="search-input">
    <div class="search-box">
      <input
        type="text"
        name="search"
        :value="value"
        :placeholder="placeholder"
        @keyup.enter="$emit('search')"
        @input="updateValue($event.target.value)"
      />
      <Icon v-show="show" name="close" @click="$emit('clear')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',

  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    updateValue(value) {
      this.$emit('change', value)
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/globalColors.scss';
@import './style.scss';
</style>
