var readlineSync = require('readline-sync');

var name = readlineSync.question("What Is Your Name? \n");

console.log("Okay "+name+" Let see how much you know about india!! ");

var question1 = {
  question: "(1). What is the capital of India? \n (a).Kolkata \n (b).Delhi \n (c).Patna \n (d). Arrah(Lolipop song waala)\n",
  answer: "b"
};

var question2 = {
  question: "(2). How many states are there in India? \n (a).28 \n (b).29 \n (c).27 \n (d).26\n",
  answer: "b"
};

var question3 = {
  question: "(3). World rank of india in terms of Population? \n(a).1 \n (b).4 \n (c).2 \n (d).None of Above\n",
  answer: "c"
};

var question4 = {
  question: "(4). India's National Game? \n(a).Cricket\n (b).Kabaddi\n (c).Footaball\n (d).Hockey\n",
  answer: "d"
}

var question5 = {
  question: "(5). National fruit of India? \n(a).Mango\n (b).Banana\n (c).Apple\n (d).Orange\n",
  answer: "a"
};

var question6 = {
  question: "(6). What Is The Rank Of Indian Army In World In terms Of Strength? \n(a).4th\n (b).3rd\n (c).2nd\n (d).1st\n",
  answer: "c"
};

var questions = [question1,question2,question3,question4,question5,question6];

var score = 0;
function play_game(query,answer){
  var user_ans = readlineSync.question(query);
  if(user_ans===answer){
    console.log("You are Right");
    score+=1;
    console.log("Your Score is",score);
  }
  else{
    console.log("You are Wrong");
    console.log("Your Score is",score);
  }
}

for(var i=0;i<questions.length;i++){
  var query = questions[i].question;
  var answer = questions[i].answer;
  play_game(query,answer);
}

console.log("You Played Well and Your Score is "+score);
