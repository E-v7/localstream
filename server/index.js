const express = require("express");
const settings = require("./settings.json");
const path = require("path");
const app = express();
const port = 3000;

// app.use(express.static(path.join("D:", "Movies")));

app.get("/", (req, res) => {
  // Requested content will be a filename including extension
  content = req.query.content;

  res.sendFile(path.join(settings.content_dir, content));
});

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
