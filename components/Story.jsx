import React from 'react'

function Story({ img, username }) {
  return (
    <div className="">
      <img
        className="h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] transition duration-200 ease-out hover:scale-110"
        src={'https://robohash.org/set_set1/bgset_bg2/kQqaIfGqxsjFoNIT'}
        alt={username}
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}

export default Story
