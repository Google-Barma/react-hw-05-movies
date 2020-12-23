import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/Views/HomePage';
import SearchMoviesPage from './components/Views/SearchMoviesPage';
import AppBar from './components/AppBar/AppBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movies">
          <SearchMoviesPage />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
