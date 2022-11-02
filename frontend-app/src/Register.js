import axios from "axios";
import React, { Fragment, useState } from 'react';

function Register(){
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");

    const handleNameChange = (value) => {setName(value)}
    const handlePhoneNOChange = (value) => {setPhoneNo(value)}
    const handleAddressChange = (value) => {setAddress(value)}

    const handleSave = () => {
        const data = {
            Name : name,
            PhoneNo : phoneNo,
            Address : address,
            IsActive : 1
        };

        const url = 'https://localhost:44380/api/Test/Register';
        axios.post(url,data).then((result) => {
            alert('data saved');         
        }).catch((error)=>{
            alert(error);
        })
    }

    return(
        <Fragment>
        <div>Register</div>
        <label>Name</label>
        <input type="text" id="textName" placeholder='Enter Name' onChange={(e) => handleNameChange(e.target.value)}/><br></br>
        <label>Phone No</label>
        <input type="Phone No" id="textPhoneNo" placeholder='Enter Phone No' onChange={(e) => handlePhoneNOChange(e.target.value)}/><br></br>
        <label>Address</label>
        <input type="text" id="textAddress" placeholder='Enter Address' onChange={(e) => handleAddressChange(e.target.value)}/><br></br>
        <button onClick={() => handleSave()}>Save</button>
        </Fragment>
    )
}

export default Register;