import { cons } from 'hexlet-pairs';
import random from '../utils';
import startGame from '..';

const rule = 'What number is missing in this progression?';
const progressionLength = 10;

const generateProgression = () => {
  const startElement = random(1, 10);
  const stepProgression = random(1, 10);
  const progression = [startElement];

  for (let i = 1, currentNumber = startElement; i <= progressionLength; ++i) {
    currentNumber += stepProgression;
    progression.push(currentNumber);
  }

  return progression;
};

const gameProccess = () => {
  const progression = generateProgression();
  const indexOfQuestNumber = random(1, 9);
  const answer = progression[indexOfQuestNumber].toString();

  progression[indexOfQuestNumber] = '..';
  let question = '';
  progression.forEach((element) => {
    question = `${question}${element} `;
  });

  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

export default () => startGame(rule, gameProccess);
