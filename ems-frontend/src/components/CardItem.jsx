import React from 'react'
import { listEmployees } from '../services/EmployeeService'

const CardItem = (props) => {
   

  return (
    <ul>
    <li>First Name: {props.firstname}</li>
    <li>Last Name: {props.lastname}</li>
    <li>Email: {props.email}</li>
    </ul>
  )
}

export default CardItem