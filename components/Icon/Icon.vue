<template>
  <i
    :class="`icon-` + name + ` ${variant == 'dark' ? 'dark' : 'light'}`"
    :title="title">
  </i>
</template>

<script>
export default {
  name: "Icon",

  props: {
    name: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: "dark",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/icons.scss";
</style>
