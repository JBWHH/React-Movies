import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorsListPage from '../ActorsListPage/ActorsListPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from "../../data.js";


export default function App() {
  
  const [user, setUser] = useState(null);
  
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={ <MovieDetailPage movies={movies}/> } />
            <Route path="/actors" element={ <ActorsListPage movies={movies}/> } />
          </Routes>   
        </>
        :
        <LoginPage setUser={setUser} />  
      }
    </main>
  );
}


