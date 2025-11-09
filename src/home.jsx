

function Home(){

return(
  <>
  <div className="imgdiv" >

<h1 className="logo">Cars25</h1>
<h2 className="tag1">"FIND THE BEST PREOWNED CARS AT AN AFFORDABLE PRICE"</h2>
<h3 className="tag2">Reliability,comfort,performance all in one place</h3>
<button
  onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
className="btn1"> 
  Dive In
</button>

  </div>
  </>
);



}
export default Home