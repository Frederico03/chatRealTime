import { addMessage, getAllMessage } from "../controllers/messageController.js";

import express from "express";
const router = express.Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getAllMessage)

export default router;
