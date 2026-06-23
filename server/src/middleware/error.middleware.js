const err = async (err, req, res, next) => {
  const statusCode = err.status;
  const message = err.message;
  console.log(`Error: ${message}, status code: ${statusCode}`);
  res.status(statusCode).json({
    success: false,
    error: {
      status: statusCode,
      message: message,
      timestamp: new Date().toISOString()
    },
  });
};

module.exports = err