import Head from 'next/head'
import { useState } from 'react';
import Body from '../components/Body'
import HeaderItem from "../components/HeaderItem"
import {
    UserCircleIcon,
    CollectionIcon,
    BeakerIcon,
} from '@heroicons/react/outline'



type BodyProps = {
  image: string,
  text: string,
}

const Intro= {
  image: 'https://avatars.githubusercontent.com/u/2357717?v=4',
  text: 'Hello this is placeholder text for the new INTRO body! The skills button and info button are working and more is coming so keep an eye out! Please feel free to contact me about a similiar site or web project, as I also develop web applications! anderson.eric.t@gmail.com'
}

const Skills = {
  image:"https://raw.githubusercontent.com/ETAnderson/site/main/public/RainbowTree.jpg",
  text: 'So far, this website has been built using the fantastic Nextjs, and in particular the React hook "useState" to manage a state and replicated multi-page functionality from a single page app, which provides a more pleasant user experience and better search engine optimization. The beautiful painting above, however, was made entirely by my even more beautiful wife, Rochelle!'
}


export default function Home({ image, text }: BodyProps) {
  const [ currentDisplay, setCurrentDisplay ] = useState(Intro);

  const onClick = (display: any) => {
    setCurrentDisplay({
      image: display.image,
      text: display.text
    });
  }

  return (
    <div className="">
      <Head>
        <title>Eric Anderson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
        <h1 className="text-2xl pb-10">ERIC ANDERSON</h1>
        <div className='flex flex-row justify-evenly max-w-2xl'>
        
          <HeaderItem onClick={() =>onClick(Intro)} Icon={UserCircleIcon} title='Intro' />

          <HeaderItem onClick={() => onClick(Skills)} Icon={BeakerIcon} title='Skills' />

          <a className='group flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white' href='https://github.com/ETAnderson'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg> 
            <h1 className='opacity-0 group-hover:opacity-100 tracking-widest'> Github </h1>
          </a>

        </div>
      </header> 
      {/* Header - Name github  Intro Skills */}
      <Body display={currentDisplay}/>
      {/* Body req: image=svg && text=string */}
    </div>
  )
}
