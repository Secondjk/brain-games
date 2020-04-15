import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const pointsForVictory = 3;

export default (rule, gameData) => {
  console.log('Welcome to the Brain-games!');
  console.log(rule);

  const userName = readlineSync.question('What is your name? ');
  console.log(`Hi ${userName}!`);

  const iter = (counter) => {
    if (counter === pointsForVictory) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const game = gameData();
    const question = car(game);
    console.log(`${question}`);

    const correctAnswer = cdr(game);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}.`);
      return;
    }

    console.log('Correct!');
    iter(counter + 1);
  };

  return iter(0);
};
