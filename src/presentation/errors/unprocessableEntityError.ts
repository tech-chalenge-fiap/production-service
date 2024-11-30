export class UnprocessableEntityError extends Error {
  constructor(error?: any) {
    const messageError = 'Unprocessable Entity'
    super(messageError)
    this.message = messageError
    this.statusCode = 422
    if (typeof error === 'string') this.body = error
    if (typeof error === 'object') {
      this.statusCode = error.statusCode
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
