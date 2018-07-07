import React, {Component} from 'react';

import MainContainer from './MainContainer';
import ProjectsPanel from './ProjectsPanel';
import TeamsPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel';

class Overview extends Component {
    render(){
        return(
            <MainContainer sidebar="Overview">
                <ProjectsPanel title="Projects" dataSource="https://web422a2.herokuapp.com/projects" />
                <TeamsPanel title="Teams" dataSource="https://web422a2.herokuapp.com/teams" />
                <EmployeesPanel title="Employees" dataSource="https://web422a2.herokuapp.com/employees" />
            </MainContainer>
        );
    }
}

export default Overview;