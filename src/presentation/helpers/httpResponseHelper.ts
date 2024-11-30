import { HttpResponse } from '@/data/protocols/http/axiosHttpClient'
import { HttpStatusCode } from '@/data/protocols/http'
import {
  ServerError,
  AccessDeniedError,
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
  FailedDependencyError
} from '@/presentation/errors'

export default (httpResponse: HttpResponse): unknown => {
  const remoteResult = { statusCode: httpResponse.statusCode, body: httpResponse.body }
  switch (httpResponse.statusCode) {
    case HttpStatusCode.success:
      return remoteResult.body
    case HttpStatusCode.successfullyCreated:
      return remoteResult.body
    case HttpStatusCode.unprocessableEntity:
      return remoteResult.body
    case HttpStatusCode.noContent:
      return remoteResult.body
    case HttpStatusCode.partialContent:
      return remoteResult.body
    case HttpStatusCode.badRequest:
      throw new BadRequestError(remoteResult)
    case HttpStatusCode.forbidden:
      throw new AccessDeniedError()
    case HttpStatusCode.notFound:
      throw new NotFoundError('')
    case HttpStatusCode.unauthorized:
      throw new UnauthorizedError()
    case HttpStatusCode.failedDependency:
      throw new FailedDependencyError(remoteResult)
    default:
      throw new ServerError(remoteResult)
  }
}
