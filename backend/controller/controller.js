import pool from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const query = await pool.query("SELECT * FROM users WHERE user_email = $1 AND user_password = $2", [email, password]);

        if (query.rows.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: query.rows[0].user_id }, process.env.SECRET_KEY, { expiresIn: "1h" });

        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" });
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required" });
        }

        const query = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING user_id", [name, email, password]);

        if (query.rows.length === 0) {
            return res.status(500).json({ message: "User registration failed" });
        }

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        if (error.code === "23505") {
            return res.status(409).json({ message: "Email already exists" });
        }
        res.status(500).json({ message: "Internal server error" });

    }
}

export const territories = async (req, res) => {
    try {
        const query = await pool.query("SELECT * FROM territories");
        res.status(200).json(query.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

