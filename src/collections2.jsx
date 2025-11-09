import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Collections2() {
  const take2=useNavigate()
  const [twoOwner, setTwoOwner] = useState([]);
  const [datas1, setDatas1] = useState([]);

  useEffect(() => {
    fetch("https://6910b02a7686c0e9c20b64c8.mockapi.io/api/cars/car")
      .then((res) => res.json())
      .then((data) => {
     const carsArray2 = data[0]?.cars || [];
        setDatas1(carsArray2);

        const filtered = carsArray2.filter((car) => car.owner_count === 2);
        setTwoOwner(filtered);
      })
      .catch((err) => console.error("Error occured", err));
  }, []); 

  return (
    <>
      <div id="collections">
        <h2>Second Owner Cars</h2>

        <div className="car-list">
          {twoOwner.map((car) => (
            <div key={car.id} className="car-card" onClick={()=>take2(`/cars/${car.id}`)}>
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

export default Collections2;

