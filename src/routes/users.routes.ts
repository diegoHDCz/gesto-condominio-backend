import { Request, Response, Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Users } from "../model/Users";

const userRoutes = Router();

const users: Users[] = [];

userRoutes.post("/", (request: Request, response: Response) => {
  const { name, email, password, password_confirmation } = request.body;

  const user: Users = {
    id: uuidv4(),
    name,
    email,
    password,
    password_confirmation,
    created_at: new Date(),
    updated_at: new Date(),
  };

  users.push(user);

  return response.status(201).send();
});

export { userRoutes };
