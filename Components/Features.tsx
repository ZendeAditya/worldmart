import React from "react";

type Props = {};
import { IoCashOutline, IoTimeOutline } from "react-icons/io5";
import { RiRefund2Fill } from "react-icons/ri";
import delivery from "@/public/delivery.png"
import Image from "next/image";
const Features = (props: Props) => {
  return (
    <>
      <section id="About" className="w-screen h-full bg-blue-400 text-white">
        <div className="flex items-center justify-center px-2 flex-col lg:flex-row py-3">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold py-2">
              Features & <br /> <span className="text-yellow-400">Benefits</span>
            </h2>
            <p className="py-3 text-xl md:text-2xl">
              Your go-to for rapid delivery, ensuring your  satisfaction <br /> at the speed of light.
            </p>
            <ul className="flex flex-col items-start gap-4 text-xl md:text-2xl justify-between">
              <li className="flex items-center gap-2">
                <IoTimeOutline size={26} />
                <p>Get your delevery in 48 hrs</p>
              </li>
              <li className="flex items-center gap-2">
                <IoCashOutline size={26} />
                <p>Cash on delivery</p>
              </li>
              <li className="flex items-center gap-2">
                <RiRefund2Fill size={26} />
                <p>7 Days easy return </p>
              </li>
            </ul>
          </div>
          <div>
            <Image src={delivery} alt="deliveryIcon" className="w-96 h-96 object-cover"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
