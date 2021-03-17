
var input = require('readline-sync');
var chalk=require('chalk');
console.log(chalk.blue.bold("Welcome to the game called\nHow well do you know shashi?"));
var shashi=[{
  question:"Which place shashi was born?",
   answer:"ranchi",
},
{
   question:"What is his mother tongue?",
   answer:"hindi",
},
{
  question:"which is the favourite sport of shashi?",
  answer:"cricket",
},
{
  question:"How many school have shashi studied i?",
  answer:"10",
},
{
  question:"How many sibling shashi have?",
  answer:"2"
}

]
var score=0;
console.log();
console.log(chalk.bold.italic("enter 0 to quit the game or anycharacter\nto cotinue the game"))
for(var i=0;i<shashi.length;i++)
{
  if(input.question("")==0)
  {
    console.log(
      'you have successfully quit the game'
    )
    break;
  }
  
    console.log(chalk.bold.red(shashi[i].question))
   if(shashi[i].answer.toUpperCase()==input.question("").toUpperCase())
   {
     console.log(shashi[i].answer+" "+chalk.bold("is the right guess"))
     console.log("Your current score is :"+chalk.bold.blue(++score))
   }
   else
   {
     console.log("Your answer is "+chalk.red.bold("WRONG")+ "  your current score is :"+chalk.bold.blue(score))

   }
  
  
}
console.log('your score after this game :->'+score)
