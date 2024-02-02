import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserForm from "./components/form/form";
// import Header from "./components/header/header";
import EmployeeDetails from "./components/employeeDetails";
import EmployeeTable from "./components/employeeTable";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/addEmployee" element={<UserForm />} />
        <Route path="/employeedetails/:_id" element={<EmployeeDetails />} />
        <Route path="/employeelist" element={<EmployeeTable />} />
      </Routes>
    </div>
  );
}

export default App;
