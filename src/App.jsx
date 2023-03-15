import { Routes, Route } from 'react-router-dom';
import HeroPage from './pages/hero/HeroPage';
import './index.scss';
import Work from './pages/work/Work';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HeroPage />} />
                <Route path="/work" element={<Work />} />
            </Routes>
        </>
    );
}

export default App;
