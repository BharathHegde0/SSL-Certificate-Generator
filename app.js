const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", (req, res, next) => {
	res.send("Hello from SSL Server, This is an Example Web App");
});

const sslServer = https.createServer(
	{
		key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
		cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
	},
	app
);

sslServer.listen(3443, () => console.log("Secure Server on Port 3443"));
