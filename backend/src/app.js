const express = require ('express');
const cors = require ('cors');
const helmet  = require  ('helmet');

const app = express() ; 


//middlewares
app.use (cors());
app.use(helmet());
app.use (express.json());




module.exports = app;