import Image from "next/image";
import React from "react";
import { Site } from "../typings";

function DropdownItem({ name, link, sitePic }: Site) {
  return (
    <a
      className="flex flex-col w-2/3  align-middle md:place-content-center p-5 my-2 group rounded-lg shadow-md md:mx-5 hover:animate-pulse md:hover:animate-bounce bg-gray-900"
      key={name}
      href={link}
    >
      <Image
        className="object-contain "
        src={sitePic}
        height={40}
        width={40}
        alt=""
      />
      <h1 className="text-center py-2 opacity-0 group-hover:opacity-100 tracking-widest">
        {name}
      </h1>
    </a>
  );
}

export default DropdownItem;
