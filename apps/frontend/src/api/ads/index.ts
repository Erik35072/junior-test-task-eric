import { Ad } from "src/types/ad";
import { AdFilterTypes } from "src/types/ad/filters";
import queryString from "query-string";
import RootSlice from "../root";

export default class Ads extends RootSlice {
  static getAds = (filter?: AdFilterTypes) => {
    const isFilterExist = filter !== undefined;

    return this.request<{ results: Ad[] }>(`/ads${isFilterExist ? `?${queryString.stringify(filter)}` : ""}`);
  };

  static getAd = (id: string) => this.request<Ad>(`/ads/${id}`);
}
