import Image from "next/image";
import React from "react";
import { Site } from "../typings";

function DropdownItem({ link, sitePic }: Site) {
  return (
    <a href={link}>
      <Image src={sitePic} height={100} width={200} alt="" />
    </a>
  );
}

export default DropdownItem;
