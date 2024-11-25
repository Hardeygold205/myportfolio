"use client"

import React from 'react'
import CountUp from "react-countup";

function InfoList({ number, text }) {

  return (
    <div className='flex items-center space-x-2 flex-1 justify-center xl:justify-start'>
      <h1 className="text-5xl font-bold text-green-500">
        <CountUp start={0} end={number} delay={1} duration={2} />
      </h1>
      <p className={`${text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} text-sm leading-snug`}>{text}</p>
    </div>
  );
}

export default InfoList;
