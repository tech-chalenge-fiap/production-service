/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
  responseType?: any
  timeout?: number
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch'

export enum HttpMethodEnum {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch'
}

export enum HttpStatusCode {
  success = 200,
  successfullyCreated = 201,
  noContent = 204,
  partialContent = 206,
  multiStatus = 207,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  unprocessableEntity = 422,
  failedDependency = 424,
  serverError = 500,
  gatewayTimeout = 504
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
  headers?: any
}
