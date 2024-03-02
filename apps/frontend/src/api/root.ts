import axios, { AxiosError, Method } from "axios";
// types
import { ResponseModel } from "types/api";

export default class RootSlice {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  static defaultAuth = false;

  static baseUrl = "http://localhost:8000/api";

  static async request<T = unknown>(
    url = "",
    method: Method = "GET",
    payload: Record<string, unknown> | FormData | null = null,
  ): Promise<ResponseModel<T>> {

    try {
      const rsp =
        (await axios({
          method,
          url: this.baseUrl + url,
          data: payload || {},
          responseType: "json"
        })) || {};
      return rsp?.data;
    } catch (err) {
      return (err as AxiosError<ResponseModel<T>>).response!.data;
    }
  }
}
