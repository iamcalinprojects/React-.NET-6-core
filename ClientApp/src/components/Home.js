import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Button, Modal, Form } from "react-bootstrap";
import ReactJsAlert from "reactjs-alert";
import AddDepartmentModal from "./AddDepartmentModal";
// import {
//   Chart,
//   PieSeries,
//   Title,
//   ArgumentAxis,
//   ValueAxis,
//   BarSeries,
//   Legend,
// } from "@devexpress/dx-react-chart-bootstrap4";
// import { Animation } from "@devexpress/dx-react-chart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function Home({ searchNav }) {
  const [alertStatus, setAlertStatus] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertTitle, setAlertTitle] = useState("This is an alert");

  const [department, setDepartment] = useState([]);
  const [depNumber, setDepNumber] = useState([]);
  const [addDepartment, setAddDepartment] = useState("");
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [filteredDepartment, setFilteredDepartment] = useState([]);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [editModal, setEditModal] = useState(false);
  const editToggle = () => setEditModal(!editModal);

  //arrow filter
  const [arrow, setArrow] = useState(true);

  console.log(department);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () => setEdit(true);
  const editClose = () => setEdit(false);

  const postData = {
    DepartmentName: addDepartment,
  };
  useEffect(() => {
    setFilteredDepartment(
      department.filter((dep) =>
        dep.Loc.toLowerCase().includes(
          searchNav.toLowerCase() ||
            dep.Dname.toLowerCase().includes(searchNav.toLowerCase())
        )
      )
    );
  }, [searchNav]);

  console.log(filteredDepartment);
  useEffect(() => {
    getDepartments();
  }, [department.Dname]);

  function getDepartments() {
    axios
      .get("/api/Department/")
      .then((r) => r.data)
      .then((d) => {
        setDepartment(
          d.sort((a, b) =>
            a.Dname.toLowerCase() > b.Dname.toLowerCase() ? 1 : -1
          )
        );
        setArrow(false);
      });
  }

  const editDepartment = (dep) => {
    try {
      axios.put("/api/Department/", postData).finally((r) => {
        axios
          .get("/api/Department/")
          .then((response) => response.data)
          .then((data) => setDepartment(data));
      });
    } catch (err) {
      console.error(err);
    }
    setDepartment(dep.DepartmentName);
  };

  function alfabetico() {
    department.sort((a, b) =>
      a.Dname.toLowerCase() < b.Dname.toLowerCase() ? 1 : -1
    );

    if (arrow) {
      department.sort((a, b) =>
        a.Dname.toLowerCase() > b.Dname.toLowerCase() ? 1 : -1
      );
    }
  }
  const deleteDepartment = async (id) => {
    console.log(id);
    try {
      if (window.confirm("Confirm delete?"))
        axios
          .delete(`api/Department/ ${id}`)
          .then((response) => response.data)
          .then((data) => {
            console.log(data);
            if (data === 1) {
              setAlertStatus(true);
              setAlertType("success");
              setAlertTitle("Department deleted successfully");
              getDepartments();
            } else {
              setAlertStatus(true);
              setAlertType("error");
              setAlertTitle("Error while deleting department");
            }
          });
    } catch (err) {
      console.error(err);
    }
  };
  // const deptno = department.Deptno;
  // ChartJS.register(ArcElement, Tooltip, Legend);

  // const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: deptno,
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.2)",
  //         "rgba(54, 162, 235, 0.2)",
  //         "rgba(255, 206, 86, 0.2)",
  //         "rgba(75, 192, 192, 0.2)",
  //         "rgba(153, 102, 255, 0.2)",
  //         "rgba(255, 159, 64, 0.2)",
  //       ],
  //       borderColor: [
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 206, 86, 1)",
  //         "rgba(75, 192, 192, 1)",
  //         "rgba(153, 102, 255, 1)",
  //         "rgba(255, 159, 64, 1)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <>
      <ReactJsAlert
        status={alertStatus} // true or false
        type={alertType} // success, warning, error, info
        title={alertTitle} // title you want to display
        Close={() => setAlertStatus(false)} // callback method for hide
      />

      <div class='container-fluid px-4'>
        <div className='d-flex align-items-center'>
          <i class='fa-regular fa-building fa-2xl mt-4 mx-2'></i>
          <h1 class='mt-4'>Departments</h1>
        </div>
        {/* <div class='row pt-5'>
          <div class='col-xl-6 '>
            <div class='card mb-4'>
              <div class='card-header'>
                <i class='fas fa-chart-area me-1'></i>
                <i class='bi-alarm'></i>
                Area Chart Example
              </div>
              <div class='card-body'>
                <Pie data={data} />;
                <Chart data={department} height='250'>
                  <PieSeries valueField='Deptno' argumentField='Dname' />
                  <Legend />
                  <Title text='Departments quota' />
                  <Animation />
                </Chart>
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
                <Chart data={department} height='250'>
                  <ArgumentAxis />
                  <ValueAxis max={7} />

                  <BarSeries valueField='Deptno' argumentField='Dname' />
                  <Title text='Number of Departments' />
                  <Animation />
                </Chart>
              </div>
            </div>
          </div>
        </div> */}
        <div className='d-flex justify-content-end'>
          <Button
            variant='primary'
            value={addDepartment}
            onClick={() => {
              toggle();
            }}
            onChange={(e) => setAddDepartment(e.target.value)}
          >
            Add Department
          </Button>
        </div>
        <div class='card mb-4 mt-2'>
          {/* <div class='card-header'>
            <i class='fas fa-table me-1'></i>
            Departments
          </div> */}
          <div class='card-body'>
            <table class='table table-hover' id='datatablesSimple'>
              <thead>
                <tr>
                  <th
                    onClick={(e) => {
                      alfabetico();
                      setArrow(!arrow);
                      console.log(e.target.value);
                    }}
                  >
                    Department{" "}
                    {arrow === true ? (
                      <i
                        class='fa-solid fa-arrow-down fa-lg'
                        style={{ color: "blue" }}
                      ></i>
                    ) : (
                      <i
                        class='fa-solid fa-arrow-up fa-lg'
                        style={{ color: "blue" }}
                      ></i>
                    )}
                  </th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {!searchNav
                  ? arrow === true
                    ? department.map((d) => (
                        <tr key={d.DepId}>
                          <td>
                            {d.Dname.charAt(0).toUpperCase() +
                              d.Dname.substring(1).toLowerCase()}
                          </td>
                          <td>
                            {d.Loc.charAt(0).toUpperCase() +
                              d.Loc.substring(1).toLowerCase()}
                          </td>

                          <td className='d-flex justify-content-center'>
                            <span onClick={() => deleteDepartment(d.DepId)}>
                              <i
                                class='fa-solid fa-trash fa-lg'
                                style={{ color: "red" }}
                              ></i>
                            </span>
                          </td>
                        </tr>
                      ))
                    : department.map((d) => (
                        <tr key={d.DepId}>
                          <td>
                            {d.Dname.charAt(0).toUpperCase() +
                              d.Dname.substring(1).toLowerCase()}
                          </td>
                          <td>
                            {d.Loc.charAt(0).toUpperCase() +
                              d.Loc.substring(1).toLowerCase()}
                          </td>

                          <td className='d-flex justify-content-center'>
                            <span onClick={() => deleteDepartment(d.DepId)}>
                              <i
                                class='fa-solid fa-trash fa-lg'
                                style={{ color: "red" }}
                              ></i>
                            </span>
                          </td>
                        </tr>
                      ))
                  : filteredDepartment.map((d) => (
                      <tr key={d.DepId}>
                        <td>
                          {d.Dname.charAt(0).toUpperCase() +
                            d.Dname.substring(1).toLowerCase()}
                        </td>
                        <td>
                          {d.Loc.charAt(0).toUpperCase() +
                            d.Loc.substring(1).toLowerCase()}
                        </td>

                        <td className='d-flex justify-content-center'>
                          <span onClick={() => deleteDepartment(d.DepId)}>
                            <i
                              class='fa-solid fa-trash fa-lg'
                              style={{ color: "red" }}
                            ></i>
                          </span>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
            <div>
              <AddDepartmentModal
                modal={modal}
                toggle={toggle}
                getDepartments={getDepartments}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Edit department modal */}

      {/* <Modal show={edit} onHide={editClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Edit department</Form.Label>
              <Form.Control
                type='text'
                placeholder='Edit department'
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={editClose}>
            Close
          </Button>
          <Button
            value={addDepartment}
            variant='primary'
            onClick={editDepartment}
            onChange={(e) => setAddDepartment(e.target.value)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
