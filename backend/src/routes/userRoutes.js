import { register, login, setAvatar, getAllUsers } from "../controllers/usersControllers.js"; // Ajuste o caminho do arquivo conforme a estrutura do seu projeto

import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login)
router.post("/setAvatar/:id", setAvatar)
router.get("/allusers/:id", getAllUsers)

export default router;
