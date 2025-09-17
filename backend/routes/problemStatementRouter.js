import { Router } from "express";
import { createCategoryController, createProblemStatementController, getProblemStatemntsController, getCategoriesController, getProblemStatementsByCategoryController } from "../controllers/problemStatement.js"

const router = Router();

router.get("/", getProblemStatemntsController)
router.get("/category", getCategoriesController)
router.get("/:category", getProblemStatementsByCategoryController)

router.post("/", createProblemStatementController)
router.post("/category", createCategoryController)

export default router



