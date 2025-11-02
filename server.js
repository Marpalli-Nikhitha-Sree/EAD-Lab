import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

// ✅ Create Token from request body (no DB, no dummy user)
app.post("/token", (req, res) => {
  const payload = req.body; // whatever you send
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  res.json({ token });
});

// ✅ Verify Token
app.get("/check", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "Valid ✅", data: decoded });
  } catch (err) {
    res.status(401).json({ error: "Invalid token ❌" });
  }
});

app.listen(process.env.PORT || 4000, () =>
  console.log(`✅ Running at http://localhost:${process.env.PORT || 4000}`)
);