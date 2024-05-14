import React from "react";
import gift from "@/public/gift.png";
import Image from "next/image";
type Props = {};

const Gift = (props: Props) => {
  return (
    <section id="Offers" className="w-screen h-full bg-blue-50">
      <div className="flex items-center justify-center px-2 lg:px-52 flex-col lg:flex-row py-3">
        <div className="lg:w-[30rem]">
          <Image
            src={gift}
            alt="gift icon image"
            className="object-cover h-96 w-auto"
            w-96
          />
        </div>
        <div className="px-16">
          <h2 className="text-2xl md:text-4xl py-4">Did You Know?</h2>
          <p className="text-lg text-justify">
            At WorldMart, {"we're"} not just another shopping destination.{" "}
            {"we're"} your gateway to a world of convenicece and quality.
            Founded on the principles of customer satisfaction and innovation.
            we strive to redefine your shopping experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gift;
