
function Cast({cast}) {
  return (
    <div>
      {
        cast.map((person, character, voice)=><div key={person.id}>
            <div>
                <img src={person.image ? person.image.medium : '/Not-found_img.png'} alt={person.name} />
            </div>
            <div>
                {person.name} | {character.name} {voice && '| Voiceover'}
            </div>
        </div>)
      }
    </div>
  )
}

export default Cast
