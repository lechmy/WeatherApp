<template>
    <header class="header">
      <img class="header-logo" alt="Vue logo" src="@/assets/logo.png">
      <router-link to="/">Weather App</router-link>
    </header>
</template>

<style scoped lang="scss">
.header {
  grid-area: header;
  padding: 10px 30px;
  border-bottom: 1px solid #d1d1d1;

  a {
    font-weight: bold;
    color: #133c53;
    text-decoration: none;
  }
}

.header-logo {
  width: 100px;
}
</style>
