import {useState} from 'react';
import {searchForShows, searchForPeople} from '../api/tvMaze';
import SearchForm from '../component/SearchForm';
import ShowsGrid from '../component/shows/ShowsGrid';
import ActorsGrid from '../component/actors/ActorsGrid';
import { useQuery } from '@tanstack/react-query';
function Home() {
 
    // const [apiDataError, setApiDataError] = useState(null);
    // const [apiData, setApiData] = useState(null);
    const [filter, setFilter] = useState(null)

    const {data: apiData, error: apiDataError} = useQuery({
        queryFn: () => filter.searchOption === 'shows' ?
        searchForShows(filter.q) :
        searchForPeople(filter.q),
        enabled:!!filter,
        refetchOnWindowFocus: false,
    })


    const onSearch = async ({q, searchOption}) => {
        setFilter({ q, searchOption });
       
    }

    const renderApiData = () => {
        if(apiDataError){
            return <div>{apiDataError.message}</div>
        }

        if(apiData?.length === 0){
            <div>No Result</div>
        }

        if(apiData){
            return apiData[0].show ? (<ShowsGrid shows={apiData}/>) : (<ActorsGrid actors={apiData}/>);
        }
        return null;
    }

  return (
    <div>
        <SearchForm onSearch={onSearch}/>
         <div>
        {renderApiData()}
      </div>
    </div>

  )
}

export default Home



//apiData.map((data) => (
            //     <div key={data.show.id}>{data.show.name}</div>
            // ))