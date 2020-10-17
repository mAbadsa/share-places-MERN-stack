class HttpError extends Error {
  constructor(message, errorCode) {
    super(messgae); // Add a "message property"
    this.code = errorCode; // Add a "code property"
  }
}

module.exports = HttpError;
