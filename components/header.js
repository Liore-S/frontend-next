import Image from "next/image"
import Link from "next/link"
import { Transition, Menu } from "@headlessui/react"
import { Fragment } from "react"
import { MenuIcon } from "@heroicons/react/solid"

const navigation = [
  { name: 'PROFILE', href: '/pf' },
  { name: 'YOUTUBE', href: '/yt' },
  { name: 'ABOUT', href: '/' },
  { name: 'TODO', href: '/todo' }
]

export default function Header() {
  return (
    <>
      <div className='flex relative mt-4 -ml-4 -mb-10 md:mt-8 md:ml-4 md:-mb-4'>
        {/* Image */}
        <div>
          <Link href={"/"}>
            <Image src="/images/SB.jpg" alt="Logo" width={150} height={150} priority className="cursor-pointer"></Image>
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className='md:grid grid-cols-2 grid-rows-2 h-fit gap-0 mt-10 -mx-3 hidden'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}>
              <a className='underline-nav relative text-left mx-1 md:mx-3 px-0 py-1 tracking-wide w-fit'>
                {item.name}
              </a></Link>
          ))}
        </div>
        <div className="relative md:hidden w-full">
          <Menu as="div" className=" md:hidden w-full">
            <div className="ml-7 pt-5">
              <Menu.Button className="absolute right-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open user menu</span>
                <MenuIcon className="w-5 h-5 text-slate-800" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute top-14 right-2 ml-7 mt-1 w-48 rounded-md shadow-lg py-1 bg-white z-20">
                {navigation.map((item)=>(
                  <Menu.Item >
                    {({ active }) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={
                          `${active && 'bg-blue-500 text-white'} block mx-2 rounded-lg py-1 pl-2 text-sm my-1`}
                      >
                        {item.name}</a>
                  )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  )
}