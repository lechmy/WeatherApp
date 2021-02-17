export class ForecastModel {
  public city: any;
  public cnt: number;
  public list: Array<any>;

  constructor () {
    this.city = {}
    this.cnt = 0
    this.list = []
  }
}
