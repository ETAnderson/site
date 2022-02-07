import Head from "next/head";
import { useState } from "react";
import Body from "../components/Body";
import HeaderItem from "../components/HeaderItem";
import {
  UserCircleIcon,
  CollectionIcon,
  BeakerIcon,
  MoonIcon,
  DocumentDownloadIcon,
} from "@heroicons/react/outline";
import Dropdown from "../components/Dropdown";
import { Display, Site } from "../typings";
import DropdownItem from "../components/DropdownItem";
import { Intro } from "../data/IntroData";
import { Skills } from "../data/SkillsData";
import { useTheme } from "next-themes";

// TODO: 1: set up grid for body
// 2: change intro and skills objects into "image"string and "articles"array of strings
// 3: set up grid templating for mobile and desktop breakpoints
// 4: seperate body into smaller articles for layout
// 5: assign articles to layout for both breakpoints

interface SiteProps {
  sites: [Site];
}

const sites: { name: string; link: string; sitePic: string }[] = [
  {
    name: "Hulu clone",
    link: "https://hulu-clone-nine-dusky.vercel.app/",
    sitePic: "/hulu-clone.png",
  }, // Hulu
  {
    name: "Medium clone",
    link: "https://medium-clone-five.vercel.app/",
    sitePic: "/medium-clone.png",
  }, // Medium
  {
    name: "Facebook clone",
    link: "https://facebook-clone-79a01.web.app/",
    sitePic: "/facebook-clone.png",
  }, // Facebook
  {
    name: "Gmail clone",
    link: "https://clone-e3a0d.web.app/",
    sitePic: "/gmail-clone.png",
  }, // Gmail
];

export default function Home(
  { image, articles }: Display,
  { link, sitePic }: Site
) {
  const [currentDisplay, setCurrentDisplay] = useState(Intro);

  const [isDropped, setIsDropped] = useState(false);

  const { theme, setTheme } = useTheme();

  return (
    <div className="">
      <Head>
        <title>Eric Anderson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col sm:flex-row mx-5 mt-5 justify-between items-center">
        <h1 className="text-4xl md:pb-5">ERIC ANDERSON</h1>
        <div
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="flex flex-col p-2 cursor-pointer justify-center items-center group"
        >
          <MoonIcon className="h-8 group-hover:animate-bounce" />
          <h1 className=" opacity-0 group-hover:opacity-100 tracking-widest">
            {" "}
            Toggle to {theme === "light" ? "dark" : "light"}
          </h1>
        </div>
        <div className="flex flex-row justify-evenly ">
          <HeaderItem
            onClick={() => setCurrentDisplay(Intro)}
            Icon={UserCircleIcon}
            title="Intro"
          />
          <HeaderItem
            onClick={() => setCurrentDisplay(Skills)}
            Icon={BeakerIcon}
            title="Skills"
          />
          <button onClick={() => setIsDropped(!isDropped)}>
            <Dropdown />
          </button>

          <a
            className="group flex flex-col items-center cursor-pointer group w-12 sm:w-20 dark:hover:text-white hover:text-[#06202A]"
            href="/Eric Anderson Resume.pdf"
            download
          >
            <DocumentDownloadIcon className="h-8 mb-1 group-hover:animate-bounce" />
            <h1 className="opacity-0 group-hover:opacity-100 tracking-widest">
              Resume
            </h1>
          </a>

          <a
            className="group flex flex-col items-center cursor-pointer group w-12 sm:w-20 dark:hover:text-white hover:text-[#06202A]"
            href="https://github.com/ETAnderson"
          >
            <CollectionIcon className="h-8 mb-1 group-hover:animate-bounce " />
            <h1 className="opacity-0 group-hover:opacity-100 tracking-widest">
              {" "}
              Github{" "}
            </h1>
          </a>
        </div>
      </header>

      <hr className="border-gray-800 mx-5 " />

      <div className="flex flex-col md:flex-row items-center m-5 md:justify-between   ml-15 ">
        {isDropped &&
          sites.map((site) => (
            <DropdownItem
              key={site.name}
              name={site.name}
              link={site.link}
              sitePic={site.sitePic}
            />
          ))}
      </div>
      {isDropped && <hr className="border-gray-800 m-5 " />}

      <Body image={currentDisplay.image} articles={currentDisplay.articles} />
    </div>
  );
}
