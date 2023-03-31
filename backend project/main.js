const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require('./dataSchema');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/reactdata',
 { useNewUrlParser: true });

app.post('/insert', async (req, res) => {
    const FirstName = req.body.fname
    const PersonAge = req.body.age
    const PersonEmail = req.body.email

    const formData = new User({
        fname: FirstName,
        age: PersonAge,
        email: PersonEmail
    })

    try {
        await formData.save();
        res.send("inserted data..")
    } catch (err) {
        console.log(err)
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});