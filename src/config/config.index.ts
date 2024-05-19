export const Config = {
	PORT: 5001,
	DIR: "/NodeProject",
};

export const EmailConfig = {
	from: "photoawesome.server@gmail.com",
	host: "smtp.gmail.com", // hostname
	secureConnection: false, // use SSL
	port: 587, // port for secure SMTP
	transportMethod: "SMTP", // default is SMTP. Accepts anything that nodemailer accepts
	auth: {
		user: "photoawesome.server@gmail.com",
		pass: "thegunner1996",
	},
	tls: {
		// do not fail on invalid certs
		rejectUnauthorized: false,
	},
};

export const DEFAULT_HTTP_CODE = 200;
