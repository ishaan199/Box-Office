import {useParams} from 'react-router-dom';
import {getShowById} from '../api/tvMaze';
import {
  useQuery
} from '@tanstack/react-query'

function Show() {
    const {showId} = useParams();
    // const {showData, showError} = useShowById(showId);
   const {data: showData, error: showError} = useQuery({
        queryKey:['show', showId],
        queryFn: () => getShowById(showId),
    })
   
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
