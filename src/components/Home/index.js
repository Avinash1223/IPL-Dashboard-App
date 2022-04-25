// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {ListOfIplTeams: [], isLoading: true}

  componentDidMount() {
    this.getListOfTeams()
  }

  getListOfTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)

    const UpdatedTeamList = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamUrl: eachTeam.team_image_url,
    }))
    this.setState({ListOfIplTeams: UpdatedTeamList, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading, ListOfIplTeams} = this.state
    return (
      <div className="ipl-dashBoard-container">
        <div className="list-container">
          <div className="dashboard-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo"
            />
            <h1 className="title">IPL Dashboard</h1>
          </div>
        </div>
        <div className="ipl-container">
          {isLoading ? (
            this.renderLoader()
          ) : (
            <ul className="team-list-container">
              {ListOfIplTeams.map(eachTeam => (
                <TeamCard TeamDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
