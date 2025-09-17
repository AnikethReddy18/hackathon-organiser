import { Router } from "express"
import { loginUserController, signupUserController } from "../controllers/userController.js"

const router = Router()

router.post("/login", loginUserController)
router.post("/signup", signupUserController)

export default router
