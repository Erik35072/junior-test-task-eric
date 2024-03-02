import { Ad } from "types/ad";
import RootSlice from "../root";

export default class Ads extends RootSlice {
    static getAds = () =>
    this.request<Ad[]>(`/ads?minPrice=1000000`);
}