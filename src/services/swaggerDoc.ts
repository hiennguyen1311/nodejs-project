export const apiSwaggerDoc = {
	paths: {
		"/api/v1/sign-in": {
			post: {
				tags: ["Authentication"],
				summary: "Create a user",
				security: [
					{
						apiKeyAuth: [],
					},
				],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["username", "password"],
								properties: {
									username: {
										type: "string",
									},
									password: {
										type: "string",
									},
								},
							},
						},
					},
				},
				responses: {
					"200": {
						$ref: "#/components/responses/200",
					},
				},
			},
		},
	},
};
