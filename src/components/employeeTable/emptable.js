import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Resizable } from "re-resizable";
import styled from "styled-components";
import { CONSTANTS } from "../../constants";

const TableMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const EmployeeTable = () => {
  const [empdata, setEmpData] = useState([]);
  const [state, setState] = useState({ width: 500, height: 1000 });

  const navigation = useNavigate();
  const loadcontent = (_id) => {
    navigation("/employeedetails/" + _id);
  };

  const fetchEmployees = async () => {
    try {
      const response = await fetch(
        CONSTANTS.SERVER + "/employee_details"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch employee data");
      }
      const data = await response.json();
      setEmpData(data.empData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <Resizable
      style={{ marginLeft: 300, border: "1px solid black" }}
      size={{ width: state.width, height: state.height }}
      onResizeStop={(e, direction, ref, d) => {
        setState({
          width: state.width + d.width,
          height: state.height + d.height,
        });
      }}
    >
      <TableMainWrapper>
        <div className="row">
          <div className="container">
            <div className="card">
              <div className="card-title">
                <h1 style={{ color: "Red" }}>
                  Employee <span style={{ color: "black" }}>Details </span>
                </h1>
                <strong>
                  <hr></hr>
                </strong>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>Name</th>
                      <th>Salary</th>
                      <th>Designation</th>
                      <th>Phone Number</th>
                      <th>City</th>
                      <th>Id</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {empdata.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.salary}</td>
                        <td>{item.designation}</td>
                        <td>{item.phone}</td>
                        <td>{item.city}</td>
                        <td>{item._id}</td>
                        <td>
                          <a
                            onClick={() => loadcontent(item._id)}
                            className="btn btn-dark m-1"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link to="/addEmployee" className="btn btn-success mb-3">
                  Add New
                </Link>
              </div>
            </div>
          </div>
        </div>
      </TableMainWrapper>
    </Resizable>
  );
};

export default EmployeeTable;
