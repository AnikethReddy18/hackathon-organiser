import { createUser, getUser } from "../queries.js";
import bcrypt, { hash } from "bcrypt"
import jwt from "jsonwebtoken"

export async function signupUserController(req, res) {
	const { email, password, name } = req.body
	const hashedPassword = await bcrypt.hash(password, 9)
	await createUser(email, name, hashedPassword)

	res.sendStatus(200)
}

export async function loginUserController(req, res) {
	const { email, password } = req.body

	const user = await getUser(email)
	if (!user) res.status(401).json({ "error": "Email does not associated with site" })

	const verified = bcrypt.compareSync(password, user.password)
	if (!verified) res.status(401).json({ "error": "Incorrect Password" })
	jwt.sign(user, process.env.SECRET_KEY, (err, token) => {
		if (err) {
			console.log("Error signing JWT: ", err)
			return res.status(500).json({ "error": "Failed to generate token" })
		}
		res.send({ token })
	})
}
