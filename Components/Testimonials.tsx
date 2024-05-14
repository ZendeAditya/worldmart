import React from "react";
import customer1 from "@/public/customers/cu1.webp";
import customer2 from "@/public/customers/cu2.webp";
import customer3 from "@/public/customers/cu3.webp";
import Image from "next/image";
const Testimonials = () => {
  return (
    <section className="py-5">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Testimonials</h1>
        <h2 className="text-lg py-2">This is what our customers say about World Mart!</h2>
      </div>
      <div className="flex items-center justify-center flex-col gap-2 lg:flex-row py-3">
            <div className="flex bg-blue-400 text- py-4 text-base items-center gap-2 px-2 rounded-full text-wrap w-[28rem] lg:w-[30rem]">
                <Image src={customer1} alt="customer 1" className="object-cover w-20 h-20 md:w-24 md:h-2/4 lg:w-32 lg:h-32 rounded-full"/>
                <p>Shopping at World Mart has been an absolute delight! From the seamless navigation to the incredible variety of products, every click feels like a step closer to finding exactly what I need.</p>
            </div>
            <div className="flex bg-blue-400 text- py-4 text-base items-center gap-2 px-2 rounded-full text-wrap w-[28rem] lg:w-[30rem]">
            <Image src={customer1} alt="customer 1" className="object-cover w-20 h-20 md:w-24 md:h-2/4 lg:w-32 lg:h-32 rounded-full"/>
                <p>
                I {"can't"} speak highly enough about my experience with World Mart. The user interface is intuitive, making it easy to browse through their extensive collection of products.
                </p>
            </div>
            <div className="flex bg-blue-400 text- py-4 text-base items-center gap-2 px-2 rounded-full text-wrap w-[28rem] lg:w-[31rem]">
            <Image src={customer1} alt="customer 1" className="object-cover w-20 h-20 md:w-24 md:h-2/4 lg:w-32 lg:h-32 rounded-full"/>
                <p>
                World Mart has become my go-to destination for all things shopping. Whether {" I'm"} looking for electronics, fashion, or home essentials, I know I can trust World Mart to have exactly what I need.
                </p>
            </div>
      </div>
    </section>
  );
};

export default Testimonials;
