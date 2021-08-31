const ErrorWrapper = require("./models/error");

function errorMiddleware(err, _req, res, _next) {
  if (err instanceof ErrorWrapper) {
    // autocomplete support
    /** @type {ErrorWrapper} */
    const e = err;
    res.status(e.code).json({
      msg: e.message,
      error: e.err?.message || e.err || "unknown error",
    });
		console.error(JSON.stringify(e))
    return;
  }
  res.status(500).json({ msg: err.message || "Internal Server Error" });
}

module.exports = errorMiddleware;
