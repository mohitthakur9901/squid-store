import { RegisterUser  ,LoginUser } from "../controller/Authentication";
import express from "express";

const router = express.Router();



router.post("/signup", RegisterUser);
router.post("/login", LoginUser);










export default router
