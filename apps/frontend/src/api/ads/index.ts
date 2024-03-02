import { Ad } from "src/types/ad";
import RootSlice from "../root";

export default class Ads extends RootSlice {
  static getAds = () => this.request<Ad[]>(`/ads`);

  static getAd = (id: string) => this.request<Ad>(`/ads/${id}`);
}
