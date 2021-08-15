var readlineSync = require('readline-sync');

console.log("Let see how much you know about india!! ");

var question1 = {
  question: "What is the capital of India? \n (a).Kolkata \n (b).Delhi \n (c).Patna \n (d). Arrah(Lolipop song waala)\n",
  answer: "b"
};

var question2 = {
  question: "How many states are there in India? \n (a).28 \n (b).29 \n (c).27 \n (d).26\n",
  answer: "b"
};

var question3 = {
  question: "World rank of india in terms of Population? (a).1 \n (b).4 \n (c).2 \n (d).None of Above\n",
  answer: "c"
};

var question4 = {
  question: "India's National Game? (a).Cricket\n (b).Kabaddi\n (c).Footaball\n (d).Hockey\n",
  answer: "d"
}

var question5 = {
  question: "National fruit of India? (a).Mango\n (b).Banana\n (c).Apple\n (d).Orange\n",
  answer: "a"
};

var questions = [question1,question2,question3,question4,question5];

var score = 0;
function play_game(query,answer){
  var user_ans = readlineSync.question(query);
  if(user_ans===answer){
    console.log("You are Right");
    score+=1;
  }
  else{
    console.log("You are Wrong");
  }
}

for(var i=0;i<questions.length;i++){
  var query = questions[i].question;
  var answer = questions[i].answer;
  play_game(query,answer);
}

console.log("You Played Well and Your Score is "+score);