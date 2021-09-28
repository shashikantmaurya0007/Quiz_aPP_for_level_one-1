
var input = require('readline-sync');
var chalk=require('chalk');
console.log(chalk.blue.bold("Welcome to the game called\nHow well do you know shashi?"));
console.log(chalk.red("!!please write the whole option as answer not the 'a,b,c,d'!!"));
var highScores = [
  {
    name: "rahul",
    score: 3
  },
  {
    name: "ravi",
    score: 2
  }
]
var shashi=[{
  question:"Which place shashi was born?",
  options:["a.Ranchi", "b.Kolkata","c.Bihar","d.Mumbai"],
   answer:"ranchi",
},
{
   question:"What is his mother tongue?",
   options:["a.Hindi", "b.Marathi","c.Gujarati","d.Tamil"],
   answer:"hindi",
},
{
  question:"which is the favourite sport of shashi?",
  options:["a.Cricket", "b.Football","c.Volleyball","d.Hockey"],
  answer:"cricket",
},
{
  question:"How many school have shashi studied in?",
  options:["a.1", "b.5","c.10","d.4"],
  answer:"10",
},
{
  question:"How many sibling shashi have?",
  options:["a.1", "b.3","c.2","d.4"],
  answer:"2"
}

]
var score=0;
console.log();
var user=input.question("What is your name?");
console.log(chalk.bold.green(user)+"!welcome to the game");
function quiz()
{
for(var i=0;i<shashi.length;i++)
{
  // if(input.question("")==0)
  // {
  //   console.log(
  //     'you have successfully quit the game'
  //   )
  //   break;
  // }
  
    console.log(chalk.bold.red(shashi[i].question))
    
    shashi[i].options.map((h)=>{console.log(h);});

   if(shashi[i].answer.toUpperCase()==input.question("").toUpperCase())
   {
     console.log(chalk.bold.yellow(shashi[i].answer)+" "+chalk.bold.green("is the right guess"))
     console.log("Your current score is :"+chalk.bold.blue(++score))
   }
   else
   {
     console.log("Your answer is "+chalk.red.bold("WRONG ")+chalk.green("correct answer is ")+chalk.bold.green(shashi[i].answer)+ "  your current score is :"+chalk.bold.blue(score))

   }
  
  
}
}
quiz();
console.log('your score after this game :->'+chalk.bold.green(score))
console.log(chalk.bold.red("you know ")+chalk.blue.green(score/(shashi.length+1)*100)+chalk.bold.red("% of shashi"));
console.log("--- High scores Board ----")
for(var i = 0; i < highScores.length; i++ ){
  var currentHighscorePerson = highScores[i]
  console.log(currentHighscorePerson.name + "   " + currentHighscorePerson.score)
}