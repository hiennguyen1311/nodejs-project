import { checkAuthenTication } from "@services/authentication.service";
import { apiResult } from "@utils/utils";
import express from "express";

const UserRouter = express.Router();

UserRouter.get("/api/v1/profile", async (req, res) => {
	if (checkAuthenTication(req, res, true)) {
		return apiResult(res, true, true, null);
	}

	return;
});

export default UserRouter;
