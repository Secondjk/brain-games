import { cons } from 'hexlet-pairs';
import random from '../utils';
import startGame from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, (a % b));
};

const gameProccess = () => {
  const firstOperand = random();
  const secondOperand = random();
  const question = `${firstOperand} and ${secondOperand}`;
  const answer = gcd(firstOperand, secondOperand).toString();

  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

export default () => startGame(rule, gameProccess);
