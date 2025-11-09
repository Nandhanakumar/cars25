import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Collections1() {
  const [singleOwner, setSingleOwner] = useState([]);
  const [datas, setDatas] = useState([]);
  const take=useNavigate()

  useEffect(() => {
    fetch("https://6910b02a7686c0e9c20b64c8.mockapi.io/api/cars/car")
      .then((res) => res.json())
      .then((data) => {
        const carsArray1 = data[0]?.cars || [];
        setDatas(carsArray1);

        const filtered = carsArray1.filter((car) => car.owner_count === 1);
        setSingleOwner(filtered);
      })
      .catch((err) => console.error("Error occured", err));
  }, []); 

  return (
    <>
      <div id="collections" >
        <h2>Single Owner Cars</h2>

        <div className="car-list">
          {singleOwner.map((car) => (
            <div key={car.id} className="car-card" onClick={()=>take(`/cars/${car.id}`)}>
            <img className="carsimg" src={car.images[0]} alt={`${car.make} ${car.model}`} />

              <h3>
                {car.make} {car.model}
              </h3>
                 <h4>
                ₹{car.price_inr} 
              </h4>
              <p>Year: {car.year}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Collections1;
