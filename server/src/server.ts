import express, { Application } from "express";
import { ENV } from "./utils/env.js";

const app: Application = express();

app.listen(ENV.SERVER_PORT, () =>
    console.log(`Server running on port ${ENV.SERVER_PORT}`)
);
