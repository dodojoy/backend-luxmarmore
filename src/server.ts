import express, { Application } from "express";
import { routes } from "./routes";

const app: Application = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is running in port 3000"));