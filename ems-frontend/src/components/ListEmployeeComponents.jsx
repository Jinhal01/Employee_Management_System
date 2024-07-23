import React , {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'


const ListEmployeeComponents = () => {
        
    const [employees,setEmployees] = useState([])

const navigator = useNavigate();

    useEffect(()=>{
      getAllEmployees();
    },[])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')

    }
    function updateEmployee(id){
        navigator(`/update/${id}`);
    }
    function removeEmployee(id){
        deleteEmployee(id).then((response) => getAllEmployees()
        ).catch((error)=> console.error(error))
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button type='button' className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-danger' onClick={()=> updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-info m-2' onClick={()=> removeEmployee(employee.id)} >Delete</button>
                                </td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponents