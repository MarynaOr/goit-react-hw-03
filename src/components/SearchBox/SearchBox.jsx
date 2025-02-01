import s from './SearchBox.module.css'

const SearchBox = ({ searchValue, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={onChange}
          type="text"
          name="search"
          value={searchValue}
        />
        <button className={s.btn}>Search</button>
      </form>
    </>
  );
};

export default SearchBox;
