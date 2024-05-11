// Centralized all pure function
import { ApiResponseOptions } from '@nestjs/swagger';
import { NormalException } from 'src/exception/normal.exception';

export const toSwaggerError = (
  exception: NormalException,
  options?: ApiResponseOptions,
) => {
  return {
    content: { 'application/json': { example: exception.toJSON() } },
    ...options,
  };
};
