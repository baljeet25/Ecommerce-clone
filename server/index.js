const express = require("express");
const Razorpay = require("razorpay");
const app = express();
const PORT = process.env.PORT || 3000; 

const cors = require("cors");
require('dotenv').config();


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/orders", async (req, res) => {

    try {
        const options = req.body;
        const order = await razorpay.orders.create(options);
        
        if (!order) {
            return res.status(500).send("Error creating order");
        }
        
        res.json(order);
        
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).send("Error creating order");
    }
});

app.listen(PORT, () => {
    console.log("Listening on port", PORT);
});
