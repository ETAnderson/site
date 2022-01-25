import React from "react";
import { Site } from "../typings";
import DropdownItem from "./DropdownItem";

interface SiteProps {
  sites: [Site];
}

function Dropdown({ sites }: SiteProps) {
  return (
    <div>
      <div>
        <h1>Demos</h1>
      </div>
      <div>
        {sites.map((site) => (
          <DropdownItem link={site.link} sitePic={site.sitePic} />
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
