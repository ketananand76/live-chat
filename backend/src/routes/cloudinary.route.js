import express from "express";
import { getCloudinarySignature } from "../controllers/cloudinary.controller.js";

const router = express.Router();
router.get("/signature", getCloudinarySignature);

export default router;
