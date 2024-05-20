import { apiResult } from "@utils/utils";
import express from "express";

const UserRouter = express.Router();

UserRouter.get("/api/v1/profile", async (req, res) => {
	if (req.headers.authorization) {
		return apiResult(res, true, true, null);
	} else {
		return apiResult(res, false, undefined, "Missing Authorization");
	}
});

export default UserRouter;
