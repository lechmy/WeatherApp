<template>
  <div>
    <router-link to="/">&lang; Back</router-link>
    <h3 class="city-name">{{city}} <small>{{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false  })}}</small></h3>
    <div class="timeline">
      <div class="timeline-item" v-for="forecast in forecastData" :key="forecast.id">
        <p>Temp: {{Math.round(forecast.temperature.temp)}} &deg;C</p>
        <p>Feels: {{Math.round(forecast.temperature.feels_like)}} &deg;C</p>
        <p>Wind: {{util.convertSpeedUnits(forecast.wind.speed)}} Km/h</p>
        <hr>
        <strong>{{forecast.hours == 0 ? 24 : forecast.hours}}:00</strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { WeatherService } from '@/services/weather.service'
import { ForecastModel } from '@/core/model/forecast.model'
import { Util } from '@/util/convert'

@Component
export default class CityDetails extends Vue {
  private weatherService: WeatherService;
  private city: string;
  private forecastModel: ForecastModel;
  public forecastData: Array<object>;
  private util: Util;

  constructor () {
    super()
    this.util = new Util()
    this.weatherService = new WeatherService()
    this.forecastModel = new ForecastModel()
    this.forecastData = new Array<object>()
    this.city = this.$route.params.cityId
  }

  private getData () {
    this.forecastData = []
    this.weatherService.getForecastByCity(this.city).then((forecast: ForecastModel) => {
      for (const hourly of forecast.list) {
        this.forecastData.push({ // repacking response object into more readable object for rendering data in view
          id: hourly.dt,
          hours: new Date(hourly.dt_txt).getHours(),
          temperature: hourly.main,
          wind: hourly.wind
        })
      }
    })
  }

  mounted () {
    this.getData()
  }

  // added watcher for route changing in order to update location when user clicks on other city, if we do not add this, only 1st fetched results will be visible
  @Watch('$route')
  routeChanged () {
    this.city = this.$route.params.cityId
    this.getData()
  }
}
</script>

<style scoped lang="scss">
  .city-name {
    margin: 20px 0;
    font-size: 24px;
    text-transform: capitalize;
    border-bottom: 1px solid #d1d1d1;
    small {
      float: right;
    }
  }

  .timeline {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    overflow: auto;
    padding-bottom: 10px;
  }

  .timeline-item {
    flex: 1 0 120px;
    text-align: center;
    font-size: 18px;
  }

  p {
    margin-bottom: 15px;
  }
</style>
