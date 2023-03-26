import express from "express";
import { json } from "body-parser";

export const app = express();

app.use(json());
