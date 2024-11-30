/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpResponse {
  statusCode: number
  body: any
  errorInfo?: any
  headers?: any
}

export interface HttpRequest {
  body?: any
  headers?: any
}
