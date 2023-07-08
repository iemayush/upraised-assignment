const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("questions.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

let activeQuizes = [];

// Custom route for starting a game
server.post("/start-quiz", (req, res) => {
  let quizId = Math.floor(Math.random() * 9000) + 1000;
  while (activeGames.indexOf(quizId) > -1) {
    quizId = Math.floor(Math.random() * 9000) + 1000;
  }
  activeGames.push(quizId);
  res.json({ quizId });
});

// Custom route for retrieving quiz questions
server.get("/quiz-questions", (req, res) => {
  const questions = router.db.get("questions").value();
  res.json(questions);
});

// Custom route for checking quiz responses
server.post("/check-response", (req, res) => {
  const { questionId, userResponse } = req.body;
  const question = router.db
    .get("questions")
    .value()
    .filter((question) => question.id === questionId)[0];
  const { correctOption } = question;

  // Compare user response with correct answer
  const result = userResponse === correctOption;
  res.json(result);
});

server.post("/submit-quiz", (req, res) => {
  const { quizId } = req.body;
  activeQuizes = activeQuizes.filter(quiz => quiz !== quizId)
  res.json({ quizId });
});

server.use(router);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Mock server is running on port ${PORT}`);
});
