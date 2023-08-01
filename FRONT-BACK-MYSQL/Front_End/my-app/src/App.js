import { useState } from "react";
import "./App.css";
import LandingPage from "./landing_page/LandingPage";
import MyPage from "./my_page/MyPage";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [loginMessage, setLoginMessage] = useState(false);

  function handleEmailValue(value) {
    setEmail(value);
  }

  function logedout() {
    setSuccessMessage(false);
    setEmail("");
    setPassword("");
  }

  function handlePasswordValue(value) {
    setPassword(value);
  }

  function handleOpenAccount() {
    fetch("http://localhost:8080/login", {
      method: "GET", // Change this to the appropriate method (e.g., POST, PUT, etc.)
      headers: {
        "Content-Type": "application/json", // Set the content type as JSON if applicable
        email: email,
        password: password,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status);
        let status = data.status;
        if (status) {
          setSuccessMessage(true);
          setLoginMessage(null);
        } else {
          setSuccessMessage(false);
          setLoginMessage("Invalid credencials!");
        }
      })
      .catch((error) => console.error("Error არის:", error)); 
  }

  return (
    <div className="App">
      {successMessage ? (
        <MyPage logout={logedout} email={email} />
      ) : (
        <LandingPage
          openAccount={handleOpenAccount}
          emailValue={handleEmailValue}
          passwordValue={handlePasswordValue}
          loginMessage={loginMessage}
        />
      )}
    </div>
  );
}

export default App;
