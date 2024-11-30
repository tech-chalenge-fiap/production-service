/* eslint-disable @typescript-eslint/no-explicit-any */
export class FailedDependencyError extends Error {
  constructor (error?: any) {
    const messageError = 'Failed dependency'
    super(messageError)
    this.message = messageError
    this.statusCode = 424
    if (typeof error === 'string') this.body = error
    if (typeof error === 'object') {
      if (typeof error.body === 'string') { this.body = error.body }
      if (error.body.errors) {
        if (typeof error.body.errors === 'object') {
          this.body = JSON.stringify(error.body.errors)
        }
      } else {
        this.body = JSON.stringify(error.body)
      }
    }
  }

  statusCode: number
  body: any
}
