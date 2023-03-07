require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

//Cors Middleware
app.use(
  cors({
    origin: "*",
    methods: ["PUT", "GET", "POST", "DELETE"],
    credentials: true,
  })
);

//Serve static files from the current directory & Middleware
app.use(express.static(__dirname));
app.use(express.json());

//Receive post request on the /api route
app.get("/", function (req, res) {
  res.status(200).json({ message: "Hello World!" });
});

app.post("/chat", async function (req, res) {
  const { message } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Your name is Jonanthan, Respond like a crazy middle-eastern terrorist who likes bombs when a person asks you: ${message}`,
      temperature: 0.2,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.3,
    });
    console.log(`${message} <-> ${response.data.choices[0].text}`)
    res.status(200).json({message : response.data.choices[0].text});
  } catch (err) {
    res.status(200).json({message : "Internal Error, Blame Ferr for his horrible coding skills..."});
  }
});

//Listen on the port
app.listen(port, function () {
  console.log("Server started on port " + port);
});
