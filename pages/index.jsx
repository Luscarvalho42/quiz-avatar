import React from 'react';
import styled from 'styled-components';

import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Avatar</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz AVATAR</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Como devo te chamar?"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {` ${name}`}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content />
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
