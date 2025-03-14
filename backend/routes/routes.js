import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/app/login", (req, res) => {
  res.send("login");
});

router.post("/app/register", (req, res) => {
  res.send("register");
});

export default router;
