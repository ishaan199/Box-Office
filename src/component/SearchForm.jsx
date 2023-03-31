import {useState} from 'react';

function SearchForm({onSearch}) {

    const [searchStr, setSearchStr] = useState("");
    const [searchOption, setSearchOption] = useState("shows");

    const onSearchInputChange = (ev) => {
        setSearchStr(ev.target.value);
    }

    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value)
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        const options = {
            q:searchStr,
            searchOption
        }
        onSearch(options);
    }
    
  return (
    <div>
      <form onSubmit={onSubmit}>
            <input type="text" name="searchInput" value ={searchStr.searchInput} onChange={onSearchInputChange}/>

            <label htmlFor="">
                shows
                <input type="radio" name="search-option" value="shows" checked={searchOption === "shows"} onChange={onRadioChange}/>
            </label>
             <label htmlFor="">
                actors
                <input type="radio" name="search-option" value="actors" checked={searchOption === "actors"} onChange={onRadioChange} />
            </label>
            <button type="submit">Search</button>
        </form>
     
    </div>
  )
}

export default SearchForm
