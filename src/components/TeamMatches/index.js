// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    matchDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const UpdatedMatchDetails = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatch: data.recent_matches.map(RecentMatch => ({
        umpires: RecentMatch.umpires,
        result: RecentMatch.result,
        manOfTheMatch: RecentMatch.man_of_the_match,
        id: RecentMatch.id,
        date: RecentMatch.date,
        venue: RecentMatch.venue,
        competingTeam: RecentMatch.competing_team,
        competingTeamLogo: RecentMatch.competing_team_logo,
        firstInnings: RecentMatch.first_innings,
        secondInnings: RecentMatch.second_innings,
        matchStatus: RecentMatch.match_status,
      })),
    }
    this.setState({matchDetails: UpdatedMatchDetails, isLoading: false})
  }

  renderTeamMatches = () => {
    const {matchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchDetails
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" className="team banner" />
        <LatestMatch cricketMatch={latestMatchDetails} />
        {this.renderRecentMatchesList()}
      </div>
    )
  }

  renderRecentMatchesList = () => {
    const {matchDetails} = this.state
    const {recentMatch} = matchDetails
    return (
      <ul className="recent-matches-list">
        {recentMatch.map(eachMatch => (
          <MatchCard matchData={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`app-team-matches-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
