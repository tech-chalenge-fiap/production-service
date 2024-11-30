/* eslint-disable @typescript-eslint/no-explicit-any */
export class ServerError extends Error {
  constructor(error?: any) {
    super('Internal Server Error')
    this.message = 'Internal Server Error'
    this.statusCode = 500
    if (typeof error === 'string') this.body = error
    if (typeof error === 'object') {
      this.statusCode = error.statusCode
      if (typeof error.body === 'string') { this.body = error.body }
      if (typeof error.body === 'object') {
        if (error.body.errors) {
          if (typeof error.body.errors === 'object') {
            this.body = JSON.stringify(error.body.errors)
          }
        } else {
          this.body = JSON.stringify(error.body)
        }
      }
      if (error instanceof Error) {
        this.errorInfo = JSON.stringify({
          message: error?.message,
          stack: error?.stack
        })
      }
    }
    if (error?.code) this.code = error?.code
    if (error?.meta) this.meta = error.meta
  }

  name!: string
  message!: string
  stack?: string
  errorInfo?: any
  statusCode: number
  body: any
  code?: any
  meta?: any
}
