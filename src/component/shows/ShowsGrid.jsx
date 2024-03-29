
import ShowCard from './ShowCard';

function ShowsGrid({shows}) {


  return (
    <div>
      {
        shows.map((data) => (<ShowCard key={data.show.id} name={data.show.name} image={data.show.image ? data.show.image.medium : '/not-found_image.png'} id={data.show.id} summary={data.show.summary}/> ))
      }
    </div>
  )
}

export default ShowsGrid
