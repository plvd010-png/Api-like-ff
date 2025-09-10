import express from "express";

const app = express();

app.get("/like", (req, res) => {
  const { uid, region, key } = req.query;

  if (!uid || !region || !key) {
    return res.status(400).json({
      status: "error",
      message: "Missing parameters: uid, region, key"
    });
  }

  if (key !== "duybeo") {
    return res.status(403).json({
      status: "error",
      message: "Invalid API key"
    });
  }

  // Fake likes
  const before = Math.floor(Math.random() * 10000);
  const given = 100;
  const after = before + given;

  res.json({
    status: "success",
    uid,
    region,
    LikesbeforeCommand: before,
    LikesGivenByAPI: given,
    LikesafterCommand: after
  });
});

export default app;
