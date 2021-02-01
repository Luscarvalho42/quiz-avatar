/* eslint-disable react/prop-types */
import React from 'react';

import QuizScreen from '../../src/screens/Quiz';

function QuizDaGaleraPage(props) {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <QuizScreen db={props.dbExterno} />
  );
}

export async function getServerSideProps(context) {
  const [quiz, nome] = context.query.id.split(' ');
  try {
    const dbExterno = await fetch(`https://${quiz}.${nome}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      });
    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}

export default QuizDaGaleraPage;
