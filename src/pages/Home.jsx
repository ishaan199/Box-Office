import {useState} from 'react';
import {searchForShows, searchForPeople} from '../api/tvMaze';
import SearchForm from '../component/SearchForm';
import ShowsGrid from '../component/shows/ShowsGrid';
import ActorsGrid from '../component/actors/ActorsGrid';
function Home() {
 
    const [apiDataError, setApiDataError] = useState(null);
    const [apiData, setApiData] = useState(null);



    const onSearch = async ({q, searchOption}) => {
        try{
            setApiDataError(null);

            let result;
            if(searchOption === 'shows'){
                result = await searchForShows(q);
                
            }else{
                result = await searchForPeople(q);
                
            }
            setApiData(result);
        }catch(error){
            setApiDataError(error);
        }
       
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