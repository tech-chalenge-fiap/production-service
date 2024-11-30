import { type UnprocessableEntityError } from '@/domain/errors'

export interface ValidationInterface {
  validate: (input: Record<string, unknown> | unknown[]) => Error | undefined
}

export interface InputValidationInterface {
  validate: (input: Record<string, unknown> | unknown[]) => string[] | null | UnprocessableEntityError
}
