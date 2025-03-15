import { Router } from "express";
import { login, register, territories } from "../controller/controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/app/login", login, (req, res) => {
  res.send("login");
});

router.post("/app/register", register, (req, res) => {
  res.send("register");
});

router.get("/app/territories", territories, (req, res) => {
  res.send("territories");
});

router.post("/app/address", (req, res) => {
  res.send("address");
});

export default router;
