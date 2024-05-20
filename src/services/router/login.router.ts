import { apiResult } from "@utils/utils";
import express from "express";

const LoginRouter = express.Router();

/**
 * @openapi
 * '/api/v1/sign-in':
 *  post:
 *     tags:
 *     - Authentication
 *     summary: Create a user
 *     security:
 *     - apiKeyAuth: []
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *      200:
 *       $ref: '#/components/responses/200'
 */
LoginRouter.post("/api/v1/sign-in", async (req, res) => {
	const { username, password } = req.body;

	if (username && password) {
		return apiResult(res, true, true, null);
	} else {
		return apiResult(res, false, undefined, "Missing Authorization");
	}
});

export default LoginRouter;
