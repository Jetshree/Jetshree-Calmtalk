import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer";
import meditation2 from "../images/meditation2.jpg"
import {Link} from "react-router-dom"
// import yoga from "./images/yoga.jpg"

const yoga1 = () => {
  return (<>
    <Navbar style={{ height: '80px' }} />
    <div style={{ backgroundColor: "#dddbca" }}>


    <div>
      <div>
      <span className='lg:text-4xl md:text-5xl text-4xl text-black'><br/>Get started with yoga</span><br/><br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatum nisi libero reprehenderit. Mollitia eligendi fugit iusto voluptas laborum labore suscipit corrupti, facere nulla expedita quia, eveniet iure. Aspernatur, accusamus.</p><br /><br />
      <div className="flex" style={{marginLeft: "12%"}}>
                <span className='lg:text-3xl md:text-xl text-xl text-black justify-center'>Pranayam</span>
      </div>
      {/* <span className='lg:text-6xl md:text-5xl text-4xl text-black justify-center'><br/><br/>Pranayam</span><br/><br /> */}
      <div className="flex justify-center gap-10 mx-5">

          <div class="card" style={{width: "18rem",backgroundColor: "#ddccca",marginTop:"80px"}}>
  <img src={meditation2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Music</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Explore</a>
  </div>
</div>
<div class="card" style={{width: "18rem",backgroundColor: "#ddccca",marginTop:"80px"}}>
  <img src="..."class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Yoga</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='#' class="btn btn-primary">Explore</Link>
  </div>
</div>
<div class="card" style={{width: "18rem",backgroundColor: "#ddccca",marginTop:"80px"}}>
  <img src="" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Journaling</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" class="btn btn-primary">Explore</Link>
  </div>
</div>
</div>
</div>


    </div>

    </div>
    <Footer/>
    </>
  )
}

export default yoga1
