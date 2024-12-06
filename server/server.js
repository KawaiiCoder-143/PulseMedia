import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "./config.eve" });

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.NEWS_API_KEY;

if (!API_KEY) {
  console.error("Error: NEWS_API_KEY is missing in config.eve");
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to fetch news
app.get("/api/news", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
