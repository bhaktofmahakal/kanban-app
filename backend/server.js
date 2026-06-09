import app from "./src/app.js";

const port = process.env.PORT || 3001;

app.listen(port);

if (process.env.RENDER_EXTERNAL_URL) {
  setInterval(() => {
    fetch(`${process.env.RENDER_EXTERNAL_URL}/health`).catch(() => {});
  }, 10 * 60 * 1000);
}
