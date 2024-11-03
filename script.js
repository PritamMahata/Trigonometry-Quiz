const questionsPool = [
    { question: "sin(30°)", answer: "1/2", options: ["1/2", "√3/2", "√2/2", "1"] },
    { question: "cos(60°)", answer: "1/2", options: ["1", "1/2", "√3/2", "0"] },
    { question: "tan(45°)", answer: "1", options: ["√3", "1", "0", "1/2"] },
    { question: "sin(90°)", answer: "1", options: ["1", "√2/2", "0", "1/2"] },
    { question: "cos(0°)", answer: "1", options: ["1", "0", "√3/2", "1/2"] },
    { question: "sin(45°)", answer: "√2/2", options: ["1", "1/2", "√3/2", "√2/2"] },
    { question: "cos(45°)", answer: "√2/2", options: ["1", "√2/2", "1/2", "0"] },
    { question: "tan(30°)", answer: "1/√3", options: ["1", "√3", "1/√3", "1/2"] },
    { question: "cos(90°)", answer: "0", options: ["1", "0", "1/2", "√3/2"] },
    { question: "sin(0°)", answer: "0", options: ["0", "1/2", "1", "√2/2"] }
  ];
  
  let timeLeft = 10;
  let timer;
  
  function loadQuestion() {
    const currentQuestion = getRandomQuestion();
    document.getElementById("question").innerText = currentQuestion.question;
    const optionButtons = document.querySelectorAll("#options button");
  
    currentQuestion.options.forEach((option, index) => {
      optionButtons[index].innerText = option;
      optionButtons[index].disabled = false;
      optionButtons[index].style.backgroundColor = "#007bff";
    });
  
    startTimer();
  }
  
  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionsPool.length);
    return questionsPool[randomIndex];
  }
  
  function startTimer() {
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById("time-left").innerText = timeLeft;
  
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("time-left").innerText = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        showNextButton();
      }
    }, 1000);
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestionText = document.getElementById("question").innerText;
    const currentQuestion = questionsPool.find(q => q.question === currentQuestionText);
  
    if (selectedOption.innerText === currentQuestion.answer) {
      selectedOption.style.backgroundColor = "green";
    } else {
      selectedOption.style.backgroundColor = "red";
    }
    disableOptions();
    showNextButton();
  }
  
  function disableOptions() {
    const optionButtons = document.querySelectorAll("#options button");
    optionButtons.forEach(button => button.disabled = true);
  }
  
  function showNextButton() {
    document.getElementById("next-btn").style.display = "inline-block";
  }
  
  function nextQuestion() {
    document.getElementById("next-btn").style.display = "none";
    loadQuestion();
  }
  
  window.onload = loadQuestion;
  