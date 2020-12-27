import { Route, Switch } from 'react-router-dom';
import HomeView from './components/Views/HomeView';
import SearchMoviesView from './components/Views/SearchMoviesView';
import AppBar from './components/AppBar/AppBar';
import MovieDetailsView from './components/Views/MovieDetailsView';
import Container from './components/Layouts/Container';

function App() {
  return (
    <>
      <Container>
        <AppBar />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/movies" component={SearchMoviesView} exact />
          <Route path="/movies/:movieId" component={MovieDetailsView} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
