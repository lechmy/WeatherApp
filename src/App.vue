<template>
  <div id="app">
    <Header/>
    <main>
      <div class="city-list">
        <CityList />
      </div>
      <div class="city-details">
        <router-view/>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CityList from '@/components/CityList.vue'

@Component({
  components: {
    Header,
    Footer,
    CityList
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  margin: 0;
}

a {
  color: #133c53;
  text-decoration: none;

  &:hover,&:focus,&:visited,&:active {
    color: inherit;
  }
}

hr {
  border-style: solid;
  border-color: #d1d1d1;
}

#app {
  display: grid;
  grid-template-rows: 125px 1fr 80px;
  grid-template-areas:
    "header"
    "main"
    "footer";
  height: 100vh;
  width: 100%;
  color: #133c53;
}

main {
  grid-area: main;
  display: flex;
}

.city-list {
  flex: 0 0 25%;
  max-width:25%;
  border-right: 1px solid #d1d1d1;
}

.city-details {
  flex: 0 0 75%;
  max-width:75%;
  overflow: auto;
  padding: 20px;
}
</style>
