// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {cricketMatch} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = cricketMatch
    console.log(cricketMatch)

    return (
      <div className="match-Container">
        <h1 className="heading">Latest Match</h1>
        <div className="match-details-container">
          <div className="cricket-team-container">
            <p className="team-name">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <div className="img-container">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="team-logo"
            />
          </div>
          <div className="match-declaration-container">
            <div>
              <p className="Innings-title">First Innings</p>
              <p className="text">{firstInnings}</p>
            </div>
            <div>
              <p className="Innings-title">Second Innings</p>
              <p className="text">{secondInnings}</p>
            </div>
            <div>
              <p className="manofthematch">Man Of The Match</p>
              <p className="text">{manOfTheMatch}</p>
            </div>
            <div>
              <p className="umpire">Umpires</p>
              <p className="text">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
