const express = require("express");

const cors = require("cors");

import { generalRouter } from "./routes/general";
import * as admin from "firebase-admin";
import credentials from "../credentials.json";

admin.initializeApp({
  credential: admin.credential.cert(<admin.ServiceAccount>credentials),
});

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/general", generalRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
