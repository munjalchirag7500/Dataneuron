import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Resizable } from "re-resizable";
import { CONSTANTS } from "../../constants";

const UpdateFormMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const EmployeeDetails = () => {
  const [state, setState] = useState({ width: 500, height: 1000 });
  const { _id } = useParams();
  const [employee, setEmployee] = useState({});
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [designation, setDesignation] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  const fetchEmployeeDetails = async () => {
    try {
      const response = await fetch(CONSTANTS.SERVER + `/getuser/${_id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch employee details");
      }
      const data = await response.json();
      setEmployee(data);
      setName(data.empData.name);
      setSalary(data.empData.salary);
      setPhone(data.empData.phone);
      setCity(data.empData.city);
      setDesignation(data.empData.designation);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedEmployee = { name, salary, phone, city, designation };
    try {
      const response = await fetch(
        CONSTANTS.SERVER + `/updateuser/${_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedEmployee),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update employee details");
      }
      alert("Employee details updated successfully");
      navigation("/");
    } catch (error) {
      console.error(error);
      alert("Failed to update employee details");
    }
  };

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
      <UpdateFormMainWrapper>
        <div className="row">
          <div className="container">
            <div className="card">
              <div className="card-title">
                <h2>Update Employee Details</h2>
              </div>
              <div className="card-body">
                <div className="offset-lg-3 col-lg-6">
                  <form onSubmit={handleSubmit}>
                    <div className="row" style={{ textAlign: "left" }}>
                      <div className="container">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="form-control"
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>salary</label>
                            <input
                              type="text"
                              value={salary}
                              onChange={(e) => setSalary(e.target.value)}
                              className="form-control"
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>City</label>
                            <input
                              type="text"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              className="form-control"
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Designation</label>
                            <input
                              type="text"
                              value={designation}
                              onChange={(e) => setDesignation(e.target.value)}
                              className="form-control"
                              required
                            ></input>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              type="number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="form-control"
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div
                            className="form-group"
                            style={{ textAlign: "center" }}
                          >
                            <button
                              type="submit"
                              className="btn btn-success m-2"
                            >
                              Submit
                            </button>
                            <Link to="/" className="btn btn-danger">
                              Back
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UpdateFormMainWrapper>
    </Resizable>
  );
};

export default EmployeeDetails;
