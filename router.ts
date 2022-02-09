import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import controllerSticker from "./controller";

const router = Router();

router.get("/api", controllerSticker.getResponseSticker);
router.get("/", (req: Request, res: Response) => {
  res.send("Hello AKbar");
});
export default router;
