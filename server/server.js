import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "UPDATE", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
    res.send("Server is on 🔥");
})

app.listen(port, (req, res) => {
    console.log(`✅ Server is running on http://localhost:${port}`);
})