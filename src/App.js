import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import QuizPage from './Pages/QuizPage/QuizPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quizpage" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
