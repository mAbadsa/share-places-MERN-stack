const express = require("express");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const httpError = require("./models/http-error");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    const error = new httpError("Could not find this route.", 404);
    throw error;
})

app.use((error, req, res, next) => {
    if(res.headersSent) {
        return next(error);
    }

    res.status(error.code || 500);
    res.json({message: error.message || "An unknown error occurred"})
})

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log("server running on PORT", port);
});