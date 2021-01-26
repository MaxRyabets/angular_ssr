const express = require("express");
const path = require("path");

const getTranslatedServer = (lang) => {
  const distFolder = path.join(process.cwd(), `dist/server/${lang}`);
  const server = require(`${distFolder}\\main.js`);
  return server.app(lang);
};

function run() {
  const port = process.env.PORT || 4200;

  const appFr = getTranslatedServer("ua");
  const appEn = getTranslatedServer("en");

  const server = express();
  server.use("/ua", appFr);
  server.use("/en", appEn);
  server.use("", appEn);

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
