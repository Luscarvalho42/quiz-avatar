import React from 'react';

import db from '../../db.json';
import QuizScreen from '../../src/screens/Quiz';

function QuizPage() {
  return (
    <QuizScreen db={db} />
  );
}

export default QuizPage;
