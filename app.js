// QUESTION SET - 2
// Create schema-models based on the following structure (User and Event).
// → Include Bootstrap-based client-side form validation.
// Implement full CRUD operations for Event using the following routes:
// ● GET /events
// ● GET /event/new
// ● POST /event
// ● GET /events/:id
// ● GET /events/:id/edit
// ● PUT /events/:id
// ● DELETE /events/:id
// Only eventName should be immutable once created.
// Forms should have inputs as per the updated schema:
// ● User: username, password, contactNumber, organization, role
// ● Event: eventName, location, eventDate, description, maxParticipants
// Use Bootstrap validation for inputs like phone format, required fields, and proper date
// selection.
// Set up authentication using Passport with the following routes:
// ● /register
// ● /login
// ● /logout
// Show the user’s organization name in the top-right once logged in.
// Use express-session and Passport for managing login sessions.
// Maintain a proper folder structure:
// ● public/ – for custom styles and Bootstrap
// ● views/ – create appropriate templates using EJS
// ● models/ – define user.js and event.js separately
// ● routes/ – include routing files for user and event logic
// No dummy data is needed.
// Do not upload node_modules or package-lock.json.
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
