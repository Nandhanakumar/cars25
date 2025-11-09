import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Collections3() {
  const take1=useNavigate()
  const [threeOwner, setThreeOwner] = useState([]);
  const [datas2, setDatas2] = useState([]);

  useEffect(() => {
    fetch("https://6910b02a7686c0e9c20b64c8.mockapi.io/api/cars/car")
      .then((res) => res.json())
      .then((data) => {
         const carsArray = data[0]?.cars || [];
        setDatas2(carsArray);

        const filtered = carsArray.filter((car) => car.owner_count === 3);
        setThreeOwner(filtered);
      })
      .catch((err) => console.error("Error occured", err));
  }, []); 

  return (
    <>
      <div id="collections" >
        <h2>Third Owner Cars</h2>

        <div className="car-list">
          {threeOwner.map((car) => (
            <div key={car.id} className="car-card" onClick={()=>take1(`/cars/car/${car.id}`)}>
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

export default Collections3;
