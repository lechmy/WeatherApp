export class LocationStore {
  private locations: Array<string>;

  constructor () {
    this.locations = ['paris', 'london', 'berlin', 'madrid', 'belgrade'] // hardcoded cities, used for rendering list and links to cities with getter and setter
  }

  getLocations (): Array<string> {
    return this.locations
  }

  setLocations (locations: Array<string>) {
    this.locations = locations
  }
}
