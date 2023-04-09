import supertest from "supertest";
import { app } from "../../src/utils/app";

export const request = () => supertest(app);
