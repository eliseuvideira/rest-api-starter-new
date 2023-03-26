import { Router } from "express";
import { usersCreate } from "../endpoints/users/usersCreate";
import { usersGetById } from "../endpoints/users/usersGetById";
import { usersGetMany } from "../endpoints/users/usersGetMany";
import { usersUpdate } from "../endpoints/users/usersUpdate";

export const router = Router();

router.get("/users", usersGetMany);

router.get("/users/:userId", usersGetById);

router.post("/users", usersCreate);

router.patch("/users/:userId", usersUpdate);
