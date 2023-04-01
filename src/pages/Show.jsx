import {useParams} from 'react-router-dom';



function Show() {
    const {showId} = useParams();
    
  return (
    <div>
        show page for show id {showId}
    </div>
  )
}

export default Show
