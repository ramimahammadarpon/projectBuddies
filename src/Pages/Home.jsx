import React, { Suspense } from "react";
import Carousel from "../Components/Carousel";
import FeaturedTasks from "../Components/FeaturedTasks";
import Faq from "../Components/Faq";

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

      <section className="mx-3 md:mx-14 lg:mx-20">
        <FeaturedTasks></FeaturedTasks>
      </section>


      <section>
        <Faq></Faq>
      </section>
    </div>
  );
};

export default Home;
