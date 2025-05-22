import React, { Suspense } from "react";
import Carousel from "../Components/Carousel";

const Home = () => {
  return (
    <div>
      <section>
        <Suspense
          fallback={
            <div className="min-h-[70vh] flex justify-center items-center">
              <span className="loading loading-spinner w-12"></span>
            </div>
          }
        >
          <Carousel></Carousel>
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
