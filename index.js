//import all required packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/AuthRoutes.js"

// Configure Environment Variables
//Purpose: Loads environment variables from a .env file into the process.env object. This allows you to securely use environment-specific configuration (like PORT or DATABASE_URL) without hardcoding them into your application.
dotenv.config();


// Create Express Application
//Purpose: Initializes an Express application. This app object will be used to define routes, middleware, and server behavior.
const app = express();

//Sets the port on which the server will listen for incoming requests.
const port = process.env.PORT || 3001;

//Database Connection URL
const databaseURL = process.env.DATABASE_URL;

//using middleware cors and Configuration of cors
app.use(cors({
        origin: process.env.ORIGIN || "http://localhost:5175",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true
    })
);

app.use("/uploads/profiles", express.static("uploads/profiles"));

//Integrates the cookie-parser middleware into the Express application.
app.use(cookieParser());

//Adds the express.json() middleware to the application.
app.use(express.json());

app.use("/api/auth", authRoutes);

// Start the Server
const server = app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})

// Connect to MongoDB
mongoose.connect(databaseURL).then(() => console.log("DB connection successfull")).catch((err) => console.log(err.message));