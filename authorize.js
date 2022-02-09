const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("<h1>Unauthorized</h1>");
    return;
  }
  console.log("Authorize");
  next();
};

module.exports = authorize;
