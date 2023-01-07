import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ResponseI, SuccessResponse } from "../interfaces/api";

class ApiClient {
  constructor() {
    this._get = this._get.bind(this);
    this._post = this._post.bind(this);
    this._patch = this._patch.bind(this);
    this._put = this._put.bind(this);
    this._delete = this._delete.bind(this);
  }

  _getClient(): AxiosInstance {
    const apiClient = axios.create({
      baseURL: "/api",
    });

    apiClient.interceptors.response.use(
      async (
        response: AxiosResponse<SuccessResponse, any>
      ): Promise<[SuccessResponse, undefined]> => {
        return [response.data, undefined];
      },
      (err): [undefined, string] => {
        return [undefined, "Request config error"];
      }
    );

    return apiClient;
  }

  _get(url: string, config?: AxiosRequestConfig<any>): Promise<ResponseI> {
    const get = this._getClient().get(url, config);
    return get as unknown as Promise<ResponseI>;
  }

  _post(
    url: string,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<ResponseI> {
    const post = this._getClient().post(url, data, config);
    return post as unknown as Promise<ResponseI>;
  }

  _patch(
    url: string,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<ResponseI> {
    const patch = this._getClient().patch(url, data, config);
    return patch as unknown as Promise<ResponseI>;
  }

  _put(
    url: string,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<ResponseI> {
    const put = this._getClient().put(url, data, config);
    return put as unknown as Promise<ResponseI>;
  }

  _delete(url: string, config?: AxiosRequestConfig<any>): Promise<ResponseI> {
    const del = this._getClient().delete(url, config);
    return del as unknown as Promise<ResponseI>;
  }
}

const Client = new ApiClient();
const get = Client._get;
const post = Client._post;
const patch = Client._patch;
const put = Client._put;
const del = Client._delete;

export { get, post, patch, put, del };
