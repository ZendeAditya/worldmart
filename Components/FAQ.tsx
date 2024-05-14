"use client";
import React, { useState } from "react";
import faqsData from "@/lib/faq.json";
import { FaPlus } from "react-icons/fa6";

interface FAQ {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-5 bg-center bg-no-repeat bg-cover bg bg-white p-3 px-3">
      <div className="text-center">
        <h1 className="uppercase text-xl lg:text-3xl font-semibold">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="p-3 border-2 backdrop-blur-md flex items-center justify-center h-auto w-full rounded-lg">
        <div>
          {faqsData.faqs.map((faq: FAQ, index: number) => (
            <div key={index} className="border-b-2">
              <div className="flex items-center justify-between px-3">
                <h2 className="py-2 font-semibold text-blue-600">{faq.question}</h2>
                <button onClick={() => handleOpen(index)}>
                  <FaPlus
                    className="text-black cursor-pointer"
                    size={24}
                    style={{ transform: openIndex === index ? "rotate(45deg)" : "" }}
                  />
                </button>
              </div>
              <p className={`${openIndex === index ? "block" : "hidden"}`}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
