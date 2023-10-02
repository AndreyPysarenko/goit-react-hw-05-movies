import { useState } from 'react';
import { SearchForm, Input, Button } from './Form.styled';

const Form = ({ searchMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(searchQuery.toLowerCase());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="searchQuery"
        autoFocus
        value={searchQuery}
        placeholder="Enter the movie name"
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

export default Form;
