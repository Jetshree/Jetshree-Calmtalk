import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../images/hospital.jpg";
import home from "../images/home.png";
import client from "../images/client.jpg";
import download from "../images/download.jpeg"
import meditation2 from "../images/meditation2.jpg"
import yoga from "../images/yoga.jpg"
import yoga2 from "../images/yoga2.jpg"
import {Link} from "react-router-dom"

import ScaleLoader from "react-spinners/ScaleLoader";
export default function Home() {
  let [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
    <div style={{ backgroundColor: "#dddbca" }}>
      {/* <Navbar/> */}

      <Navbar style={{ height: '80px' }} />
      {loading ? (
        <div className="flex justify-center h-[90vh] text-center items-center">
          <ScaleLoader
            color={"#32AD94"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : ( 
        <div>
          <Hero />
          {/* about use section */}

          <section>
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
              {/* Title */}

              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                <img
                  src={download}
                  alt=""
                  className="inline-block h-full w-full rounded-2xl object-cover"
                />
                <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
                  <h2 className="text-3xl font-bold md:text-5xl text-[#178066]">
                     What is CalmTalk?
                  </h2>
                  <p className="text-sm text-gray-500 sm:text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse, velit maiores cum quisquam iusto temporibus reprehenderit vero voluptas animi, ratione a aliquid suscipit alias recusandae facere iste sapiente doloremque?
                    <br />
                    <br />
                    Compassionate Care, Exceptional Outcomes.
                  </p>
                </div>

              </div>
          </div>
          </section>
          <div className="flex justify-center my-6 gap-10 mx-5">
          <div class="card" style={{width: "18rem",backgroundColor: "#ddccca"}}>
  <img src={meditation2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Meditation</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/meditation" class="btn btn-primary">Explore</Link>
  </div>
</div>
<div class="card" style={{width: "18rem",backgroundColor: "#ddccca"}}>
  <img src={yoga2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Yoga</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/yoga" class="btn btn-primary">Explore</Link>
  </div>
</div>
<div class="card" style={{width: "18rem",backgroundColor: "#ddccca"}}>
  <img src="" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Journaling</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/login" class="btn btn-primary">Explore</Link>
  </div>
</div>
</div>
          <Footer />
        </div>
      )}
      </div>
    </>
  );
}
