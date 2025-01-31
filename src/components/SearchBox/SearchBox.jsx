
// Стан фільтру слід зберігати в компоненті 
// App і передавати потрібні значення як
//  пропси компоненту SearchBox. Тоді
//   фільтрація масиву контактів буде
//    виконуватися в компоненті App, а 
//    її результат - масив відфільтрованих 
//    контактів - передавати пропсом компоненту
//     ContactList.




const SearchBox = ({searchValue, handleSearch}) => {

const handleSubmit = (e) =>{
    e.preventDefault()
//    console.log(searchValue);
}

    return(
        <>
        <form onSubmit={handleSubmit}>
             <input 
             onChange={handleSearch }
              type="text" 
              name="search"
              value={searchValue}
              />
        <button>Search</button>
        </form>
       
        </>
    )
}



export default SearchBox;


