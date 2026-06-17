const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Backend API 🚀");
});

app.get("/api", (req, res) => {
  res.send("Hello from Backend API 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "backend"
  });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
