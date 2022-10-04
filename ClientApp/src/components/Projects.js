import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddEmployee from "./AddEmployee";
import EditEmployeeModal from "./EditEmployeeModal";

export default function Projects() {
  const [empName, setEmpName] = useState([]);
  const [depNumber, setDepNumber] = useState();
  const [editEmployee, setEditEmployee] = useState([]);

  const [alertStatus, setAlertStatus] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertTitle, setAlertTitle] = useState("This is an alert");

  const [edit, setEdit] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const editToggle = () => setEditModal(!editModal);
  const [addModal, setAddModal] = useState(false);
  const addToggle = () => setAddModal(!addModal);
  const editClose = () => setEdit(false);

  function reload() {
    axios
      .get("/api/Employee/")
      .then((r) => r.data)
      .then((d) => {
        setEmpName(d);
      });
  }

  useEffect(() => {
    reload();
  }, []);

  console.log(depNumber);
  console.log(empName);

  const editEmployeeFunction = (dep) => {
    // try {
    //   axios.put("/api/Employee/", postData).finally((r) => {
    //     axios
    //       .get("/api/Employee/")
    //       .then((response) => response.data)
    //       .then((data) => setEmployee(data));
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
    // setEmployee(dep.DepartmentName);
  };

  function deleteEmployee(id) {
    console.log(id);
    try {
      if (window.confirm("Confirm delete?"))
        axios
          .delete(`api/Employee/ ${id}`)
          .then((response) => response.data)
          .then((data) => {
            console.log(data);
            if (data === 1) {
              setAlertStatus(true);
              setAlertType("success");
              setAlertTitle("Employee deleted successfully");
              reload();
            } else {
              setAlertStatus(true);
              setAlertType("error");
              setAlertTitle("Error while deleting employee");
            }
          });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <div class='container-fluid px-4'>
        <div className='d-flex align-items-center'>
          <i class='fa-solid fa-user-group fa-2xl mt-4 mx-2'></i>
          <h1 class='mt-4'>Projects</h1>
        </div>
        <div class='row pt-5'>
          <div class='col-xl-6 '>
            <div class='card mb-4'>
              <div class='card-header'>
                <i class='fas fa-chart-area me-1'></i>
                Area Chart Example
              </div>
              <div class='card-body'>
                {/* <Chart data={empName} height='250'>
                  <PieSeries valueField='Deptno' argumentField='Job' />
                  <Legend />
                  <Title text='Area of Countries' />
                  <Animation />
                </Chart> */}
              </div>
            </div>
          </div>
          <div class='col-xl-6 '>
            <div class='card mb-4'>
              <div class='card-header'>
                <i class='fas fa-chart-bar me-1'></i>
                Bar Chart Example
              </div>
              <div class='card-body'>
                {/* <Chart data={empName} height='250'>
                <ArgumentAxis />
                <ValueAxis max={7} />

                <BarSeries valueField='Job' argumentField='Ename' />
                <Title text='World population' />
                <Animation />
              </Chart> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className='d-flex justify-content-end 
          mb-2'
        >
          <Button
            variant='primary'
            value={AddEmployee}
            // onClick={createDepartment}
            onClick={() => {
              addToggle();
            }}
            // onChange={(e) => setAddDepartment(e.target.value)}
          >
            Add Employee
          </Button>
        </div>
        <div class='card mb-4'>
          <div class='card-header'>
            <i class='fas fa-table me-1'></i>
            Employees
          </div>
          <div class='card-body'>
            <table class='table table-hover ' id='datatablesSimple'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Mgr</th>
                  <th>Hire Date</th>
                  <th>Department n</th>
                  {/* <th>Comm</th> */}
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {empName.map((d, index) => (
                  <tr key={index}>
                    <td>
                      {d.Ename.charAt(0).toUpperCase() +
                        d.Ename.substring(1).toLowerCase()}
                    </td>
                    <td>
                      {d.Job.charAt(0).toUpperCase() +
                        d.Job.substring(1).toLowerCase()}
                    </td>
                    <td>{d.Mgr}</td>
                    <td>{d.Hiredate.split("T")[0]}</td>
                    <td>{d.Deptno}</td>
                    {/* <td>{d.Comm}</td> */}
                    <td>{d.Sal}</td>
                    <td className='d-flex justify-content-end'>
                      <Button
                        onClick={() => {
                          editToggle();
                          setEditEmployee(d.Empno);
                        }}
                        style={{
                          background: "transparent",
                          border: "none",
                          padding: "0px",
                          outline: "none",
                          boxShadow: "none",
                        }}
                      >
                        {/* <Button
                        variant='warning'
                        value={addDepartment}
                        onClick={() => {
                          setEditModal(true);
                        }}
                        onChange={(e) => setAddDepartment(e.target.value)}
                        className='mx-1'
                      >
                        Edit Department
                      </Button> */}
                        <FontAwesomeIcon icon={faPenToSquare} color='blue' />
                      </Button>
                    </td>
                    <td>
                      {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                      {/* <Button
                        variant='warning'
                        // value={addDepartment}
                        onClick={() => {
                          // setEditModal(true);
                        }}
                        // onChange={(e) => setAddDepartment(e.target.value)}
                        className='mx-1'
                      >
                        Edit Employee
                      </Button> */}
                      <Button
                        onClick={() => deleteEmployee(d.Empno)}
                        style={{
                          background: "transparent",
                          border: "none",
                          padding: "0px",
                          outline: "none",
                          boxShadow: "none",
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} color='red' />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <AddEmployee
              addModal={addModal}
              addToggle={addToggle}
            ></AddEmployee>
            <EditEmployeeModal
              editEmployee={editEmployee}
              editModal={editModal}
              editToggle={editToggle}
              reload={reload}
            ></EditEmployeeModal>
          </div>
        </div>
      </div>
    </>
  );
}
