import { Router } from "express";
import { createCategoryController, createProblemStatementController, getProblemStatemntsController } from "../controllers/problemStatement.js"

const router = Router();

router.get("/", getProblemStatemntsController)

router.post("/", createProblemStatementController)
router.post("/category", createCategoryController)

export default router



