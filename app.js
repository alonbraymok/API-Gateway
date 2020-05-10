const gateway = require("fast-gateway");
const PORT = process.env.PORT || 8080;

gateway({
  middlewares: [require("cors")(), require("helmet")()],

  routes: [
    {
      prefix: "/user",
      target: "http://ec2-18-221-164-190.us-east-2.compute.amazonaws.com:8081",
    },
    {
      prefix: "/task",
      target: "http://ec2-18-221-111-85.us-east-2.compute.amazonaws.com:8082",
    },
  ],
})
  .start(PORT)
  .then((server) => {
    console.log(`API Gateway listening on ${PORT} port!`);
  });
