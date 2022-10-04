import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  InputGroup,
  Input,
} from "reactstrap";
import ReactjsAlert from "reactjs-alert";

const AddEmployeeModal = ({ addModal, addToggle, reload }) => {
  // validation errors
  const [submitting, setSubmitting] = useState(false);

  //alert
  const [alertStatus, setAlertStatus] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertTitle, setAlertTitle] = useState("This is an alert");

  //trigger modal
  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);

  //modal aggiungi appuntamento
  const [employeeNum, seteEployeeNum] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [mgr, setMgr] = useState("");
  const [salary, setSalary] = useState("");
  const [deptno, setDeptno] = useState(10);
  const [departmentName, setdepartmentName] = useState("");

  function clearModal() {
    // setLocation("");
    setdepartmentName("");
  }

  const addEmployee = () => {
    var qs = require("qs");
    var data = qs.stringify({
      employeeNum: employeeNum,
      name: name,
      job: job,
      mgr: mgr,
      salary: salary,
      // comm: comm,
      deptno: deptno,
    });
    var config = {
      method: "post",
      url: "http://localhost:5215/api/employee",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data === 1) {
          setAlertStatus(true);
          setAlertType("success");
          setAlertTitle("Employee added successfully");
          addToggle();
          // setModal(false);
          clearModal();
          reload();
        } else {
          setAlertStatus(true);
          setAlertType("warning");
          setAlertTitle("Error while adding employee");
        }
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <ReactjsAlert
        status={alertStatus} // true or false
        type={alertType} // success, warning, error, info
        title={alertTitle} // title you want to display
        Close={() => setAlertStatus(false)} // callback method for hide
      />
      <Modal
        onClosed={() => {
          clearModal();
        }}
        isOpen={addModal}
        toggle={() => {
          addToggle();
        }}
      >
        <ModalHeader
          toggle={() => {
            addToggle();
            clearModal();
          }}
        >
          Add a new Department
        </ModalHeader>

        <ModalBody>
          <label>
            <span className='text-danger'>* </span>Employee Number
          </label>
          <InputGroup>
            <Input
              placeholder='Employee Number'
              value={employeeNum}
              onChange={(e) => seteEployeeNum(e.target.value)}
              invalid={submitting}
            />
          </InputGroup>
          <br />
          <label>
            <span className='text-danger'>* </span>Name
          </label>
          <InputGroup>
            <Input
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              invalid={submitting}
            />
          </InputGroup>
          <br />
          <label>
            <span className='text-danger'>* </span>Job
          </label>
          <InputGroup>
            <Input
              placeholder='Job'
              value={job}
              onChange={(e) => setJob(e.target.value)}
              invalid={submitting}
            />
          </InputGroup>

          <br />
          <label>
            <span className='text-danger'>* </span>Mgr
          </label>
          <InputGroup>
            <Input
              placeholder='Mgr'
              value={mgr}
              onChange={(e) => setMgr(e.target.value)}
              invalid={submitting}
            />
          </InputGroup>

          <br />
          <label>
            <span className='text-danger'>* </span>Salary
          </label>
          <InputGroup>
            <Input
              placeholder='Salary'
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              invalid={submitting}
            />
          </InputGroup>

          <br />

          <label>
            <span className='text-danger'>* </span>Department N°
          </label>
          <InputGroup>
            <Input
              placeholder='Department N°'
              disabled={false}
              value={deptno}
              onChange={(e) => {
                setDeptno(e.target.value);
                console.log(e.target.value);
              }}
              id='exampleSelect'
              name='select'
              type='select'
            >
              <option value={10}>Accounting</option>
              <option value={20}>Research</option>
              <option value={30}>Sales</option>
            </Input>
          </InputGroup>
          <br />

          <br />
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              addEmployee();
            }}
          >
            Add
          </Button>{" "}
          <Button
            color='secondary'
            onClick={() => {
              addToggle();
              clearModal();
            }}
          >
            Back
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AddEmployeeModal;
