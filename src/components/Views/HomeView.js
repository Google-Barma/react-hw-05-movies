import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchTrandingMovie } from '../../services/tmdb-api';
import MovieList from '../MovieList/MovieList';
import usePages from '../Hooks/usePages';
import useLoader from '../Hooks/useLoader';

export default function HomeView() {
  const [trandingMovie, setTrandingMovie] = useState([]);

  const { totalPage, setTotalPage } = usePages();
  const { isLoading, setIsLoading } = useLoader();

  const history = useHistory();
  const location = useLocation();

  const page = Number(new URLSearchParams(location.search).get('page') ?? 1);

  function handleChangePage(pageNumber) {
    history.push({ ...location, search: `page=${pageNumber}` });
  }

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    fetchTrandingMovie(page)
      .then(([result, total]) => {
        setTrandingMovie(result);
        setTotalPage(total);
      })
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [page, setIsLoading, setTotalPage]);

  return (
    <>
      <h1>Tranding Movies</h1>

      {trandingMovie && (
        <MovieList
          movies={trandingMovie}
          total={totalPage}
          onChangePage={handleChangePage}
          loading={isLoading}
          currentPage={page}
        />
      )}
    </>
  );
}
