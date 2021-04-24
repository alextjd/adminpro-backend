// https://codeburst.io/better-error-handling-in-express-js-b118fc29e9c7

const errorMessages = {
  internalServerError:
    'An internal problem happened while trying to fullfill the request.',
  badRequest:
    'Part of the request data is either missing or invalid. Please check again the request.',
  notFound: 'The requested resource was not found.',
  emailAlreadyExists:
    'The chosen email is already taken. Please choose another one.',
  userAlreadyExists: 'This user already exists.',
  login: 'Invalid login credentials.',
};

export default errorMessages;
