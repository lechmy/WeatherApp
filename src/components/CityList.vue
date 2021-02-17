<template>
  <div class="city-list-wrapper">
    <div v-for="city in cities" :key="city" class="city-list-item">
      <router-link :to="{ name: 'CityDetails', params: { cityId: city }}">{{city}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { LocationStore } from '@/store/locations.store'

@Component
export default class CityList extends Vue {
  private store: LocationStore;
  public cities: Array<string>;

  constructor () {
    super()
    this.store = new LocationStore()
    this.cities = this.store.getLocations()
  }
}
</script>

<style scoped lang="scss" >
.city-list-item {
  display: block;
  border-bottom: 1px solid #d1d1d1;

  a {
    display: block;
    padding: 10px;
    text-transform: capitalize;
  }
}
</style>
