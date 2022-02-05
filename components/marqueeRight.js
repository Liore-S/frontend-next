import Image from "next/image"
import Link from "next/link"

export default function SlidingRight() {
    return (
        <>
            <div className="marquee-item w-72 md:w-[24.7rem]">
                <Image src="/images/anime_scenery.jpg" width={380} height={220} layout="responsive" priority></Image>
            </div>
            <div className="marquee-item w-72 md:w-[24.7rem]">
                <Link href={'/manuk'}>
                    <Image src="/images/Ayame-dorime.jpg" width={380} height={220} layout="responsive" priority></Image>
                </Link >
            </div>
            <div className="marquee-item w-72 md:w-[24.7rem]">
                <Link href={'/manuk'}>
                    <Image src="/images/chroneco_Oozora_Subaru.jpg" width={380} height={220} layout="responsive" priority></Image>
                </Link >
            </div>
            <div className="marquee-item w-72 md:w-[24.7rem]">
                <Link href={'/manuk'}>
                    <Image src="/images/towa.jpg" width={380} height={220} layout="responsive" priority ></Image>
                </Link >
            </div>
            <div className="marquee-item w-72 md:w-[24.7rem]">
                <Link href={'/manuk'}  >
                    <Image src="/images/subaru_rex.jpg" width={380} height={220} layout="responsive" priority></Image>
                </Link>
            </div>
            <div className="marquee-item w-72 md:w-[24.7rem]">
                <Link href={'/manuk'} >
                    <Image src="/images/Tuna.png" width={380} height={220} layout="responsive" priority></Image>
                </Link>
            </div>
            <div className="marquee-item w-72 md:w-[24.7rem]">
                <Link href={'/manuk'} >
                    <Image src="/images/kleeLuc_.png" width={380} height={220} layout="responsive" priority></Image>
                </Link>
            </div>
            <div className="marquee-item w-72 md:w-[24.7rem]">
                <Link href={'/manuk'} >
                    <Image src="/images/Kleeluc.png" width={380} height={220} layout="responsive" priority></Image>
                </Link>
            </div>
        </>
    )
}