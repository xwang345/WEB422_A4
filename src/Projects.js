import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';
import MainContainer from './MainContainer'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.dataSource = this.props.dataSource;;
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    axios.get(this.dataSource).then((res) => {
      this.setState({ projects: res.data });
    }).catch((err) => {
      console.log("error");
    });
  }

  render() {
    return (
      <MainContainer sidebar="Projects">
        <h1 className="page-header">Projects</h1>

        <div className="table-responsive overview-table">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End&nbsp;Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map((project, index) => {
                var endDate = project.ProjectEndDate == null ? "N/A" : project.ProjectEndDate;
                return (
                  <tr key={project._id} >
                    <td>{project.ProjectName}</td>
                    <td>{project.ProjectDescription}</td>
                    <td>{moment(project.ProjectStartDate).format('LL')}</td>
                    <td>{endDate}</td>
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

export default Projects;