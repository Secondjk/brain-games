import { cons } from 'hexlet-pairs';
import random from '../utils';
import startGame from '..';

const rule = 'Is this number prime?';

const isPrime = (number) => {
  for (let i = 2; i < number; ++i) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};

const gameProccess = () => {
  const question = random();
  const answer = isPrime(question) ? 'yes' : 'no';
  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

export default () => startGame(rule, gameProccess);
