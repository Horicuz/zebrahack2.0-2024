function calculateQuizScore(answers) {
  let score = 0;
  const pointValues = {};
  // Initialize point values for questions 1-7 with the same scoring pattern
  for (let i = 1; i <= 9; i++) {
    pointValues[`q${i}`] = {
      1: 3,
      2: 2,
      3: 1,
      4: 0,
    };
  }

  // Calculate score based on point values for each answer
  for (let question in answers) {
    if (pointValues[question] && pointValues[question][answers[question]]) {
      score += pointValues[question][answers[question]];
    }
  }
  dificultate = "";
  if (score < 9) {
    document.getElementById(
      "result-text"
    ).innerHTML = `In urma quizu-lui iti recomandam sa incepi cu articolele de nivel incepator.`;
  } else if (score < 18) {
    document.getElementById(
      "result-text"
    ).innerHTML = `Articolele de nivel intermediar sunt potrivite pentru tine.`;
  } else {
    document.getElementById(
      "result-text"
    ).innerHTML = `Esti pregatit pentru articolele de nivel avansat.`;
  }

  const totalPossibleScore = 27; // Update this based on maximum possible points
  // Fixed template literal
  console.log(`Your score is ${score} out of ${totalPossibleScore}`); // Fixed template literal
}

addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-quiz"); // Adjust the selector based on your button's ID
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const answers = {}; // Create an object to store answers
    // Collect all radio button answers
    for (let i = 1; i <= 9; i++) {
      const selectedAnswer = document.querySelector(
        `input[name="q${i}"]:checked`
      );
      if (selectedAnswer) {
        answers[`q${i}`] = parseInt(selectedAnswer.value);
      }
    }
    calculateQuizScore(answers);

    // Show the result
    document.getElementById("result").style.display = "flex";

    const resultSection = document.getElementById("result");
    resultSection.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
