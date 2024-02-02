import React, { useState } from "react";
import { Resizable } from "re-resizable";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CONSTANTS } from "../../constants";

const FormMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const UserForm = () => {
  const [state, setState] = useState({ width: 300, height: 500 });

  const [name, namechange] = useState("");
  const [phone, phonechange] = useState("");
  const [city, citychange] = useState("");
  const [salary, salarychange] = useState("");
  const [designation, designationchange] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { name, phone, city, salary, designation };

    fetch(CONSTANTS.SERVER + "/addemployee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        alert("Employee details added successfully!");
        navigation("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
      <FormMainWrapper>
        <div className="row">
          <div className="container">
            <div className="card">
              <div className="card-title">
                <h2>Employee Details </h2>
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
                              onChange={(e) => namechange(e.target.value)}
                              className="form-control"
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Salary</label>
                            <input
                              type="number"
                              value={salary}
                              onChange={(e) => salarychange(e.target.value)}
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
                              onChange={(e) =>
                                designationchange(e.target.value)
                              }
                              className="form-control"
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => phonechange(e.target.value)}
                              className="form-control"
                              pattern="[0-9]{10}"
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
                              onChange={(e) => citychange(e.target.value)}
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
      </FormMainWrapper>
    </Resizable>
  );
};

export default UserForm;
