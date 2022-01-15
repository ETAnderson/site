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
  text: 'Hello this is gonna be the new INTRO body! Hopefully using the body as a component will make single page transitions cleaner'
}

const Skills = {
  image: 'https://avatars.githubusercontent.com/u/2357717?v=4',
  text: 'Hello this is gonna be the new SKILL body! Hopefully using the body as a component will make single page transitions cleaner'
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

          <HeaderItem  Icon={CollectionIcon} title='Github' />

        </div>
      </header> 
      {/* Header - Name github  Intro Skills */}
      <Body display={currentDisplay}/>
      {/* Body req: image=svg && text=string */}
    </div>
  )
}
