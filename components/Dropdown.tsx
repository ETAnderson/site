import React from "react";
import { Site } from "../typings";
import DropdownItem from "./DropdownItem";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";

interface SiteProps {
  sites: [Site];
}

function Dropdown({ toggleDropDown }: any) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <ArrowCircleDownIcon className="h-8 mb-1 group-hover:animate-bounce " />
      <h1 className="opacity-0 group-hover:opacity-100 tracking-widest">
        Demos
      </h1>
    </div>
  );
}

export default Dropdown;
