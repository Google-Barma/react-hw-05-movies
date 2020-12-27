import { useState, useEffect } from 'react';
import { fetchTrandingMovie } from '../../services/tmdb-api';
import MovieList from '../MovieList/MovieList';
import useTotalPage from '../Hooks/useTotalPage';
import useLoader from '../Hooks/useLoader';

export default function HomeView() {
  const [trandingMovie, setTrandingMovie] = useState([]);

  const { page, totalPage, setPage, setTotalPage } = useTotalPage();
  const { isLoading, setIsLoading } = useLoader();

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
          onChangePage={setPage}
          loading={isLoading}
        />
      )}
    </>
  );
}
