<template>
  <div class="home">
    <div class="details-box" v-for="location in locationData" :key="location.name">
      <h2 class="title">{{location.name}}</h2>
      <p>Temperature: {{location.temperature}} &deg;C</p>
      <p>Wind speed: {{location.wind}} Km/h</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { WeatherService } from '@/services/weather.service'
import { WeatherModel } from '@/core/model/weather.model'
import { LocationStore } from '@/store/locations.store'
import { Util } from '@/util/convert'

@Component
export default class Home extends Vue {
  private weatherService: WeatherService;
  private store: LocationStore;
  private util: Util;
  public weatherData: WeatherModel;
  public locations: Array<string>;
  public locationData: Array<object>;

  constructor () {
    super()
    this.weatherService = new WeatherService()
    this.store = new LocationStore()
    this.util = new Util()
    this.weatherData = new WeatherModel()
    this.locations = this.store.getLocations()
    this.locationData = new Array<object>()
  }

  mounted () {
    for (const location of this.locations) {
      this.weatherService.getWeatherByCity(location).then((data: WeatherModel) => {
        this.weatherData = Object.assign({}, data) // cloning object into local variable so that response stay immutable and in case needs to be reused
        const wind = this.util.convertSpeedUnits(this.weatherData.wind.speed)
        const temperature = this.weatherData.main.temp
        this.locationData.push({
          name: location,
          wind: wind,
          temperature: temperature
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .details-box {
    flex: 0 1 auto;
    padding: 10px;
  }

  .title {
    margin: 0 0 10px 0;
    text-transform: capitalize;
  }
</style>
