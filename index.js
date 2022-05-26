require("dotenv").config();
const port = 3027;

const { createApp } = require("@unleash/proxy");

const app = createApp({
  unleashUrl: "http://localhost:4242/api",
  unleashApiToken: process.env.API_TOKEN,
  clientKeys: ["proxy-client-key"],
});

app.listen(port, () =>
  console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`)
);
