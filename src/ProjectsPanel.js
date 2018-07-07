import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

class ProjectsPanel extends Component{
    constructor(props){
        super(props);

        this.dataSource = this.props.dataSource;

        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        axios.get(this.dataSource).then((res) =>{
            this.setState({projects: res.data});
        }).catch((err) =>{
            console.log("error: " + err);
        });
    }

    render(){
        var now = moment();

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title"><b>{this.props.title}</b></h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.projects.map((project, index) => {
                                    return (
                                        <tr key={project._id}>
                                            <td>{project.ProjectName}</td>
                                            <td>Active {now.diff(moment([project.ProjectStartDate]), 'days')} Days</td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
        );
    }
}

export default ProjectsPanel;