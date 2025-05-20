function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      className="input mb-4"
      type="text"
      placeholder="Buscar por descripción o ID"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
