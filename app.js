const express = require("express");
const path = require("path");

//initiate express server
const app = express();
app.use(express.static(path.join(__dirname, "public")));

// This should come after routes, but before 404 and error handling.
if (process.env.NODE_ENV === "production") {
  // Serve the client's index.html file at the root route
  app.get("/", (req, res) => {
    // res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });

  // Serve the static assets in the client's build folder
  app.use(express.static("client/build"));

  // Serve the client's index.html file at all other routes NOT starting with /api
  app.get(/\/(?!api)*/, (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(3000, () => console.log("listening on port 3000"));
