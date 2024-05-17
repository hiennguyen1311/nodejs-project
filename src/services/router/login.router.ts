import { apiResult } from "@utils/utils";
import express from "express";

const LoginRouter = express.Router();

/**
 * @swagger
 * resourcePath: /api
 * description: All about API
 */

/**
 * @swagger
 * /api/v1/sign-in:
 *   post:
 *     summary: Sign in users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     parameters:
 *        - name: username
 *          description: Your username
 *          paramType: query
 *          dataType: string
 *        - name: password
 *          description: Your password
 *          paramType: query
 *          dataType: string
 *
 */
LoginRouter.post("/api/v1/sign-in", async (req, res) => {
	const {} = req.query;
	const { username, password } = req.body;
	const {} = req.headers;
	if (username && password) {
		res.json({ username, password });
		return apiResult(res, true, true, null);
	} else {
		return apiResult(res, false, undefined, "Missing Authorization");
	}
});
/**
 * @swagger
 * models:
 *   User:
 *     id: User
 *     properties:
 *       username:
 *         type: String
 *       password:
 *         type: String
 */

export default LoginRouter;
