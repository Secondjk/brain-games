import { cons } from 'hexlet-pairs';
import random from '../utils';
import startGame from '..';

const rule = 'What is the result of the expression?';

const gameProccess = () => {
  const firstOperand = random();
  const secondOperand = random();
  const operation = random(1, 3);

  let question;
  let answer;
  switch (operation) {
    case (1):
      question = `${firstOperand} + ${secondOperand} = ?`;
      answer = firstOperand + secondOperand;
      break;
    case (2):
      question = `${firstOperand} - ${secondOperand} = ?`;
      answer = firstOperand - secondOperand;
      break;
    default:
      question = `${firstOperand} * ${secondOperand} = ?`;
      answer = firstOperand * secondOperand;
  }

  const questionAndAnswer = cons(question, answer.toString());
  return questionAndAnswer;
};

export default () => startGame(rule, gameProccess);
