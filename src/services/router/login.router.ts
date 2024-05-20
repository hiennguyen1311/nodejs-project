import { checkAuthenTication } from "@services/authentication.service";
import { apiResult } from "@utils/utils";
import express from "express";

const LoginRouter = express.Router();

LoginRouter.post("/api/v1/sign-in", async (req, res) => {
	const { username, password } = req.body;

	if (checkAuthenTication(req, res)) {
		if (username && password) {
			return apiResult(res, true, true, null);
		} else {
			return apiResult(res, false, undefined, "Missing Authorization");
		}
	}

	return;
});

export default LoginRouter;
