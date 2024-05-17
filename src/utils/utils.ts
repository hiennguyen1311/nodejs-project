import { DEFAULT_HTTP_CODE } from "@src/config/config.index";

export function apiResult(
	res: any,
	isSuccess = true,
	data: any = {},
	error: string | null = null
) {
	return res
		.status(DEFAULT_HTTP_CODE)
		.send(apiResponse(isSuccess, data, error));
}

export function apiResponse(
	isSuccess = true,
	data: any = {},
	error: string | null = null
) {
	return {
		isSuccess,
		data,
		error,
	};
}
