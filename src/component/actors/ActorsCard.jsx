import {Link} from 'react-router-dom';

function ActorsCard({name,image, birthday, gender, country, deathday, id}) {
  return (
    <div>
        <div>
            <img src={image} alt={name} />
        </div>
        <h1>{name} {!!gender && `(${gender})`}</h1>
        <p>{country ? `comes from ${country}` : 'No Country Known'}</p>
        {!!birthday && <p>Born {birthday}</p>}
        <p>{deathday ? `Died on ${deathday}` : "Alive"}</p>
        <div>
            <Link to={`/actor/${id}`}>read me</Link>
        </div>
    </div>
  )
}

export default ActorsCard
