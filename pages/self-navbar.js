import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { MenuIcon } from "@heroicons/react/solid"
import Link from "next/link"

export default function Selfnavbar() {
  return (
    <Menu as="div" className="relative sm:hidden">
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
        <Menu.Items className="absolute top-14 right-2 ml-7 mt-1 w-48 rounded-md shadow-lg py-1 bg-white ">
          <Menu.Item >
            {({ active }) => (
              <a href={"/navbar"}
                className={`${active && 'bg-blue-500 text-white'} block mx-2 rounded-lg py-1 pl-2 text-sm my-1`}
              >Navbar</a>
            )}
          </Menu.Item>
          <Menu.Item >
            {({ active }) => (
              <a href={"/self-navbar"}
                className={`${active && 'bg-blue-500 text-white'} block mx-2 rounded-lg py-1 pl-2 text-sm my-1`}
              >Self-Navbar</a>
            )}
          </Menu.Item>
          <Menu.Item >
            {({ active }) => (
              <a href={"/navbar-tes"}
                className={`${active && 'bg-blue-500 text-white'} block mx-2 rounded-lg py-1 pl-2 text-sm my-1`}
              >Navbar-tes</a>
            )}
          </Menu.Item>
          <Menu.Item >
            {({ active }) => (
              <a href={"/button"}
                className={`${active && 'bg-blue-500 text-white'} block mx-2 rounded-lg py-1 pl-2 text-sm my-1`}
              >Button</a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}