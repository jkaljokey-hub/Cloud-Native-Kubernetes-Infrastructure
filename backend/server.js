const express = require("express");
const cors = require("cors");
const os = require("os");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

const APP_NAME = process.env.APP_NAME;

const ENVIRONMENT = process.env.ENVIRONMENT;

app.get("/api/info", (req, res) => {
    res.json({
        app: APP_NAME,
        environment: ENVIRONMENT,
        hostname: os.hostname()
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
