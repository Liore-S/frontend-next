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
        <Marquee speed={200} direction='left' gradient={false} className='mb-3'>
          <SlidingLeft />
        </Marquee>
        <Marquee speed={200} direction='right' gradient={false}>
          <SlidingRight />
        </Marquee>
      </div>
    </>
  )
}
