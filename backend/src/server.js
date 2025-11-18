require('dotenv').config();
const connectDB = require('./config/db');
const  app = require ('./app');

const PORT = process.env.PORT || 5000;


//connect database 
connectDB();


//start server 
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});