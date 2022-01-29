let userName = "";

userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

let userQuestion = '';
console.log(`You want to know ${userQuestion}?`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
  eightBall = 'Try Again';
  break;
  case 1:
  eightBall = 'It is certain';
  break;
  case 2:
  eightBall = 'It is decidedly so';
  break;
  case 3:
  eightBall = 'Reply hazy try again';
  break;
  case 4:
  eightBall = 'Cannot predict now';
  break;
  case 5:
  eightBall = 'Don\'t count on it chief';
  break;
  case 6:
  eightBall = 'That\'s a no for me dawg';
  break;
  case 7:
  eightBall = 'I\'m gonna say.. no';
  break;
  case 8:
  eightBall = 'Signs point to yes';
  break;
}
console.log(eightBall);


