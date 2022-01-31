import Image from "next/image";
import React from "react";
import { Site } from "../typings";

function DropdownItem({ name, link, sitePic }: Site) {
  return (
    <a className="flex flex-col align-middle p-2 group" key={name} href={link}>
      <Image
        className="justify-center object-contain group-hover:animate-bounce w-6 h-6"
        src={sitePic}
        height={40}
        width={40}
        alt=""
      />
      <h1 className="opacity-0 group-hover:opacity-100 tracking-widest">
        {name}
      </h1>
    </a>
  );
}

export default DropdownItem;
