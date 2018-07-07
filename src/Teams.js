import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MainContainer from './MainContainer'

class Teams extends Component {
  constructor(props) {
    super(props);
    this.dataSource = this.props.dataSource;
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    axios.get(this.dataSource).then((res) => {
      this.setState({ teams: res.data });
    }).catch((err) => {
      console.log("error");
    });
  }

  render() {
    return (
      <MainContainer sidebar="Teams">
        <h1 className="page-header">Teams</h1>
        <div className="table-responsive overview-table">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Projects</th>
                <th>Employees</th>
                <th>Team Lead</th>
              </tr>
            </thead>
            <tbody>
              {this.state.teams.map((team, index) => {
                return (
                  <tr key={team._id}>
                    <td>{team.TeamName}</td>
                    <td>
                      {team.Projects.map((project, index) => {
                        return (
                          <li key={project._id}>{project.ProjectName}</li>
                        )
                      })}
                    </td>
                    <td>{team.Employees.length}&nbsp;Employees</td>
                    <td>{team.TeamLead.FirstName}&nbsp;{team.TeamLead.LastName}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <Link to="/" className="btn btn-primary form-control">Go Back To Overview</Link>
      </MainContainer>
    );
  } 
} 

export default Teams;