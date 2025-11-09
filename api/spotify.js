import axios from "axios";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

let redirect_uri ;
app.use((req,res)=>  {redirect_uri = getRedirectUri(req);}  )
let {client_id} = process.env;

const getRedirectUri = (req) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  return `${baseUrl}/callback`;
};

var app = express();

app.get('/', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'playlist-read-private';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});


app.post('/callback', function(req, res) {  
    return res.json({"me":"hiii",...req});
  })   ; 