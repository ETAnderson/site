import Image from "next/image";
import React from "react";
import { Site } from "../typings";

function DropdownItem({ name, link, sitePic }: Site) {
  return (
    <a className="flex flex-col align-middle pb-10 px-5" key={name} href={link}>
      <Image
        className="justify-center object-contain"
        src={sitePic}
        height={40}
        width={40}
        alt=""
      />
      <h1>{name}</h1>
    </a>
  );
}

export default DropdownItem;
