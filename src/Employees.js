import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';
import MainContainer from './MainContainer'

class Employees extends Component {
  constructor(props) {
    super(props);
    this.dataSource = this.props.dataSource;
    this.state = {
      employees: []
    }
  } 

  componentDidMount() {
    axios.get(this.dataSource).then((res) => {
      this.setState({ employees: res.data });
    }).catch((err) => {
      console.log("error");
    });
  }

  render() {
    return (
      <MainContainer sidebar="Employees">
        <h1 className="page-header">Employees</h1>
        <div className="table-responsive overview-table">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name Position</th>
                <th>Address</th>
                <th>Phone Num</th>
                <th>Hire Date</th>
                <th>Salary&nbsp;Bonus</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee, index) => {
                return (
                  <tr key={employee._id}>
                    <td>{employee.FirstName}&nbsp;{employee.LastName}&nbsp;-&nbsp;{employee.Position.PositionName}</td>
                    <td>{employee.AddressStreet}&nbsp;{employee.AddressState}&nbsp;{employee.AddressCity}&nbsp;{employee.AddressZip}</td>
                    <td>{employee.PhoneNum}&nbsp;ext&nbsp;{employee.Extension}</td>
                    <td>{moment(employee.HireDate).format('LL')}</td>
                    <td>$&nbsp;{employee.SalaryBonus}</td>
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

export default Employees;