import { useState } from "react";

export default function ResetForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [personalNumber, setPersonalNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  function resetPassword() {
    fetch(`http://localhost:8080/reset?Email=${email}&personalNumber=${personalNumber}&phoneNumber=${phoneNumber}&password=${password}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Do something with the response data
    setMessage(data.message)
  })
  .catch((error) => console.error('Error:', error));
  }
  

  return (
    <div className="form" style={form}>
      <h3>Reset password</h3>
      <div style={formreset}>
        <label>E-mail</label>
        <input type="email" placeholder="E-mail" required onChange={(event)=> {setEmail(event.target.value)}
        }/>
        <label>Personal Number</label>
        <input
          type="text"
          minLength="11"
          maxLength="11"
          placeholder="Personal N"
          required
          onChange={(event)=> {setPersonalNumber(event.target.value)}}
        />
         <label>Phone Number</label>
        <input
          type="text"
          minLength="9"
          maxLength="9"
          placeholder="Phone N"
          required
          onChange={(event)=> {setPhoneNumber(event.target.value)}}
        />
         <label>New Password</label>
        <input type="password" placeholder="Password" required 
        onChange={(event)=> {setPassword(event.target.value)}}/>
        <button onClick={resetPassword}>Reset</button>
      </div>
      <span>{message}</span>
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

const formreset = {
  display: "flex",
  gap: "5px",
  flexDirection: "column",
}

