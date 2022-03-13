const express = require('express');
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 3001
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/fridge/items', require('./routes/itemRoutes'))
app.use('/fridge/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))


