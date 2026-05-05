const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();

mongoose.connect('mongodb://localhost:27017/event-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}
).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
}
);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/events');
}
);
app.get('/event',(req,res)=>{
    res.redirect('/events');
}
)

app.post("/login",(req,res)=>{
    const {username,password}=req.body;
    console.log(username);

})

app.get("/register",(req,res)=>{
    res.redirect('/event');
})

app.listen(3000,()=>{
    "server is running at 3000 port"
});
