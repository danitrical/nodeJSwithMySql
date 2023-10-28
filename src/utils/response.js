const successResponse = (message, data, statusCode = 200) => ({
    statusCode: statusCode,
    message,
    data,
  });


const errorResponse = (message, data, statusCode = 404) => ({
  statusCode: statusCode,
  message,
  data,
});

module.exports = {
  successResponse, errorResponse
}