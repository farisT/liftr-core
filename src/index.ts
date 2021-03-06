export * from './core';
export * from './interfaces';
export * from './components/router';
import { ValidationError, ValidationOptions, ValidationResult, SchemaLike } from '@hapi/joi';

declare global {
    namespace Express {
        export interface Request  {
          validate<T>(value: T, schema: SchemaLike, options?: ValidationOptions): ValidationResult<T>;
          validate<T, R>(value: T, schema: SchemaLike, callback: (err: ValidationError, value: T) => R): R;
          validate<T, R>(value: T, schema: SchemaLike, options: ValidationOptions, callback: (err: ValidationError, value: T) => R): R;
      }
  }
}
