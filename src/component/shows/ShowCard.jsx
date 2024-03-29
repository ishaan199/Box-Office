

function ShowCard({name, image, summary, id}) {

    const summaryStripped = summary ? summary.split(" ").splice(0, 10).join(" ").replace(/<.+?>/g, '') : "No Description"
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>

      <p>{summaryStripped}</p>

      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer" >Read More</a>
        <button type="button">Star me</button>
      </div>
    </div>
  )
}

export default ShowCard
