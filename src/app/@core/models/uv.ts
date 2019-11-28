interface UV {
  County: string;
  PublishAgency: string;
  PublishTime: string;
  SiteName: string;
  UVI: string;
  WGS84Lat: string;
  WGS84Lon: string;
}

export class UVModel {
  private raw: UV;

  county: string;
  siteName: string;
  lat: string;
  lon: string;

  constructor(data: UV) {
    this.raw = data;
    this.county = data.County;
    this.siteName = data.SiteName;
    this.lat = data.WGS84Lat;
    this.lon = data.WGS84Lon;
  }

  openGoogleMap() {
    const lat = this.convertToDD(this.lat);
    const lon = this.convertToDD(this.lon);

    window.open(`http://maps.google.com/?q=${lat},${lon}`, '_blank');
  }

  convertToDD(data: string) {
    const [degrees, minutes, seconds] = data.split(',');
    return parseInt(degrees, 10) + parseInt(minutes, 10) / 60 + parseInt(seconds, 10) / 3600;
  }

  get dd_lat() {
    return this.convertToDD(this.lat)
  }

  get dd_lon() {
    return this.convertToDD(this.lon)
  }
}
