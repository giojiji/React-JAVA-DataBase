import { useState } from "react";
import RegistrationForm from "../registration_page/RegistrationForm";
import Display from "./Display";
import ResetForm from "../registration_page/ResetForm";
import "./LandingStyle.css";

export default function LandingPage({
  openAccount,
  emailValue,
  passwordValue,
  loginMessage
}) {
  const [form, setForm] = useState(0);


  function registerClient(event) {
    if (event.target.textContent === "Registration") {
      event.target.innerText = "Main menu";
      setForm(1);
    } else {
      event.target.innerText = "Registration";
      setForm(0);
    }
  }

  function handleReset() {
    setForm(2);
  }

  return (
    <div style={landing}>
      <div className="LandingPage" style={header}>
        <div className="logo headerBox" style={(headerBox, logo)}>
          <img
            src="https://images.theconversation.com/files/378097/original/file-20210111-23-bqsfwl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            alt="earth"
            width="80px"
          />
          <p>Hotels everywhere</p>
        </div>
        <div className="registration" >
        <p style={title}>The Best booking Company</p>
          <button
            className="registerBTN"
            style={registerBTN}
            onClick={(event) => {
              registerClient(event);
            }}
          >
            Registration
          </button>
        </div>
        <div
          className="authorization headerBox"
          style={(headerBox, authorization)}
        >
          <div className="login" style={login}>
            <div className="credencials" style={credencials}>
              <input
                type="email"
                placeholder="E-mail"
                onChange={(event) => {
                  emailValue(event.target.value);
                }}
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  passwordValue(event.target.value);
                }}
              />
            </div>
            <button
              className="loginBTN"
              style={loginBTN}
              onClick={() => {
                openAccount();
              }}
            >
              Login
            </button>
          </div>
          <span style={loginErrorMessage}>{loginMessage}</span>

          <span
            href="/"
            className="forgotBTN"
            style={forgotBTN}
            onClick={handleReset}
          >
            Forgot password?
          </span>

        </div>
      </div>
      {form === 0 ? (
        <Display />
      ) : form === 1 ? (
        <RegistrationForm />
      ) : (
        <ResetForm />
      )}
    </div>
  );
}

const landing = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const header = {
  width: "100%",
  height: "30%",
  backgroundColor: "blue",
  margin: 0,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const headerBox = {
  width: "30%",
  height: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const authorization = {
  width: "30%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
};

const login = {
  marginTop: "10px",
  display: "flex",
  gap: "5px",
};

const credencials = {
  display: "flex",
  flexDirection: "column",
  gap: "3px",
};

const loginBTN = {
  borderRadius: "12px",
  cursor: "pointer",
};

const registerBTN = {
  width: "70%",
  height: "30px",
  cursor: "pointer",
};

const forgotBTN = {
  cursor: "pointer",
};

const loginErrorMessage = {
  marginTop: "10px",
  color: "red"
};

const logo = {
  width: "30%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
};

const title = {
  fontSize: "25px",
  fontWeight: "bold",
  color: "#333", // Text color (dark gray)
  textDecoration: "underline", // Underline the title
  fontStyle: "italic", // Apply italic font style
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Add a slight shadow effect
  marginBottom: "20px"
}