const SearchBox = ({ searchValue, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onChange}
          type="text"
          name="search"
          value={searchValue}
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default SearchBox;
