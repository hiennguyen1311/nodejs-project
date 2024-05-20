import { DEFAULT_HTTP_CODE } from "@src/config/config.index";
import { Response } from "express";

export function apiResult<TData = any>(
	res: Response<any, Record<string, any>>,
	isSuccess = true,
	data: TData = {} as TData,
	error: string | null = null
) {
	return res
		.status(DEFAULT_HTTP_CODE)
		.send(apiResponse(isSuccess, data, error));
}

export function apiResponse<TData = any>(
	isSuccess = true,
	data: TData = {} as TData,
	error: string | null = null
) {
	return {
		isSuccess,
		data,
		error,
	};
}
