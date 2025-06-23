

import express from "express";


import { updateUserBranchYear } from "../controllers/userController.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

// PUT /api/user/setup
router.put("/setup", requireAuth(), updateUserBranchYear);

export default router;
