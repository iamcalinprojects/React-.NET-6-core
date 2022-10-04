import React, { useEffect, useState } from "react";
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
import qs from "qs";
import ReactjsAlert from "reactjs-alert";

const AddDepartmentModal = ({
  modal,
  toggle,
  getDepartments,
  dataUseEffect,
  getDateFilter,
}) => {
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
  const [location, setLocation] = useState("");
  const [departmentName, setdepartmentName] = useState("");

  function clearModal() {
    setLocation("");
    setdepartmentName("");
  }

  function addDepartment() {
    var qs = require("qs");
    var data = qs.stringify({
      departmentName: departmentName,
      location: location,
    });
    var config = {
      method: "post",
      url: "http://localhost:5215/api/Department",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        if (response.data === 1) {
          setAlertStatus(true);
          setAlertType("success");
          setAlertTitle("Department added successfully");
          toggle();
          getDepartments();
          // setModal(false);
          clearModal();
        } else {
          setAlertStatus(true);
          setAlertType("warning");
          setAlertTitle("Error while adding department");
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
        isOpen={modal}
        toggle={() => {
          toggle();
        }}
      >
        <ModalHeader
          toggle={() => {
            toggle();
            clearModal();
          }}
        >
          Add a new Department
        </ModalHeader>

        <ModalBody>
          <label>
            <span className='text-danger'>* </span>Department Name
          </label>
          <InputGroup>
            <Input
              placeholder='Name'
              value={departmentName}
              onChange={(e) => setdepartmentName(e.target.value)}
              invalid={submitting}
            />
          </InputGroup>
          <br />
          <label>
            <span className='text-danger'>* </span>Location
          </label>
          <InputGroup>
            <Input
              placeholder='Location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              invalid={submitting}
            />
          </InputGroup>

          <br />
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              addDepartment();
            }}
          >
            Add
          </Button>{" "}
          <Button
            color='secondary'
            onClick={() => {
              toggle();
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

export default AddDepartmentModal;
