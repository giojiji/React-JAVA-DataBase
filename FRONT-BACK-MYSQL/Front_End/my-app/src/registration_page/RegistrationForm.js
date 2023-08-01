import {  useState } from "react";


export default function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalNumber, setPersonalNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");


  let newUserBody = {
    "Email": email,
    "password": password,
    "firstName": firstName,
    "lastName": lastName,
    "personalNumber": personalNumber,
    "phoneNumber": phoneNumber
}

  function SaveNewUser() {
   
    console.log(email)
    console.log(password)
    console.log(firstName)
    console.log(personalNumber)
    console.log(phoneNumber)


    fetch('http://localhost:8080/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUserBody),
})
  .then((response) => response.json())
  .then((data) => {
    // Do something with the response data
    setMessage(data.message)
  })
  .catch((error) => console.error('Error:', error));
  }

  function handleUserEmail(event) {
    setEmail(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  function handleFirstName(event) {
    setFirstName(event.target.value)
  }

  function handleLastName(event) {
    setLastName(event.target.value)
  }

  function handlePersonalNumber(event) {
    setPersonalNumber(event.target.value)
  }

  function handlePhoneNumber(event) {
    setPhoneNumber(event.target.value)
  }

 
  return (
    <div className="form">
      <div style={form}>
        <label>Registration form</label>
        <input type="email" placeholder="E-mail" required onChange={handleUserEmail}/>
        <input type="password" placeholder="password" required onChange={handlePassword}/>
        <input type="text" placeholder="Firts name" required onChange={handleFirstName}/>
        <input type="text" placeholder="Last name" required onChange={handleLastName}/>
        <input
          type="text"
          minLength="11"
          maxLength="11"
          placeholder="Personal N"
          required
          onChange={handlePersonalNumber}
        />
        <input
          type="text"
          minLength="9"
          maxLength="9"
          placeholder="Phone N"
          required
          onChange={handlePhoneNumber}
        />
        <button onClick={SaveNewUser}>Register</button>
        <span style={registrationMessage}>{message}</span>
      </div>
      
    </div>
  );
}

const form = {
  width: "200px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "25px",
  marginTop: "25px",
};

const registrationMessage = {
  fontSize: "25px",
};
