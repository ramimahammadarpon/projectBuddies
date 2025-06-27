import React, { Suspense, useEffect } from "react";
import Carousel from "../Components/Carousel";
import FeaturedTasks from "../Components/FeaturedTasks";
import Faq from "../Components/Faq";
import SiteOverview from "../Components/SiteOverview";
import WebDesign from "../Components/WebDesign";
import WebDevelopment from "../Components/WebDevelopment";
import Marketing from "../Components/Marketing";
import Wrting from "../Components/Wrting";
import GraphicsDesign from "../Components/GraphicsDesign";

const Home = () => {
  useEffect(()=> {
    document.title = "ProjectBuddies | Home"
  }, []);
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

      <section className="mx-3 md:mx-14 lg:mx-20">
        <WebDesign></WebDesign>
      </section>
      <section className="mx-3 md:mx-14 lg:mx-20">
        <WebDevelopment></WebDevelopment>
      </section>
      <section className="mx-3 md:mx-14 lg:mx-20">
        <Marketing></Marketing>
      </section>
      <section className="mx-3 md:mx-14 lg:mx-20">
        <Wrting></Wrting>
      </section>
      <section className="mx-3 md:mx-14 lg:mx-20">
        <GraphicsDesign></GraphicsDesign>
      </section>

      <section>
        <Faq></Faq>
      </section>

      <section>
        <SiteOverview></SiteOverview>
      </section>
    </div>
  );
};

export default Home;
