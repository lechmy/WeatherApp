export class WeatherDTO {
  public q: string;
  public appid: string;
  public units: string;

  constructor () {
    this.q = ''
    this.appid = ''
    this.units = 'metric'
  }
}
