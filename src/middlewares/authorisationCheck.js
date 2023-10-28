const checkAuthorisedValue = (req, res, next) => {
  const headers = req.headers;
  console.log(headers);
  if (headers.authorisedvalue === 'Pakistan') next();
  else res.send({
    status_code: 403,
    message: 'Unauthorised'
  });
};

module.exports = checkAuthorisedValue;
