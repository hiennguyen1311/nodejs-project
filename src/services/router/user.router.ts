import { checkAuthenTication } from "@services/authentication.service";
import { apiResult } from "@utils/utils";
import express from "express";

const UserRouter = express.Router();

UserRouter.get("/api/v1/profile", async (req, res) => {
	if (checkAuthenTication(req, res, true)) {
		if (req.headers.authorization) {
			return apiResult(res, true, true, null);
		} else {
			return apiResult(res, false, undefined, "Missing Authorization");
		}
	}

	return;
});

export default UserRouter;
