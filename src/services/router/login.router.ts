import { apiResult } from "@utils/utils";
import express from "express";

const LoginRouter = express.Router();

/**
 * @swagger
 * /api/v1/sign-in:
 *   post:
 *     summary: Sign in users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
LoginRouter.post("/api/v1/sign-in", async (req, res) => {
	const {} = req.query;
	const {} = req.params;
	const { username, password } = req.body;
	const {} = req.headers;
	if (username && password) {
		return apiResult(res, true, true, null);
	} else {
		return apiResult(res, false, undefined, "Missing Authorization");
	}
});

export default LoginRouter;
