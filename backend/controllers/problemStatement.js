import { createProblemStatement, getProblemStatements, createCategory, getProblemStatementsByCategory } from "../queries.js"

export async function createProblemStatementController(req, res) {
	const { title, description, category } = req.body;
	await createProblemStatement(title, description, category)
	res.send(200)
}

export async function getProblemStatemntsController(req, res) {
	const problemsStatements = await getProblemStatements()
	res.send(problemsStatements)
}

export async function createCategoryController(req, res) {
	const { name } = req.body;
	await createCategory(name);
	res.send(200)
}

export async function getCategoriesController(req, res) {
	const data = await getCategories()
	res.send(data)
}

export async function getProblemStatementsByCategoryController(req, res) {
	const data = await getProblemStatementsByCategory(req.params.category)
	res.send(data)
}
