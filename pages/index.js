import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <body >
      <div className='align-middle'>
        <h1 className='h1-blue mt-4 hover:animate-ping '>
          Hello Liore
        </h1>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 w-fit gap-2'>
        <a className='underline-nav relative text-center mx-3 px-0 py-1' href='/'>Home</a>
        <a className='underline-nav relative text-center mx-3 px-0 py-1' href='/'>Youtube</a>
        <a className='underline-nav relative text-center mx-3 px-0 py-1' href='/'>Profile</a>
        <a className='underline-nav relative text-center mx-3 px-0 py-1' href='/'>About</a>
        <br />
      </div>
      <div className='flex'>
        <a className='underline-nav relative text-center m-3 p-1' href='/'>Home</a>
        <a className='underline-nav relative text-center m-3 p-1' href='/'>Youtube</a>
        <a className='underline-nav relative text-center m-3 p-1' href='/'>Profile</a>
        <a className='underline-nav relative text-center m-3 p-1' href='/'>About</a>

      </div>
      {/* <button className="relative m-3 p-3 bg-slate-200 hover:bg-slate-300 rounded-md text-black align-middle shadow-lg 
        after:absolute after:w-[100%] after:h-1 after:left-0 after:bottom-0 after:bg-orange-600">Button A</button> */}
    </body>
  )
}
