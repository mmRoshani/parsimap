import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestOptions {
  client: AxiosInstance;
}

export class RequestService<T = any> {
  protected client: AxiosInstance;

  constructor(options: RequestOptions) {
    this.client = options.client;
  }

  protected async get<M = T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<M>> {
    return this.client.get<M>(url, config);
  }

  protected async post<M = T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<M>> {
    return this.client.post<M>(url, data, config);
  }

  protected async put<M = T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<M>> {
    return this.client.put<M>(url, data, config);
  }

  protected async delete<M = T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<M>> {
    return this.client.delete<M>(url, config);
  }

  protected async patch<M = T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<M>> {
    return this.client.patch<M>(url, data, config);
  }
}
