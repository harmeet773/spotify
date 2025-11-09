import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import querystring from "querystring";

dotenv.config();

const app = express();
const port = 3000;

const {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
} = process.env;

app.listen(port, () => console.log(`Server running on ${port}`));

app.get('/',(req,res) => { res.json({status:"running"})   }  );
