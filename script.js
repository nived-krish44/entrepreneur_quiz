// Define the quiz questions
const questions = [
    {
      question: "I Plan every detail and checklist.",
      answers: [
        { text: "Not very true of me", score: 1 },
        { text: "Somewhat true of me", score: 2 },
        { text: "True of me.", score: 3 },
        { text: "Very True of me", score: 4 },
      ],
    },
    {
        question: "Look for a reference project to follow",
        answers: [
          { text: "Not very true of me", score: 1 },
          { text: "Somewhat true of me", score: 2 },
          { text: "True of me.", score: 3 },
          { text: "Very True of me", score: 4 },
        ],
      },
      {
        question: "I Brainstorming to think of every possible out-of-the-box idea.",
        answers: [
          { text: "Not very true of me", score: 1 },
          { text: "Somewhat true of me", score: 2 },
          { text: "True of me.", score: 3 },
          { text: "Very True of me", score: 4 },
        ],
      },
      {
        question: "Bring the right people together",
        answers: [
          { text: "Not very true of me", score: 1 },
          { text: "Somewhat true of me", score: 2 },
          { text: "True of me.", score: 3 },
          { text: "Very True of me", score: 4 },
        ],
      },
      {
        question: "Quickly gather the knowledge and resources together",
        answers: [
          { text: "Not very true of me", score: 1 },
          { text: "Somewhat true of me", score: 2 },
          { text: "True of me.", score: 3 },
          { text: "Very True of me", score: 4 },
        ],
      },
      // {
      //   question: "Following the process",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Spotting the right opportunity",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Having the most unique idea",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Having the right team/mix of people",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Having the required expertise",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Plannig and executing",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Spotting opportunities and adapting ideas",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Thinking wildly and imaginatively",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Relating to people",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Being able to master something better than others",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "See whether it fits my plan of action",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "compare the costs and benefits of all actions quickly",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Go by my instinct and do what feels right",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Bring my team together and include everyones's opininon before taking a decision",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Do thorough research and gather all necessary data and facts.",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Things going out of control or becoming chaotic.",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "The project not making any money.",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Running out of original ideas halfway through the project",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "People in the team not being able to work together in sync",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Not having the knowledge to successfully finish the project",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Use my plan B that I had already created",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Make the most of the situation and adapt quickly",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Think of how to turn the challenge into an opportunity",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Get the team together and brainstorm to find an appropriate solution",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Face the challenge with the confidence that I can get through it",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "The project is executed effectively and on time.",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "The project makes profit and financial sense",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "The project has the most innovative solution",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "The team members complement each other's strenghts",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "The end result is of the highest quality , with attention to detail ",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "I see a much more efficient solution to the problem",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "I see an opportunity to build a profitable business quickly",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "I have an idea that will change the world",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "I want to solve society's problems through my venture",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "I have the expertise and knowledge to deliver a good product / service",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Henry Ford, the founder of ford motor company",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Richard Branson, founder of virgin Hyperloops",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Steve Jobs founder of Apple and Pixar",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Mohammad Yunus,Founder of Grameen Bank",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "kiran Mazumdar shaw, founder of Biocon",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Life is a well-planned adventure",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Life is about making the most of every moment",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Life is about living my own dreams",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Life is about helping other people",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },
      // {
      //   question: "Life is about finding out what I am best at and doing it",
      //   answers: [
      //     { text: "Not very true of me", score: 1 },
      //     { text: "Somewhat true of me", score: 2 },
      //     { text: "True of me.", score: 3 },
      //     { text: "Very True of me", score: 4 },
      //   ],
      // },

  ];
  

  // code for quiz
  const landingPage = document.getElementById("landing-page");
  const startButton = document.getElementById("start-btn");
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const quiz = document.getElementById("app");
  const head = document.getElementById("quiz-head");
  const result = document.getElementById("result");
  const result2 = document.getElementById("result2");
  const result3 = document.getElementById("result3");
  const result4 = document.getElementById("result4");
  const result5 = document.getElementById("result5");
  const bodyElement = document.body;


  let currentQuestionIndex = 0;
  let m1 = 0;
  let m2 = 0;
  let m3 = 0;
  let m4 = 0;
  let m5 = 0;
  startButton.addEventListener("click", () => {
    landingPage.style.display = "none";
    quiz.style.display = "block";
    
    // Call your quiz initialization function here
    startQuiz();
  });
  
  function startQuiz() {
    currentQuestionIndex = 0;
    m1 = 0;
    m2 = 0;
    m3 = 0;
    m4 = 0;
    m5 = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    if (currentQuestionIndex === 5) {
        head.innerHTML = `Out of the following, what do you think is most important for your project to succeed?`;
      }
      if (currentQuestionIndex === 10) {
        head.innerHTML = `In the context of a team project, my biggest strength is:`;
      }
      if (currentQuestionIndex === 15) {
        head.innerHTML = `If I had to make an important decision regarding the project, I would:`;
      }
      if (currentQuestionIndex === 20) {
        head.innerHTML = `What would be your biggest worry while the project is going on?`;
      }
      if (currentQuestionIndex === 25) {
        head.innerHTML = `Imagine there is a crisis during your project. Your reaction would be to:`;
      }
      if (currentQuestionIndex === 30) {
        head.innerHTML = `Imagine that you are asked to evaluate your project and your peers projects. What is a
        successful project according to you?`;
      }
      if (currentQuestionIndex === 35){
        head.innerHTML = `Imagine that you are considering to start a business. You would start something of your own because`
      }
      if (currentQuestionIndex === 40){
        head.innerHTML = `How close are each of the following entrepreneurs to your personality?`
      }
      if (currentQuestionIndex === 45){
        head.innerHTML = `This question is about your outlook toward life, in general. You believe that:`
      }
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("qbtn");
      answerButtons.appendChild(button);
  
      button.addEventListener("click", () => {
        if(currentQuestionIndex % 5 === 0){
          m1 += answer.score;;
        }
        if(currentQuestionIndex % 5 === 1){
          m2 += answer.score;
        }
        if(currentQuestionIndex % 5 === 2){
          m3 += answer.score;
        }
        if(currentQuestionIndex % 5 === 3){
          m4 += answer.score;
        }
        if(currentQuestionIndex % 5 === 4){
          m5 += answer.score;
        }
        // score += answer.score;
        button.disabled = true;
        nextButton.style.display = "block";
      });
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    result.style.display = "none";
    result2.style.display = "none";
    result3.style.display = "none";
    result4.style.display = "none";
    result5.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  let largestVariable =0;
  function largest() {
    let variables = [
      { name: "m1", value: m1 },
      { name: "m2", value: m2 },
      { name: "m3", value: m3 },
      { name: "m4", value: m4 },
      { name: "m5", value: m5 },
    ];
    
    // Find the variable with the largest value
    largestVariable = variables[0];
    
    for (let i = 1; i < variables.length; i++) {
      if (variables[i].value > largestVariable.value) {
        largestVariable = variables[i];
      }
    }

  }
  function showScore() {
    resetState();
    largest();
    if (largestVariable.name === "m1") {
      quiz.style.background = "green";
      result.style.display = "inline-block";
      head.style.display = "none";
      bodyElement.style.backgroundColor = "white";

    }
    if (largestVariable.name === "m2") {
      quiz.style.background = "red";
      result2.style.display = "inline-block";
      head.style.display = "none";
      bodyElement.style.backgroundColor = "white";
    }
    if (largestVariable.name === 'm3') {
      quiz.style.background = "blue";
      result3.style.display = "inline-block";
      head.style.display = "none";
      bodyElement.style.backgroundColor = "white";
    }
    if (largestVariable.name === 'm4') {
      quiz.style.background = "yellow";
      result4.style.display = "inline-block";
      head.style.display = "none";
      bodyElement.style.backgroundColor = "white";
    }
    if (largestVariable.name === 'm5') {
      quiz.style.background = "orange";
      result5.style.display = "inline-block";
      head.style.display = "none";
      bodyElement.style.backgroundColor = "white";
    }
    head.style.display = "none";
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    questionElement.innerHTML = `Your dominant trait is here.... ! scroll down...`;


  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
      console.log("i reached here");
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  



  // content.....