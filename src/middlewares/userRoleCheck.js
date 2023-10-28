const checkUserRole = (req,res, next) => {
  const role = req.headers?.role;
  if (role === '1') next();
  else res.send({
    status_code: 403,
    message: 'Role is not allowed to access this resource'
  });
};

module.exports = checkUserRole;