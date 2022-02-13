import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
function Header () {
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-10">
            <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
                {/* Left */}
                <div className="relative hidden w-24 cursor-pointer lg:inline-grid">
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
                    <Image
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                {/* Middle */}
                <div className="max-w-xs">
                    <div className="relative mt-1 rounded-md p-3">
                        <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
                            <SearchIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search"
                            className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
                        />
                    </div>
                </div>
                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 w-10 cursor-pointer md:hidden" />

                    <div className="navBtn relative">
                        <PaperAirplaneIcon className="navBtn rotate-45" />
                        <div className="absolute -top-1 -right-2 text-xs h-5 w-5 flex items-center justify-center rounded-full bg-red-500 animate-pulse text-white">
                            3
                        </div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />

                    <img
                        src="https://scontent.fmdl4-3.fna.fbcdn.net/v/t1.6435-9/33083052_375460019611960_2067366586485833728_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-803kPWisC0AX_erz7y&_nc_ht=scontent.fmdl4-3.fna&oh=00_AT_Ni8q5gUXxREyku6ZKm21nuSQSeXhnvZnvYUDJGRcZrw&oe=622E281B"
                        alt="profile"
                        className="h-10 cursor-pointer rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
