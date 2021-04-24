/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */

import errorMessages from '../constants/error.constants';

export class GeneralError extends Error {
  constructor(message = errorMessages.internalServerError) {
    super(message);
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequestError) {
      return 400;
    }
    if (this instanceof NotFoundError) {
      return 404;
    }
    return 500;
  }
}

export class BadRequestError extends GeneralError {
  constructor(message = errorMessages.badRequest) {
    super(message);
  }
}

export class NotFoundError extends GeneralError {
  constructor(message = errorMessages.notFound) {
    super(message);
  }
}
