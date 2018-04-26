// Listen to incoming HTTP requests, can only be used on the server
WebApp.connectHandlers.use("/graphql", function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("X-Moonly-Custom", "true"); // dummy custom header test to see if custom headers works or not
  return next();
});
