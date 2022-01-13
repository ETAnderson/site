import Head from 'next/head'
import { useState } from 'react';
import Body from '../components/Body'


import Header from '../components/Header'
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


  return (
    <div className="">
      <Head>
        <title>Eric Anderson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      {/* Header - Name github  Intro Skills */}
      <Body image={currentDisplay.image} text={currentDisplay.text}/>
      {/* Body req: image=svg && text=string */}
    </div>
  )
}
