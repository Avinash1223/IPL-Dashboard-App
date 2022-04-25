// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {TeamDetails} = props
  const {teamUrl, name, id} = TeamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-items">
      <li className="list-items">
        <img src={teamUrl} alt={`${name}`} className="team-img" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
