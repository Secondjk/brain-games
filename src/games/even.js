import { cons } from 'hexlet-pairs';
import random from '../utils';
import startGame from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const gameProccess = () => {
  const question = random();
  const answer = isEven(question) ? 'yes' : 'no';
  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

export default () => startGame(rule, gameProccess);
