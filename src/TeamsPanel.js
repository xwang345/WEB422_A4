import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

class TeamsPanel extends Component{
    constructor(props){
        super(props);

        this.dataSource = this.props.dataSource;

        this.state = {
            teams: []
        }
    }

    componentDidMount(){
        axios.get(this.dataSource).then((res) =>{
            this.setState({teams: res.data});
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
                                {this.state.teams.map((team, index) => {
                                    return (
                                        <tr key={team._id}>
                                            <td>{team.TeamName}</td>
                                            <td>{team.Employees.length}&nbsp;Employees</td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                </div>
            </div>
        );
    }
}

export default TeamsPanel;