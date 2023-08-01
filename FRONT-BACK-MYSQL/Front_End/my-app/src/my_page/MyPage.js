import { useEffect, useState } from "react";
import "./MyPageStyle.css";
import UserInfo from "./UserInfo";

export default function MyPage({ email, logout }) {
  const [filteredData, setFilteredData] = useState([]);

  let [country, setCountry] = useState("");
  let [city, setCity] = useState("");
  let [price, setPrice] = useState("");
  let [hotelName, sethotelName] = useState("");
  let [noData, setNoDate] = useState(null);
  let [hotelsData, setHotelsData] = useState([]);
  let [fromDate, setFromDate] = useState("");
  let [toDate, setToDate] = useState("");
  let [choosedHotelDetails, setchoosedHotelDetails] = useState([])
  let [fullAmount, setFullAmount] = useState();
  let [board, setBoard] = useState(false)
  let [bookRespond, setBookRespond] = useState("")
  let [myData, setMyData] = useState(false)
  let [lastName, setLastName] = useState("")
  let [firstName, setFirstName] = useState("")
  let [personalNumber, setPersonalNumber] = useState("")
  let [phoneNumber, setPhoneNumber] = useState("")

 


  

  useEffect(() => {
    fetch(`http://localhost:8080/hotels`, {
      method: "GET", // Change this to the appropriate method (e.g., POST, PUT, etc.)
      headers: {
        "Content-Type": "application/json", // Set the content type as JSON if applicable
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setHotelsData(data);
       
          setFilteredData(data)
       
      })
      .catch((error) => console.error("Error არის:", error));
  }, []);


function getMyDetails() {
  fetch(`http://localhost:8080/myaccounthotels?email=${email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
console.log(data) 
setTimeout(() => {
  setFilteredData(data) 
  setMyData(true)
}, 1000);
       })
    .catch((error) => console.error('Error:', error));
    
 

  
  fetch(`http://localhost:8080/myaccount?email=${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
  
      setFirstName(data.firstName)
      setLastName(data.lastName)
      setPersonalNumber(data.personalNumber)
      setPhoneNumber(data.phoneNumber)
  
        })
        .catch((error) => console.error('Error:', error));

}


  function loadData() {
    // Filter the data based on the input values
    const filtered = hotelsData.filter((hotel) => {
      // Check if the input fields are not empty
      const isCountryEmpty = country === "";
      const isCityEmpty = city === "";
      const isPriceEmpty = price === "";
      const isHotelNameeEmpty = hotelName === "";
      
      setMyData(false)
      setFirstName("")
      setLastName("")
      setPersonalNumber("")
      setPhoneNumber("")
      // Filter based on the conditions
      return (
        (isCountryEmpty ||
          hotel.country.toLowerCase().includes(country.toLowerCase())) &&
        (isCityEmpty ||
          hotel.city.toLowerCase().includes(city.toLowerCase())) &&
          (isHotelNameeEmpty ||
            hotel.hotelName.toLowerCase().includes(hotelName.toLowerCase())) &&
        (isPriceEmpty || hotel.price > Number(price)) 
      );
    });

    setFilteredData(filtered);

    if (filtered.length === 0) {
      setNoDate("No Result");
    } else {
      setNoDate(null);
    }
  }

  function bookHotel(event) {
  let Id = event.target.parentElement.firstElementChild.textContent
  let title = event.target.parentElement.children[2].textContent
  let country = event.target.parentElement.children[3].textContent
  let city = event.target.parentElement.children[4].textContent
  let price = event.target.parentElement.children[5].textContent
  let arr = []
  arr.push(Id, title, country, city, price)
  setchoosedHotelDetails(arr)
  setFullAmount(price)
  setBoard(true)
  }

  function unbookOrder(event) {
    let id = event.target.parentElement.firstElementChild.textContent.toString()
    let orderId = event.target.parentElement.children[1].textContent.toString();

    fetch(`http://localhost:8080/unbook?email=${email}&id=${id}&orderId=${orderId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {

setTimeout(() => {
  getMyDetails()
}, 500);
    })
    .catch((error) => console.error('Error:', error));
    
  }

  function handleCountry(event) {
    setCountry(event.target.value);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handlePrice(event) {
    setPrice(event.target.value);
  }

  function handleHotelName(event) {
    sethotelName(event.target.value);
  }

  function hideBoard() {
    setBoard(false)
    setFromDate("")
    setToDate("")
  }

  function saveBookDetails() {
console.log(fromDate)
console.log(toDate)
console.log(choosedHotelDetails[4], choosedHotelDetails[1])

let newBookBody = {
  "fromDate": fromDate,
  "toDate": toDate,
  "fullPrice": fullAmount.toString(),
  "price": choosedHotelDetails[4],
  "quantity": (fullAmount/choosedHotelDetails[4]).toString(),
  "id": choosedHotelDetails[0],
  "email": email,
}
console.log(newBookBody)

fetch('http://localhost:8080/book', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newBookBody),
})
  .then((response) => response.json())
  .then((data) => {
    // Do something with the response data
    setBookRespond(data.message)
  })
  .catch((error) => console.error('Error:', error));
  setTimeout(() => {
    hideBoard()
    setBookRespond("")
  }, 3000);



  }

  

  return (
    <div className="myPage">
      <div className="header">
        <div className="logo headerBox" style={(headerBox, logo)}>
          <img
            src="https://images.theconversation.com/files/378097/original/file-20210111-23-bqsfwl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            alt="earth"
            width="80px"
          />
          <p>Fly everywhere</p>
        </div>

        {myData ? (

    <UserInfo  firstName={firstName} lastName={lastName} 
    personalNumber={personalNumber} phoneNumber={phoneNumber}
     />
   
) : (
  <div className="category">
    <p style={title}>The Best booking Company</p>
  </div>
)}



        <div className="myDetails">
          <span style={{ color: "white" }}>{email}</span>
          <button onClick={getMyDetails}>My account/orders</button>
          <button
            onClick={() => {
              logout();
            }}
          >
            Log out
          </button>
        </div>
      </div>

      <div className="search">
      <label>Hotel Name</label>
      <input type="text" placeholder="Hotel Name"  onChange={handleHotelName} required />
        <label>Country</label>
        <input type="text" placeholder="Country" onChange={handleCountry} />
        <label>City</label>
        <input
          type="text"
          placeholder="City"
          required
          onChange={(event) => {
            handleCity(event);
          }}
        />
        <label>Price</label>
        <input type="text" placeholder="Price" onChange={handlePrice} required />
        <button onClick={loadData}>search</button>
      </div>

{ board ?
<div style={boardPlace}>
      <div style={detailsBoard}> 
        <input type="date" onChange={(event) => {setFromDate(event.target.value)}}/> 
         <input type="date" onChange={(event) => {setToDate(event.target.value)}}/> 
         <span>{choosedHotelDetails[1]} {choosedHotelDetails[2]} {choosedHotelDetails[3]} {choosedHotelDetails[4]}</span>
         <input type="number" placeholder="Quantity" onChange={(event) => {setFullAmount(event.target.value * choosedHotelDetails[4])}}/> 
         <span>Date: {fromDate}/{toDate}</span>
         <span>Full amount {fullAmount}$</span>
         <button onClick={saveBookDetails}>Book hotel</button>
         <button onClick={hideBoard}>Cancel</button>
         <p>{bookRespond}</p> 
      </div> 
      </div> 
      : null
      
}


      <h1 style={noData != null ? noResult : hideResultText} >{noData}</h1>
      <div className="result">
        {filteredData.map((hotel, index) => (
          
         
          <div className="data" key={index}>
          {!myData ? (
  // If myData is truthy, render hotel information
  <>
    <span style={hotelID}>{hotel.hotelId}</span>
    <span>
      <img src={hotel.img} width="70px" height="70px" alt="coountry" />
    </span>
    <span>{hotel.hotelName}</span>
    <span>{hotel.country}</span>
    <span>{hotel.city}</span>
    <span>{hotel.price}</span> 
    {hotel.avaliable ? (
      <button style={book} onClick={bookHotel}>Book now</button>
    ) : (
      <button style={reserved} disabled>Reserved</button>
    )}
  </>
) : (
  // If myData is falsy, render additional information
  <>
  <span style={hotelID}>{hotel.hotelId}</span>
  <span style={hotelID}>{hotel.orderId}</span>
  <img src={hotel.img} width="70px" height="70px" alt="coountry" />
  <span>{hotel.hotelName}</span> 
    <span>{hotel.country}/{hotel.city}</span> 
    <span style={orderspan}>{hotel.fromDate}/{hotel.toDate}</span> 
    <span style={orderspan}>Rooms: {hotel.quantity}/ Full price: {hotel.fullAmount}$</span> 
    <button onClick={unbookOrder}>cancel</button>
  </>
)}
          </div>
          
        ))}
      </div>
      
    </div>
  
  );
}

const logo = {
  width: "30%",
  display: "flex",
  flexDirection: "column",
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

const noResult = {
  textAlign: "center",
};

const reserved = {
  backgroundColor: "#ad3030",
  disable: "true"
}

const book = {
  color: "green",
}

const title = {
  fontSize: "25px",
  fontWeight: "bold",
  color: "#333", // Text color (dark gray)
  textDecoration: "underline", // Underline the title
  fontStyle: "italic", // Apply italic font style
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Add a slight shadow effect
  marginBottom: "20px"
}

const hotelID = {
  display: "none"
}

const hideResultText = {
  display: "none"
}

const detailsBoard = {
  width: "320px",
  height: "400px",
  display: "flex",
  backgroundColor: "blueviolet",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
  textAlign: "center",
  color: "white",
  borderRadius: "25px"
}

const boardPlace = {
  display: "block",
  position: "fixed",
  top: "30%" 
}

const orderspan = {
  width: "200px",
  textAlign: "center"
}