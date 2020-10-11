const express = require("express");
const placesRoutes = require("./routes/places-routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/place', placesRoutes);

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log("server running on PORT", port);
});