import './home.scss';
import Navigation from '../../navigation/Navigation';
import ConsoleText from '../../components/consoleText/ConsoleText';

function Home() {
    return (
        <div className="Home">
            <Navigation />
            <ConsoleText wordsToWrite={['Hello World']} colors={['white']} />
        </div>
    );
}

export default Home;
