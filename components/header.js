import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <>
            <div className='flex mt-8 ml-4 -mb-4'>
                <div >
                    <Image src="/images/SB.jpg" alt="Logo" width={150} height={150} priority></Image>
                </div>
                <div className='grid grid-cols-3 grid-rows-2 h-fit gap-2 mt-10 '>
                    <Link href={'/'}><a className='underline-nav relative text-left mx-3 px-0 py-1 tracking-wide w-fit ' >HOME</a></Link>
                    <Link href={'/'}><a className='underline-nav relative text-left mx-3 px-0 py-1 tracking-wide w-fit' >YOUTUBE</a></Link>
                    <Link href={'/'}><a className='underline-nav relative text-left mx-3 px-0 py-1 tracking-wide w-fit' >PROFILE</a></Link>
                    <Link href={'/'}><a className='underline-nav relative text-left mx-3 px-0 py-1 tracking-wide w-fit' >ABOUT</a></Link>
                    <Link href={'/todo'}><a className='underline-nav relative text-left mx-3 px-0 py-1 tracking-wide w-fit text-purple-500' >TODO</a></Link>
                </div>
            </div>
        </>
    )
}