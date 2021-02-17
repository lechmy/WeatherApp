export class WeatherModel {
  public base: string;
  public clouds: any;
  public cod: number;
  public coord: any;
  public dt: number;
  public id: number;
  public main: any;
  public name: string;
  public sys: string;
  public timezone: number;
  public visibility: number;
  public weather: Array<any>;
  public wind: any;

  constructor () {
    this.base = ''
    this.clouds = {}
    this.cod = 0
    this.coord = {}
    this.dt = 0
    this.id = 0
    this.main = {}
    this.name = ''
    this.sys = ''
    this.timezone = 0
    this.visibility = 0
    this.weather = []
    this.wind = {}
  }
}
