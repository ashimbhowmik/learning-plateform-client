import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="flex flex-col w-full lg:mt-36 lg:mb-36 my-20 lg:my-0">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center px-4 lg:px-0">
          <h1 className="text-xl font-bold">How anyone login this site?</h1>
          <p>Ans : First you have to register this site then you can login .</p>
        </div>
        <div className="divider"></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center px-4 lg:px-0">
          <h1 className="text-xl font-bold">How can I buy course?</h1>
          <p>
            Ans : First Login My site . Then choice your course . Then click get
            premium button and buy course
          </p>
        </div>
        <div className="divider"></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center px-4 lg:px-0">
          <h1 className="text-xl font-bold">Is it userfrindly?</h1>
          <p>
            Ans : I will try to make this site user frindly . Please feedback ,
            i will try improve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
