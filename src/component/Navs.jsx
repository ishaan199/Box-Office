import {Link} from 'react-router-dom';

const LINKS = [
    {
        text:"Home",
        to:'/home'
    },
    {
        text:"starred",
        to:'/starred'
    }
]

function Navs() {
  return (
    <div>
      <ul>
        {
            LINKS.map(item=><li key={item.to}>
                <Link to={item.to}>
                {item.text}
                </Link>
                </li>)
        }
      </ul>
    </div>
  )
}

export default Navs