import React from 'react'

interface IStoryProps {
    username: string;
    img: string;
}

function Story ({ img, username }: IStoryProps) {
    return (
        <div className="">
            <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" src={"https://robohash.org/set_set1/bgset_bg2/kQqaIfGqxsjFoNIT"} alt={username} />
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}

export default Story;