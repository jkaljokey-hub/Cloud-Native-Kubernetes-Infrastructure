import React from 'react'

const footer = () => {
  return (
    <div>

        

    </div>
  )
}

export default footer



/*

const express = require("express");
const cors = require("cors");
const os = require("os");
const app = express();
const PORT = process.env.PORT || 3000;

const APP_NAME = process.env.APP_NAME;

const ENVIRONMENT = process.env.ENVIRONMENT;
app.use(cors());



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

*/
