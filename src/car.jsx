import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./footer";


function Car() {
  const { id } = useParams(); // example: "car_002"
  const [car, setCar] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    // Fetch the parent object that contains all cars
    fetch("https://6910b02a7686c0e9c20b64c8.mockapi.io/api/cars/car")
      .then((res) => res.json())
      .then((data) => {
        const carsArray = data[0]?.cars || [];
        const foundCar = carsArray.find((c) => c.id === id);
        setCar(foundCar || null);
      })
      .catch((err) => console.error("Error fetching car:", err));
  }, [id]);

  if (!car) {
    return <h2>Loading</h2>;
  }


  return (
    <>
      <h1 className="arr" onClick={() => navigate("/")}>⇦</h1>

      <div className="bhu">
        <img src={car.images[0]} alt={car.model} className="simg" />
      </div>

      <div className="mini">
        <div className="maincar">
          <h2 style={{ display: "inline", marginRight: "10px" }}>
            {car.make} {car.model}
          </h2>
          <h5 style={{ display: "inline", marginRight: "1.5rem" }}>
            {car.variant}
          </h5>
          <h3 style={{ display: "inline" }}>₹{car.price_inr}</h3>
          <h4>Year: {car.year}</h4>
          <h4>Driven: {car.mileage_km} km</h4>
          <p>{car.description}</p>
        </div>
      </div>

      <div className="car-list">

        <div className="features1">
          <div className="f1">
            <h4 className="owner">
              <div className="ownerfont">👤</div>
              {car.owner_count} Owner
            </h4>

            <h4 className="type">
              <div className="ownerfont">⚙️</div>
              {car.transmission}
              <br />Transmission
            </h4>

            <h4 className="date">
              <div className="ownerfont">📅</div>
              Posted on <br />
              {car.posted_date}
            </h4>
            
          </div>  <h3>🛠️ Service History:<br></br> {car.service_history}</h3>
        </div>


        <div className="features2">
          <h2>Car Specifications</h2>
          <h4>Features: {car.features[0]},<br></br>{car.features[1]},<br></br>{car.features[2]}<br></br>{car.features[3]}</h4>



            <h4>Fuel Type: {car.fuel_type}</h4>
            <h4>Engine: {car.engine_cc} cc</h4>
            <h4>Color: {car.color}</h4>
            <h4>Registration Year: {car.registration_year}</h4>
                       <h4>🧾 Insurance Valid Till: {car.insurance_valid_till}</h4>
           
           
          
       
        </div>


        <div className="features3">
          <h2>Seller Information</h2>
 <h4>Seller: {car.seller.name} ({car.seller.type})</h4>
            <h4>
              📍 Location: {car.location.city}, {car.location.state}
            </h4>
              <h4>Contact: {car.seller.phone}</h4>
               <h4>Email: {car.seller.email}</h4>

        </div>
      </div>
  <Footer/>  </>
  );
}

export default Car;

