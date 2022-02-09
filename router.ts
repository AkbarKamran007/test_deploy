import { Router } from "express";

import controllerSticker from "./controller";

const router = Router();

router.get("/", controllerSticker.getResponseSticker);
export default router;
