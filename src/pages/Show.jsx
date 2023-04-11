import {useParams} from 'react-router-dom';
import {getShowById} from '../api/tvMaze';
import ShowMainData from '../component/shows/ShowMainData';
import Details from '../component/shows/Details';
import {
  useQuery
} from '@tanstack/react-query'
import Seasons from '../component/shows/Seasons';
import Cast from '../component/shows/Cast';
import {Link} from 'react-router-dom'

function Show() {


    const {showId} = useParams();
    // const {showData, showError} = useShowById(showId);
   const {data: showData, error: showError} = useQuery({
        queryKey:['show', showId],
        queryFn: () => getShowById(showId),
    })
   
   
    if(showError){
        return (<div>We have an error : {showError.message}</div>)
    }
    if(showData){
        return (<div>

          <Link to='/'>Go Back To Home</Link>
       
        <ShowMainData image={showData.image} name={showData.name} summary={showData.summary} rating={showData.rating} genres={showData.genres}/>
        
        <div>
            <h2>Details</h2>
            <Details status={showData.status} premiered={showData.premiered} network={showData.network}/>
        </div>

        <div>
            <h2>Seasons</h2>
            <Seasons seasons={showData._embedded.seasons}/>
        </div>
          <div>
            <h2>Cast</h2>
            <Cast cast={showData._embedded.cast}/>
        </div>
         </div>)
    }

  return (
    <div>
        Data is Loading...
    </div>
  )
}

export default Show
