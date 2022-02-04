import { Router } from "express";
import W2Routes from "./w2";

import { get } from "../controllers/test";

const router = Router();

router.get("/", get);
router.use("/w2", W2Routes);

export default router;