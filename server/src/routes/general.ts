import express from "express";
import { db } from "../utils/db.server";

import { getAuth } from "firebase-admin/auth";
import { auth } from "firebase-admin";

const router = express.Router();

router.get("/getallusers", async (req, res) => {
  try {
    const users = await db.users.findMany({
      select: {
        id: true,
        email: true,
        username: true,
      },
    }); // Adjust this based on your actual database query
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

export { router as generalRouter };
