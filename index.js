import express from "express";
import axios from "axios";
import dotenv from "dotenv";


dotenv.config();

const app = express();

const getRedirectUri = (req) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  return `${baseUrl}/callback`;
};

const port = 3000;

const {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
} = process.env;

//app.listen(port, () => console.log(`Server running on ${port}`));

app.get('/',(req,res) => { res.json({status:"running"})   }  );


