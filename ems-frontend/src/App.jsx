
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import { listEmployees } from './services/EmployeeService'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'


function App() {
//   const [employees,setEmployees] = useState([])
// useEffect(()=>{
//     listEmployees().then((response) => {
//         setEmployees(response.data);
//     }).catch(error => {
//         console.error(error);
//     })
// },[])

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<ListEmployeeComponents/>}>
    </Route>
    <Route path='/employees' element={<ListEmployeeComponents/>}></Route>
    <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
    <Route path='/update/:id' element={<EmployeeComponent/>}></Route>


    </Routes>
  
    <Footer/>
    </BrowserRouter>
    {/* {employees.length > 0 ? (
        <Card employees={employees} />
      ) : (
        <p>Loading employees...</p>
      )} */}
    </>
  )
}

export default App
