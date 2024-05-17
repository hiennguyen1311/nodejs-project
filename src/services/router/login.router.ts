import { SignInParams } from "@models/model";
import { apiResult } from "@utils/utils";
import express, { Request } from "express";

const LoginRouter = express.Router();

LoginRouter.get("/api/v1/sign-in", async (req: Request<SignInParams>, res) => {
	const {} = req.query;
	const { username, password } = req.params;
	const { authorization } = req.headers;
	if (authorization) {
		return apiResult(res, true, true, null);
	} else {
		return apiResult(res, false, undefined, "Missing Authorization");
	}
});

export default LoginRouter;
