import { CheckIcon } from "@/commons/icons";
import React, { useState } from "react";

const MainCheckbox = ({ checkClick, notCheckClick,text , ckeckInfo }) => {
  const [check, setCheck] = useState(ckeckInfo);
  return (
    <div
      onClick={() => {
        if (check) {
          checkClick && notCheckClick();
        } else {
          notCheckClick && checkClick();
        }
        setCheck(!check);
      }}
      className="flex w-auto"
    >
      <div
        className={` w-6 h-6  border  rounded mr-2  ${
          check ? "border-[#21A7F9]" : "border-[#999C9F]"
        } flex  justify-center items-center`}
      >
        {check && <CheckIcon/>}
      </div>
      <label  className=" text-[#010A1B] text-[18px] font-normal"> {text}</label>
    </div>
  );
};

export default MainCheckbox;
