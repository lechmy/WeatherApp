import { ForecastDTO } from '@/core/dto/forecast.dto'
import { WeatherDTO } from '@/core/dto/weather.dto'
import { ForecastModel } from '@/core/model/forecast.model'
import { WeatherModel } from '@/core/model/weather.model'

export class WeatherService {
  private apiUrl: string;
  private apiKey: string;

  constructor () {
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/'
    this.apiKey = 'a527397945ce40ccf61bfc47c90a7267'
  }

  public getWeatherByCity (location: string): Promise<WeatherModel> {
    const url = new URL(`${this.apiUrl}/weather`)
    let params = new WeatherDTO() // creating params with default values
    params = Object.assign(params, { // updating params with new values
      q: location,
      appid: this.apiKey
    })
    url.search = new URLSearchParams(params as any).toString()

    return fetch(url.href).then((response: Response) => response.json()) // returns Promise so custom data response can be defined as needed
  }

  public getForecastByCity (location: string): Promise<ForecastModel> {
    const url = new URL(`${this.apiUrl}/forecast`)
    let params = new ForecastDTO() // creating params with default values
    params = Object.assign(params, { // updating params with new values
      q: location,
      appid: this.apiKey
    })
    url.search = new URLSearchParams(params as any).toString()

    return fetch(url.href).then((response: Response) => response.json()) // returns Promise so custom data response can be defined as needed
  }
}
