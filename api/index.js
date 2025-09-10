export default app;
import express from "express";

const app = express();

app.get("/like", (req, res) => {
  res.json({ status: "success", message: "API chạy ok!" });
});

export default app;
