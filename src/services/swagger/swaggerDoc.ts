export const apiSwaggerDoc = {
	paths: {
		"/api/v1/sign-in": {
			post: {
				tags: ["Authentication"],
				summary: "Create a user",
				security: [
					{
						ApiKeyAuth: [],
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
		"/api/v1/profile": {
			get: {
				tags: ["Profile"],
				summary: "Get user profile",
				security: [
					{
						ApiKeyAuth: [],
						bearerAuth: [],
					},
				],
				responses: {
					"200": {
						$ref: "#/components/responses/200",
					},
					"401": {
						$ref: "#/components/responses/401",
					},
				},
			},
		},
	},
};
