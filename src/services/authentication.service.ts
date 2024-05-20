import { apiResult } from "@utils/utils";
import { Request, Response } from "express";

export function checkAuthenTication(
	req: Request<{}, any, any, any, Record<string, any>>,
	res: Response<any, Record<string, any>>,
	isAuthorzation = false
) {
	if (!req.headers["x-api-key"]) {
		apiResult(res, false, {}, "Missing X-Api-Key", 401);
		return false;
	}
	if (!req.headers.authorization && isAuthorzation) {
		apiResult(res, false, {}, "Missing Authorization", 401);
		return false;
	}
	return true;
}
