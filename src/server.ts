import express from "express";
import { userRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users",userRoutes);

app.get("/", (request, response) => {
  response.json("hello world");
});

app.listen(3334, () => console.log("Server is running"));
