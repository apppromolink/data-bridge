import PelandoApi from "../apis/pelando.api";

export default class GrabberService {
  public async getData(url: string) {
    return PelandoApi.grabber(url);
  }
};
