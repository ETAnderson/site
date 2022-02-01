import Image from "next/image";
import React from "react";
import { Site } from "../typings";

function DropdownItem({ name, link, sitePic }: Site) {
  return (
    <a
      className="flex flex-col justify-center p-5 group  shadow-2xl"
      key={name}
      href={link}
    >
      <Image
        className="object-contain group-hover:animate-pulse"
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
