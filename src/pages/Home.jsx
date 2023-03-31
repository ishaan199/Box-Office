import {useState} from 'react';

function Home() {
    const [searchStr, setSearchStr] = useState("");


    const onSearchInputChange = (ev) => {
        setSearchStr(ev.target.value);
    }

    const onSearch = async (ev) => {
        ev.preventDefault();
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`)
        const body = await response.json();
        console.log(body);
    }

  return (
    <div>
        <form onSubmit={onSearch}>
            <input type="text" name="searchInput" value ={searchStr.searchInput} onChange={onSearchInputChange}/>
            <button type="submit">Search</button>
        </form>
      
    </div>
  )
}

export default Home
