import { fetchSearchMovie } from 'api/movieDbApi';
import Form from 'components/Form';
import Loader from 'components/Loader';
import PopularMovies from 'components/PopularMovies';
import Notiflix from 'notiflix';
import { useState } from 'react';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const searchMovie = async queryMovie => {
    try {
      setLoading(true);
      const response = await fetchSearchMovie(queryMovie);

      if (response.total_results === 0) {
        setErrorMessage(true);
        return;
      }
      setSearchFilms(response.results);
      setErrorMessage(false);
    } catch {
      Notiflix.Notify.failure('Something went wrong. Try to reload your page!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Form searchMovies={searchMovie} />
      {loading && <Loader />}
      {errorMessage && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <PopularMovies films={searchFilms} />}
    </main>
  );
};

export default Movies;
