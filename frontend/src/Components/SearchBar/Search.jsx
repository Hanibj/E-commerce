
import React, { useState } from 'react';
import '../../Pages/Shop/Shop.css';

const Search = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/User/SearchBar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchTerm }),
      });

      if (response.ok) {
        const data = await response.json();
        setResults(data);
        onSearchResults(data); // Call the callback with search results
      } else {
        console.error('Erreur de recherche');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="input-group">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    <button type="button" className="btn btn-outline-primary" onClick={(e) => handleSearch(e)}>
  Search
</button>
  
    </div>
  );
};

export default Search;
