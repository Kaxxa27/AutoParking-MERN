const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Routes
const userRoutes = require('./src/routes/user.routes'); 

const app = express();
const PORT = process.env.PORT || 7777;
const URL = 'mongodb+srv://Kaxxa:Kaxxa123@cluster0.hzryrjr.mongodb.net/AutoParking?retryWrites=true&w=majority';

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to DB
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((res) => console.log('Connected to MongoDb'))
.catch((err) => console.log(`DB connection error: ${err}`));

// Connect routes
app.use('/api/users', userRoutes); 

// Start server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});