import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Resizable } from "re-resizable";
const Header = () => {
  const [state, setState] = useState({ width: 320, height: 200 });
  return (
    <Resizable
      style={{ marginLeft: 100, border: "1px solid black",backgroundColor:"aquamarine"}}
      size={{ width: state.width, height: state.height }}
      onResizeStop={(e, direction, ref, d) => {
        setState({
          width: state.width + d.width,
          height: state.height + d.height,
        });
      }}
    >
      <div style={{ justifyContent: "center", marginTop: "20px"}}>
        <h1 style={{ fontFamily: "cursive" }}>Hi, Welcome !!</h1>
        <Link to="/addEmployee">
          <button
            type="button"
            className="btn btn-secondary"
            style={{ margin: "20px" }}
          >
            Add Employee
          </button>
        </Link>
        <Link to="/employeelist">
          <button type="button" className="btn btn-secondary">
            Employee List
          </button>
        </Link>
      </div>
    </Resizable>
  );
};

export default Header;
