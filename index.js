import express from "express";
import { PrismaClient } from "./generated/prisma/client";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.listen(3300, () => {
  console.log("Elindult a http://localhost:3300");
});
