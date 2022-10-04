import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  InputGroup,
  Input,
} from "reactstrap";
import qs from "qs";
import ReactjsAlert from "reactjs-alert";
import { relativeTimeRounding } from "moment";
import moment from "moment";

const EditEmployeeModal = ({ editModal, editToggle, editEmployee, reload }) => {
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
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeNum, setSelectedEmployeeNum] = useState();
  const [selectedName, setSelectedName] = useState("");
  console.log(selectedName);
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedMgr, setSelectedMgr] = useState();
  const [selectedSalary, setSelectedSalary] = useState("");
  const [selectedHireDate, setSelectedHireDate] = useState("");
  const [selectedComm, setSelectedComm] = useState("");
  const [selectedDeptno, setSelectedDeptno] = useState();
  const [departmentName, setdepartmentName] = useState("");
  console.log(selectedEmployeeNum);

  function clearModal() {
    // setLocation("");
    setdepartmentName("");
  }
  useEffect(() => {
    if (editModal === true) {
      getSingleEmployee();
    }
  }, [editModal]);

  async function getSingleEmployee() {
    await axios.get(`api/Employee/${editEmployee}`).then((response) => {
      setEmployees(response.data);
      setSelectedEmployeeNum(response.data[0].Empno);
      setSelectedName(
        response.data[0].Ename.charAt(0).toUpperCase() +
          response.data[0].Ename.substring(1).toLowerCase()
      );
      setSelectedJob(
        response.data[0].Job.charAt(0).toUpperCase() +
          response.data[0].Job.substring(1).toLowerCase()
      );
      setSelectedMgr(response.data[0].Mgr);
      setSelectedSalary(response.data[0].Sal);
      setSelectedComm(response.data[0].Comm);
      setSelectedDeptno(response.data[0].Deptno);
      setSelectedHireDate(
        moment(response.data[0].Hiredate).format("yyyy-MM-DD")
      );
    });
  }

  function updateEmployee() {
    var data = qs.stringify({
      employeeNum: selectedEmployeeNum,
      name: selectedName,
      job: selectedJob,
      mgr: selectedMgr,
      salary: selectedSalary,
      // hireDate: setSelectedHireDate,
      comm: selectedComm,
      deptno: selectedDeptno,
    });
    var config = {
      method: "put",
      url: `api/Employee/${selectedEmployeeNum}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        if (response.data == "1") {
          setAlertStatus(true);
          setAlertType("success");
          setAlertTitle("Employee modified successfully");
          editToggle();
          reload();
        } else {
          setAlertStatus(true);
          setAlertType("error");
          setAlertTitle("Errore nella modifica dell'appuntamento");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
        isOpen={editModal}
        toggle={() => {
          editToggle();
        }}
      >
        <ModalHeader
          toggle={() => {
            editToggle();
            clearModal();
          }}
        >
          Update Employee details
        </ModalHeader>

        <ModalBody>
          <br />
          <label>
            <span className='text-danger'> </span>Name
          </label>
          <InputGroup>
            <Input
              disabled={true}
              placeholder='Name'
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
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
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              invalid={submitting}
            />
          </InputGroup>

          <br />
          <label>
            <span className='text-danger'> </span>Mgr
          </label>
          <InputGroup>
            <Input
              disabled={true}
              placeholder='Mgr'
              value={selectedMgr}
              onChange={(e) => setSelectedMgr(e.target.value)}
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
              value={selectedSalary}
              onChange={(e) => setSelectedSalary(e.target.value)}
              invalid={submitting}
            />
          </InputGroup>

          <br />
          <label>
            <span className='text-danger'> </span>Hire Date
          </label>
          <InputGroup>
            <Input
              disabled={true}
              placeholder='Hire Date'
              value={selectedHireDate}
              onChange={(e) => setSelectedHireDate(e.target.value)}
              invalid={submitting}
            />
          </InputGroup>

          <br />

          <br />
          <label>
            <span className='text-danger'>* </span>Department N°
          </label>
          <InputGroup>
            <Input
              placeholder='Department N°'
              disabled={false}
              value={selectedDeptno}
              onChange={(e) => setSelectedDeptno(e.target.value)}
              id='exampleSelect'
              name='select'
              type='select'
              invalid={submitting}
            >
              <option value={10}>Accounting</option>
              <option value={20}>Research</option>
              <option value={30}>Sales</option>
            </Input>
          </InputGroup>
          <br />
          <label>
            <span className='text-danger'> </span>Employee Number
          </label>
          <InputGroup>
            <Input
              disabled={true}
              placeholder='Employee Number'
              value={selectedEmployeeNum}
              onChange={(e) => setSelectedEmployeeNum(e.target.value)}
              invalid={submitting}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              updateEmployee();
            }}
          >
            Update
          </Button>{" "}
          <Button
            color='secondary'
            onClick={() => {
              editToggle();
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

export default EditEmployeeModal;
