const port = 3027;

const { createApp } = require("@unleash/proxy");

const app = createApp({
  unleashUrl: "http://localhost:4242/api",
  unleashApiToken:
    "*:*.fa56c94545b015752d414bb69954ebe6a49981a7883fdf06e3ea56e9",
  clientKeys: ["proxy-client-key"],
});

app.listen(port, () =>
  console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`)
);
