import pkg from "@prisma/client"

const { PrismaClient } = pkg

const prisma = new PrismaClient()

export async function createUser(email, name, password) {
	await prisma.user.create({
		data: { email, name, password }
	})
}

export async function getUser(email) {
	constuser = await prisma.user.findUnique({
		where: { email }
	})
	return user
}

export async function createCategory(name) {
	await prisma.category.create({
		data: { name }
	})
}

export async function getCategory(name) {
	const cat = await prisma.category.findUnique({
		where: { name }
	})

	return cat
}

export async function createProblemStatement(title, description, cat) {
	const { id } = await getCategory(cat)
	await prisma.problemStatement.create({
		data: { title, description, categoryId: id }
	})
}

export async function getProblemStatements() {
	const problemStatements = await prisma.problemStatement.findMany()
	return problemStatements
}
