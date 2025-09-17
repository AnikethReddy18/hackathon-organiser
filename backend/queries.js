import pkg from "@prisma/client"

const { PrismaClient } = pkg

const prisma = new PrismaClient()

export async function createUser(email, name, password) {
	await prisma.user.create({
		data: { email, name, password }
	})
}

export async function getUser(email) {
	const user = await prisma.user.findUnique({
		where: { email }
	})
	return user
}
