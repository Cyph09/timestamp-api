const express = require("express");

const timeStampRouter = require("./routes/api/timestamp");

const app = express();

// Middleware

// Routes
app.use("/", timeStampRouter);

// Error handling

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
