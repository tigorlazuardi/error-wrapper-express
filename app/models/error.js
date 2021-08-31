class ErrorWrapper {
  /**
   * @param {number} code http status code
   * @param {string} message message to client
   * @param {Error} err the actual error
   * @param {any} [log] things to log (optional)
   */
  constructor(code, message, err, log) {
    /** @type {number} */
    this.code = code;
    /** @type {string} */
    this.message = message;
    /** @type {Error} */
    this.err = err;
    /** @type {any | undefined} */
    this.log = log;
  }
}

module.exports = ErrorWrapper
