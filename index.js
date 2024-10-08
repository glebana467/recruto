import express from "express";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;





app.get("/", (req, res) => {
    var name = req.query.name;
    var message = req.query.message;
    res.send(`<h1>Hello ${name}! ${message}!</h1>`)
    console.log(`Hello ${name}! ${message}!`)
  });

app.listen(port, () => {
console.log(`Listening on port ${port}`);
});

