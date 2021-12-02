<template>
  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <NuxtLink to="/">
            <Icon name="movies" variant="light" />
            <span>
              Movies App
            </span>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
<style lang="scss" scoped>
@import "@/scss/globalColors.scss";
@import "./style.scss";
</style>
