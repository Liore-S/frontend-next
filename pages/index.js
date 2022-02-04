import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Marquee from "react-fast-marquee"
import SlidingLeft from '../components/marqueeLeft'
import SlidingRight from '../components/marqueeRight'

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <Marquee speed={50} direction='left' gradient={false} className='mb-5'>
          <SlidingLeft />
        </Marquee>
        <Marquee speed={50} direction='right' gradient={false} className='mb-6'>
          <SlidingRight />
        </Marquee>
      </div>
    </>
  )
}
