import './App.css'
import Counter from "./components/Counter/Counter.jsx";
import Login from './components/Login/Login.jsx';
import MovieList from './components/MovieList/MovieList.jsx';

function App() {
  return (
    <>
      count is <Counter />

      <Login />

      <MovieList />
    </>
  )
}

export default App