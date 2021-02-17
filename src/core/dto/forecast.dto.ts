export class ForecastDTO {
  public q: string;
  public cnt: number;
  public appid: string;
  public units: string;

  constructor () {
    this.q = ''
    this.cnt = 8
    this.appid = ''
    this.units = 'metric'
  }
}
