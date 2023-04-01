import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getShowById} from '../api/tvMaze';


function Show() {
    const {showId} = useParams();
    const [showData, setShowData] = useState(null);
    const [showError, setShowError] = useState(null);
    
    useEffect(()=>{
        async function fetchData(){

            try{
                const data = await getShowById(showId);
                setShowData(data);
            }catch(error){
                setShowError(error);
            }
            
        }

        fetchData();
    },[showId])
    if(showError){
        return <div>We have an error : {showError.message}</div>
    }
    if(showData){
        return <div>Go show data : {showData.name}</div>
    }

  return (
    <div>
        Data is Loading...
    </div>
  )
}

export default Show
