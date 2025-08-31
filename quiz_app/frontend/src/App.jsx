import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/quizzes" element={<QuizList />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/scores" element={<Scores />} />
    </Routes>
  );
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/login', { username, password });
      localStorage.setItem('token', res.data.token);
      navigate('/quizzes');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
        <p className="mt-4">
          No account? <a href="/register" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>
  );
}

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('/api/register', { username, password });
      navigate('/');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button onClick={handleRegister} className="w-full bg-blue-500 text-white p-2 rounded">
          Register
        </button>
        <p className="mt-4">
          Already have an account? <a href="/" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
}

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/quizzes').then(res => setQuizzes(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl mb-4">Available Quizzes</h2>
        <button
          onClick={() => navigate('/scores')}
          className="mb-4 bg-green-500 text-white p-2 rounded"
        >
          View Scores
        </button>
        <div className="grid gap-4">
          {quizzes.map(quiz => (
            <div key={quiz._id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl">{quiz.title}</h3>
              <button
                onClick={() => navigate(`/quiz/${quiz._id}`)}
                className="mt-2 bg-blue-500 text-white p-2 rounded"
              >
                Take Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Quiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/quizzes/${id}`).then(res => {
      setQuiz(res.data);
      setAnswers(new Array(res.data.questions.length).fill(null));
    });
  }, [id]);

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.post('/api/submit-quiz', { quizId: id, answers, token });
    setScore(res.data.score);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl mb-4">{quiz.title}</h2>
        {quiz.questions.map((q, i) => (
          <div key={i} className="mb-4">
            <p className="font-bold">{q.question}</p>
            {q.options.map((option, j) => (
              <label key={j} className="block">
                <input
                  type="radio"
                  name={`question-${i}`}
                  checked={answers[i] === j}
                  onChange={() => {
                    const newAnswers = [...answers];
                    newAnswers[i] = j;
                    setAnswers(newAnswers);
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Submit Quiz
        </button>
        {score !== null && (
          <p className="mt-4">Your score: {score}/{quiz.questions.length}</p>
        )}
        <button
          onClick={() => navigate('/quizzes')}
          className="mt-4 bg-gray-500 text-white p-2 rounded"
        >
          Back to Quizzes
        </button>
      </div>
    </div>
  );
}

function Scores() {
  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/api/scores', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setScores(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl mb-4">Your Scores</h2>
        <button
          onClick={() => navigate('/quizzes')}
          className="mb-4 bg-blue-500 text-white p-2 rounded"
        >
          Back to Quizzes
        </button>
        <div className="grid gap-4">
          {scores.map((score, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <p>Quiz ID: {score.quizId}</p>
              <p>Score: {score.score}</p>
              <p>Date: {new Date(score.date).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;