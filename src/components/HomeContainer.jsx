import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
    >
      <div className=" py-2 flex-1 flex flex-col items-start md:items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] md:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          laudantium, excepturi cum deleniti optio aspernatur ducimus, incidunt
          natus veritatis velit consectetur, beatae magnam dignissimos culpa
          pariatur impedit aliquid vero repellat!
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-500 to-orange-500-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100  md:w-auto "
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex  items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-full w-full  lg:w-auto lg:h-650 "
          alt="hero-bg"
        ></img>
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center  py-4 gap-4 flex-wrap ">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className=" lg:w-190  p-4 bg-cardOverlay backdrop-blur-md  rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 -mt-10 lg:w-40 lg:-mt-20"
                  alt="I1"
                />
                <p className="text-base  lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-[12px] lg:text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">₹</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
