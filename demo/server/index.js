// server/index.js
const path = require('path');

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// step 3 This code allows our React and Node app to be deployed together on the same domain
app.use(express.static(path.resolve(__dirname, '../client/build')));

// step 2 create an API endpoint
// Since made changes to Node code, need to restart our server:
// Command/Ctrl + C npm start
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//step 1 build node(express) backend
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
