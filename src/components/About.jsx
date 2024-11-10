import React from "react";
import Navbar from "./Navbar";
import aboutBg from "../images/about-img.jpg";
import Footer from "./Footer";
import ScaleLoader from "react-spinners/ScaleLoader";
import logo from "../images/logo.png"
export default function About() {
  let [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Navbar />
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
          <section>
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
              {/* Component */}
              <div className="flex flex-col items-center gap-14 lg:gap-20">
                {/* Image */}
                <img src={logo} alt="" className="w-[40%] rounded-xl" />
                {/* Content */}
                <div className="flex flex-col items-center gap-14 lg:gap-20">
                  <div className="w-[80%] flex flex-col md:flex-row gap-5">
                    <h2 className="text-[#178066] text-3xl md:text-5xl font-bold flex-1">
                      Vision
                    </h2>
                    <p className="flex-1">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem explicabo libero impedit fugiat officiis exercitationem officia, harum at est cum in. Reprehenderit dignissimos distinctio quae labore vitae debitis molestiae praesentium?

                    </p>
                  </div>
                  <div className="w-[80%] flex flex-col md:flex-row gap-5">
                    <h2 className="text-[#178066] text-3xl md:text-5xl font-semibold flex-1">
                      Mission
                    </h2>
                    <p className="flex-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta atque eligendi rerum aliquid quibusdam. Obcaecati praesentium quos officia commodi dicta. Nihil alias sit laboriosam ducimus maiores, similique reprehenderit accusamus obcaecati.
                    </p>
                  </div>
                  <div className="w-[80%] flex flex-col md:flex-row gap-5">

                    <h2 className="text-[#178066] text-3xl md:text-5xl font-bold flex-1">
                      our core values
                    </h2>
                    <p className="flex-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, cumque tempora nostrum possimus repellat a illo quas similique molestias? Excepturi consequatur ipsa assumenda laudantium ducimus quo incidunt eligendi animi nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}
