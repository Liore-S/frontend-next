import Image from "next/image"
import Link from "next/link"

export default function SlidingRight() {
    return (
        <>
            <div className="marquee-item">
                <Link href={"/manuk"} >
                    <Image src="/images/anime_scenery.jpg" width={320} height={190} className='w-5/6'></Image>
                </Link>
            </div>
            <div className="marquee-item">
                <Link href={'/manuk'} className="marquee-item">
                    <Image src="/images/Ayame-dorime.jpg" width={320} height={190} className='w-5/6 '></Image>
                </Link >
            </div>
            <div className="marquee-item">
            <Link href={'/manuk'} className="marquee-item">
                <Image src="/images/chroneco_Oozora_Subaru.jpg" width={320} height={190} className='w-5/6 '></Image>
            </Link >
            </div>
            <div className="marquee-item">
            <Link href={'/manuk'} className="marquee-item">
                <Image src="/images/towa.jpg" width={320} height={190} className='w-5/6 '></Image>
            </Link >
            </div>
            <div className="marquee-item">
            <Link href={'/manuk'} className="marquee-item" >
                <Image src="/images/subaru_rex.jpg" width={320} height={190} className='w-5/6 '></Image>
            </Link>
            </div>
        </>
    )
}