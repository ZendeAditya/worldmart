import React from "react";

type Props = {};

const CallToAction = (props: Props) => {
  return <section className="w-screen h-80 bg-blue-50 flex items-center justify-center flex-col md:flex-row gap-4 lg:gap-7 ">
    <div className="text-center">
        <h1 className="text-3xl py-2">Ready to get started?</h1>
        <p className="text-lg py-2 font-semibold">Sign Up or Contact Us</p>
    </div>
    <div className="flex items-center justify-center flex-col md:flex-row gap-4">
        <button className="py-2 w-40 rounded-md border-2 border-blue-300 hover:bg-blue-300">Start Free Trial</button>
        <button className="py-2 w-40 rounded-md border-2 bg-blue-300 hover:border-blue-300 hover:bg-white">Contact Us</button>
    </div>
  </section>;
};

export default CallToAction;
