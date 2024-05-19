import { apiResult } from "@utils/utils";
import express from "express";

const LoginRouter = express.Router();

LoginRouter.post("/api/v1/sign-in", async (req, res) => {
	/**
	 * #swagger.path = '/api/v1/sign-in'
	 * #swagger.method = 'post'
	 */
	const {} = req.query;
	const {} = req.headers;
	const {} = req.params;
	const { username, password }: { username: string; password: string } =
		req.body;
	if (username && password) {
		res.json({ username, password });
		return apiResult(res, true, true, null);
	} else {
		return apiResult(res, false, undefined, "Missing Authorization");
	}
});

export default LoginRouter;
