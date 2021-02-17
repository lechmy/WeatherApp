export class Util {
  public convertSpeedUnits (speed: number): number {
    return Math.round((speed * 1000) / 3600) // converts m/s to km/h
  }
}
