const gateway = require("fast-gateway");
const PORT = process.env.PORT || 8080;

gateway({
  middlewares: [require("cors")(), require("helmet")()],

  routes: [
    {
      prefix: "/user",
      target: "http://localhost:8081",
    },
    {
      prefix: "/task",
      target: "http://localhost:8082",
    },
  ],
})
  .start(PORT)
  .then((server) => {
    console.log(`API Gateway listening on ${PORT} port!`);
  });
