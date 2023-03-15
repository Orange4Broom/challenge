import './home.scss';
import Navigation from '../../navigation/Navigation';
import ConsoleText from '../../components/consoleText/ConsoleText';
import React from 'react';

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <div className="content-wrapper">
        <ConsoleText
          wordsToWrite={['Imagine být nigga lol', 'Sloup je gey a femboy']}
          color={['white']}
        />
      </div>
    </div>
  );
}

export default Home;
