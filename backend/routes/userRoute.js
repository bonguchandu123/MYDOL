

import express from "express";


import { updateUserBranchYear } from "../controllers/userController.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.put("/setup", requireAuth(), updateUserBranchYear);

export default router;
